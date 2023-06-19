const {drug_list, get_drug_list, labService,} = require("../controllers/drug_list");
  const config = require("../config/config");
  
  module.exports = (app) => {
    app.post(
      "/api/drug_list",
      //    config.authRequest
      drug_list
    );
    app.get(
      "/api/get_drug_list",
      //    config.authRequest
      get_drug_list
    );
    app.post('/api/lab-service',labService)
  };
  