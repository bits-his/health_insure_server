const {formal_sector, get_formal_sector,} = require("../controllers/formal_sector");
  const config = require("../config/config");
  
  module.exports = (app) => {
    app.post(
      "/api/formal_sector",
      //    config.authRequest
      formal_sector
    );
    app.get(
      "/api/get_formal_sector",
      //    config.authRequest
      get_formal_sector
    );
  };
  