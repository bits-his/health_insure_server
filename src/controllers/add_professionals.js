import db from "../models";

export const add_professionals = (req, res) => {
  const {
    id = null,
    qualification = null,
    professionals = null,
    no = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call add_professionals(:id,:query_type,:qualification,:professionals,:no)`,
      {
        replacements: {
          id,
          query_type,
          qualification,
          professionals,
          no,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_add_professionals = (req, res) => {
  const {
    id = null,
    qualification = null,
    professionals = "",
    no = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call add_professionals(:id,:query_type,:qualification,:professionals,:no)`,
      {
        replacements: {
          id,
          query_type,
          qualification,
          professionals,
          no,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
