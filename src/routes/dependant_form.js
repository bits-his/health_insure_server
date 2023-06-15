const {
  dependant_form,
  get_dependant_form,
} = require("../controllers/dependant_form");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/dependant_form",
    //    config.authRequest
    dependant_form
  );
  app.get(
    "/api/get_dependant_form",
    //    config.authRequest
    get_dependant_form
  );
};
