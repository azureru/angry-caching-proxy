module.exports = {
    "mata2sites": function isblitzAndCinemaDevelopment(req, res) {
    	 if (/blitzmegaplex.com$/.test(req.headers.host)) return true;
    	 if (/21cineplex.com$/.test(req.headers.host)) return true;
    },

    "ismayaApi": function isIsmayaApi(req, res) {
    	 if (/ismayagroup.com$/.test(req.headers.host)) return true;
    }
};