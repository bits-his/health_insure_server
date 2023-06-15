const { register_organisation, get_register_organisation } = require("../controllers/register_organisation");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/register_organisation",
    //    config.authRequest
    register_organisation
  );
  app.get(
    "/api/get_register_organisation",
    //    config.authRequest
    get_register_organisation
  );
 
};

