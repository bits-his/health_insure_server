import db from "../models";

export const drug_list = (req, res) => {
  const {
    id = null,
    drug_name = null,
    dossage = "",
    stregth = null,
    presentation = null,
    price = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call drug_list(:id,:query_type,:drug_name,:dossage,:stregth,:presentation,:price)`,
      {
        replacements: {
          id,
          query_type,
          drug_name,
          dossage,
          stregth,
          presentation,
          price,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_drug_list = (req, res) => {
  const {
    id = null,
    drug_name = null,
    dossage = "",
    stregth = null,
    presentation = null,
    price = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call drug_list(:id,:query_type,:drug_name,:dossage,:stregth,:presentation,:price)`,
      {
        replacements: {
          id,
          query_type,
          drug_name,
          dossage,
          stregth,
          presentation,
          price,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
