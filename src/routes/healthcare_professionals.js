const { healthcare_professionals, get_healthcare_professionals } = require("../controllers/healthcare_professionals");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/healthcare_professionals",
    //    config.authRequest
    healthcare_professionals
  );
  app.get(
    "/api/get_healthcare_professionals",
    //    config.authRequest
    get_healthcare_professionals
  );
 
};

