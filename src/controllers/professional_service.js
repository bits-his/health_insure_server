import db from "../models";

export const professional_service = (req, res) => {
  const {
    id = null,
    select_group = null,
    sub_group_name = "",
    amount = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call professional_service(:id,:query_type,:select_group,:sub_group_name,:amount)`,
      {
        replacements: {
          id,
          query_type,
          select_group,
          sub_group_name,
          amount,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_professional_service = (req, res) => {
  const {
    id = null,
    select_group = null,
    sub_group_name = "",
    amount = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call professional_service(:id,:query_type,:select_group,:sub_group_name,:amount)`,
      {
        replacements: {
          id,
          query_type,
          select_group,
          sub_group_name,
          amount,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
