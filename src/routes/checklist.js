const { checklist, get_checklist } = require("../controllers/checklist");
const config = require("../config/config");

module.exports = (app) => {
  app.post(
    "/api/checklist",
    //    config.authRequest
    checklist
  );
  app.post(
    "/api/checklist",
    //    config.authRequest
    get_checklist
  );
 
};

