import db from "../models";

export const formal_sector_scope = (req, res) => {
  const {
    id = null,
    enrole_cover_type = null,
    no_of_principle = null,
    no_of_dependants = null,
    no_of_sponses = null,
    extra_dependant = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call formal_sector_scope(:id,:query_type,:enrole_cover_type,:no_of_principle,:no_of_dependants,:no_of_sponses,:extra_dependant)`,
      {
        replacements: {
          id,
          query_type,
          enrole_cover_type,
          no_of_principle,
          no_of_dependants,
          no_of_sponses,
          extra_dependant,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_formal_sector_scope = (req, res) => {
  const {
    id = null,
    enrole_cover_type = null,
    no_of_principle = "",
    no_of_dependants = null,
    no_of_sponses = null,
    extra_dependant = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call formal_sector_scope(:id,:query_type,:enrole_cover_type,:no_of_principle,:no_of_dependants,:no_of_sponses,:extra_dependant)`,
      {
        replacements: {
          id,
          query_type,
          enrole_cover_type,
          no_of_principle,
          no_of_dependants,
          no_of_sponses,
          extra_dependant,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
