import db from "../models";

export const register_organisation = (req, res) => {
  const {
    id = 0,
    facility_code = null,
    name = null,
    address = null,
    phone_no = null,
    email = null,
    web_address = null,
    contact_person = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call register_organisation(:id,:query_type,:facility_code,:name,:address,:phone_no,:email,:web_address,:contact_person)`,
      {
        replacements: {
          id,
          query_type,
          facility_code,
          name,
          address,
          phone_no,
          email,
          web_address,
          contact_person,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_register_organisation = (req, res) => {
  const {
    id = 0,
    facility_code = null,
    name = null,
    address = null,
    phone_no = null,
    email = null,
    web_address = null,
    contact_person = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call register_organisation(:id,:query_type,:facility_code,:name,:address,:phone_no,:email,:web_address,:contact_person)`,
      {
        replacements: {
          id,
          query_type,
          facility_code,
          name,
          address,
          phone_no,
          email,
          web_address,
          contact_person,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
