const {referral_codes, get_referral_codes,} = require("../controllers/referral_codes");
  const config = require("../config/config");
  
  module.exports = (app) => {
    app.post(
      "/api/referral_codes",
      //    config.authRequest
      referral_codes
    );
    app.get(
      "/api/get_referral_codes",
      //    config.authRequest
      get_referral_codes
    );
  };
  