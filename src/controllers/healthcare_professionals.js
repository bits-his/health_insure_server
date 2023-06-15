import db from "../models";

export const healthcare_professionals = (req, res) => {
  const {
    // KSHMA_no = 0,
    name = null,
    phone = "",
    email = null,
    profession = null,
    date_of_birth = null,
    status=null,
    address=null
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call professionals(:query_type,:name,:phone,:email,:profession,:date_of_birth,:status,:address)`,
      {
        replacements: {
        //   KSHMA_no,
          query_type,
          name,
          phone,
          email,
          profession,
          date_of_birth,
          status,
          address
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_healthcare_professionals = (req, res) => {
  const {
    // KSHMA_no = null,
    name = null,
    phone = "",
    email = null,
    profession = null,
    date_of_birth = null,
    status=null,
    address=null
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call professionals(:query_type,:name,:phone,:email,:profession,:date_of_birth,:status,:address)`,
      {
        replacements: {
        //   KSHMA_no,
          query_type,
          name,
          phone,
          email,
          profession,
          date_of_birth,
          status,
          address	
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
