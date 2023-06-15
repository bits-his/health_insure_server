const { add_professionals, get_add_professionals } = require("../controllers/add_professionals");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/add_professionals",
    //    config.authRequest
    add_professionals
  );
  app.post(
    "/api/add_professionals",
    //    config.authRequest
    get_add_professionals
  );
 
};

