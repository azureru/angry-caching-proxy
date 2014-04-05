var optimist = require("optimist");
var xtend    = require("xtend");
var os       = require("os");

var config = {
    directory      : process.cwd() + "/angry-caching-proxy",
    customTriggers : process.cwd() + "/triggers.js",
    port           : 8080,
    workers        : os.cpus().length,
    triggers       : [
        "apt-get",
        "npm",
        "pypi",
        "rubygems"
    ]
};

try {
    config = xtend(config, require(process.cwd()+ "/config.json"));
} catch(err) {
    // do noth
}

var args = optimist
    .usage("Start Argry Caching Proxy.\n\nUsage: $0")
    .describe("port", "Port to listen")
    .alias("p", "port")
    .describe("directory", "Directory where to write cached files")
    .alias("directory", "d")
    .describe("triggers", "Triggers to activate. Can be defined multiple times.")
    .alias("t", "triggers")
    .describe("workers", "How many node.js processes to use as workes. Defaults to machine cpu core count.")
    .alias("w", "workers")
    .alias("h", "help")
    .argv;

if (args.help) {
    optimist.showHelp();
    process.exit(0);
}

if (args.triggers) args.triggers = [].concat(args.triggers);

config = xtend(config, args);

var triggersObject = require("./buildin-triggers");
try {
    triggersObject = xtend(triggersObject, require(config.customTriggers));
} catch(err) {
    // do noth
}

config.triggerFns = config.triggers.filter(function(triggerName) {
    return config.triggers.indexOf(triggerName) !== -1;
}).map(function(triggerName) {
    return triggersObject[triggerName];
}).filter(function(h) {
    return typeof(h) === "function";
});

module.exports = config;