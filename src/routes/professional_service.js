const { professional_service, get_professional_service } = require("../controllers/professional_service");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/professional_service",
    //    config.authRequest
    get_professional_service
  );
  app.get(
    "/api/get_professional_service",
    //    config.authRequest
    get_professional_service
  );
 
};

