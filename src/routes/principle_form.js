const { principle_form, get_principle_form } = require("../controllers/principle_form");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/principle_form",
    //    config.authRequest
    get_principle_form
  );
  app.get(
    "/api/get_principle_form",
    //    config.authRequest
    get_principle_form
  );
 
};

