const { healthcare_facilities, get_healthcare_facilities } = require("../controllers/healthcare_facilities");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/healthcare_facilities",
    //    config.authRequest
    healthcare_facilities
  );
  app.get(
    "/api/get_healthcare_facilities",
    //    config.authRequest
    get_healthcare_facilities
  );
 
};

