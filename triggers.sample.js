module.exports = {
    "blizt": function blitz(req, res) {
         if (/blitzmegaplex.com$/.test(req.headers.host)) return true;
     },
    "21cineplex" : function cineplex(req, res) {
         if (/21cineplex.com$/.test(req.headers.host)) return true;
    },
    "cinemaxx" : function cinemaxx(req, res) {
         if (/cinemaxxtheater.com/.test(req.headers.host)) return true;
    },
    "traktmdb" : function traktmdb(req, res) {
         if (/api.themoviedb.org/.test(req.headers.host)) return true;
         if (/api.trakt.tv/.test(req.headers.host)) return true;
    },
    "ismayaApi": function isIsmayaApi(req, res) {
         if (/ismayagroup.com$/.test(req.headers.host)) return true;
    },
    "optimizer" : function optimizer(req, res) {
        return false;
    }
};