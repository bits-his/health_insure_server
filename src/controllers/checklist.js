import db from "../models";

export const checklist = (req, res) => {
  const {
    id = null,
    description = null,
    upload = "",
    available = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call checklist(:id,:query_type,:description,:upload,:available)`,
      {
        replacements: {
          id,
          query_type,
          description,
          upload,
          available,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_checklist = (req, res) => {
  const {
    id = null,
    description = null,
    upload = "",
    available = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call checklist(:id,:query_type,:description,:upload,:available)`,
      {
        replacements: {
          id,
          query_type,
          description,
          upload,
          available,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
