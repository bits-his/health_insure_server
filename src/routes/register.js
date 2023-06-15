const { register, get_register } = require("../controllers/register");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/register",
    //    config.authRequest
    register
  );
  app.get(
    "/api/get_register",
    //    config.authRequest
    get_register
  );
 
};

