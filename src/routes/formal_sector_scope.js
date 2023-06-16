const {formal_sector_scope, get_formal_sector_scope,} = require("../controllers/formal_sector_scope");
  const config = require("../config/config");
  
  module.exports = (app) => {
    app.post(
      "/api/formal_sector_scope",
      //    config.authRequest
      formal_sector_scope
    );
    app.get(
      "/api/get_formal_sector_scope",
      //    config.authRequest
      get_formal_sector_scope
    );
  };
  