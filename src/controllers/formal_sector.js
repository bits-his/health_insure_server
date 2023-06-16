import db from "../models";

export const formal_sector = (req, res) => {
  const {
    id = null,
    type_of_formal_sector = null,
    name = "",
    category = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call formal_sector(:id,:query_type,:type_of_formal_sector,:name,:category)`,
      {
        replacements: {
          id,
          query_type,
          type_of_formal_sector,
          name,
          category,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_formal_sector = (req, res) => {
  const {
    id = null,
    type_of_formal_sector = null,
    name = "",
    category = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call formal_sector(:id,:query_type,:type_of_formal_sector,:name,:category)`,
      {
        replacements: {
          id,
          query_type,
          type_of_formal_sector,
          name,
          category,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
