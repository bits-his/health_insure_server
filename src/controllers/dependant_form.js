import db from "../models";

export const dependant_form = (req, res) => {
  const {
    id = null,
    first_name = null,
    sur_name = null,
    organisation = "",
    PSNN = null,
    DOB = null,
    mobile = null,
    type_of_benefactor = null,
    gender = null,
    select_HCP = null,
    browse = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call dependant_form(:id,:query_type,:first_name,:sur_name,:organisation,:PSNN,:DOB,:mobile,:type_of_benefactor,:gender,:select_HCP,:browse)`,
      {
        replacements: {     
          id,
          query_type,
          first_name,
          sur_name,
          organisation,
          PSNN,
          DOB,
          mobile,
          type_of_benefactor,
          gender,
          select_HCP,
          browse,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_dependant_form = (req, res) => {
  const {
    id = 0,
    first_name = null,
    sur_name = null,
    organisation = "",
    PSNN = null,
    DOB = null,
    mobile = null,
    type_of_benefactor = null,
    gender = null,
    select_HCP = null,
    browse = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call dependant_form(:id,:query_type,:first_name,:sur_name,:organisation,:PSNN,:DOB,:mobile,:type_of_benefactor,:gender,:select_HCP,:browse)`,
      {
        replacements: {
          id,
          query_type,
          first_name,
          sur_name,
          organisation,
          PSNN,
          DOB,
          mobile,
          type_of_benefactor,
          gender,
          select_HCP,
          browse,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
