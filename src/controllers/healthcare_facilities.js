import db from "../models";

export const healthcare_facilities = (req, res) => {
  const {
    code = null,
    name = null,
    NHIS_no = null,
    phone = null,
    email = null,
    address = null,
    type_of_facility = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call facilities(:query_type,:name,:code,:phone,:NHIS_no,:email,:type_of_facility,:address)`,
      {
        replacements: {
          code,
          query_type,
          name,
          NHIS_no,
          phone,
          email,
          address,
          type_of_facility,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_healthcare_facilities = (req, res) => {
  const {
    code = null,
    name = null,
    NHIS_no = "",
    phone = null,
    email = null,
    address = null,
    type_of_facility = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call facilities(:query_type,:name,:code,:phone,:NHIS_no,:email,:type_of_facility,:address)`,
      {
        replacements: {
          code,
          query_type,
          name,
          NHIS_no,
          phone,
          email,
          address,
          type_of_facility,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
