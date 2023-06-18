import db from "../models";

export const register = (req, res) => {
  const {
    id = 0,
    DATE = null,
    DOBString = null,
    EMPID = "",
    employer = null,
    EntityType = null,
    Firstname = null,
    Gender = null,
    HCPAddress = null,
    HCPCode = null,
    HCPName = null,
    HMO_ID=null,
    surname=null,
    Type=null,
    child_id=''
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call register(:id,:query_type,:DATE,:DOBString,:EMPID,:employer,:EntityType,:Firstname,:Gender,:HCPAddress,:HCPCode,:HCPName,:HMO_ID,:surname,:Type,:child_id)`,
      {
        replacements: {
          id,
          query_type,
          DATE,
          DOBString,
          EMPID,
          employer,
          EntityType,
          Firstname,
          Gender,
          HCPAddress,
          HCPCode,
          HCPName,
          HMO_ID,
          surname,
          Type,
          child_id
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_register = (req, res) => {
  const {
    id = 0,
    DATE = null,
    DOBString = null,
    EMPID = "",
    employer = null,
    EntityType = null,
    Firstname = null,
    Gender = null,
    HCPAddress = null,
    HCPCode = null,
    HCPName = null,
    HMO_ID=null,
    surname=null,
    Type=null,
    query_type = "select",
    child_id=''
  } = req.body;
  // const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call register(:id,:query_type,:DATE,:DOBString,:EMPID,:employer,:EntityType,:Firstname,:Gender,:HCPAddress,:HCPCode,:HCPName,:HMO_ID,:surname,:Type,:child_id)`,
      {
        replacements: {
          id,
          query_type,
          DATE,
          DOBString,
          EMPID,
          employer,
          EntityType,
          Firstname,
          Gender,
          HCPAddress,
          HCPCode,
          HCPName,
          HMO_ID,
          surname,
          Type,
          child_id
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};


export const getView = (req,res)=>{
  const {EMPID=''}=req.query;

  db.sequelize.query(`SELECT * FROM register where EMPID=${EMPID}`)
  .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });

}

export const getBeneficiaries = (req,res)=>{
  const {EMPID=''}=req.query;

  db.sequelize.query(`SELECT * FROM register where child_id=${EMPID}`)
  .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });

}