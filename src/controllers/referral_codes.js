import db from "../models";

export const referral_codes = (req, res) => {
  const {
    id = 0,
    date_time = null,
    refered_by = null,
    refered_to = null,
    enefiary_code = null,
    hospital_no = null,
    address = null,
    clinical_finding = null,
    treatment_before_referral = null,
    diagonosis = null,
    reasons_for_referal = null,
    refery_personel = null,
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call referral_codes(:id,:query_type,:date_time,:refered_by,:refered_to,:enefiary_code,:hospital_no,:address,:clinical_finding,:treatment_before_referral,:diagonosis,:reasons_for_referal,:refery_personel)`,
      {
        replacements: {
          id,
          query_type,
          date_time,
          refered_by,
          refered_to,
          enefiary_code,
          hospital_no,
          address,
          clinical_finding,
          treatment_before_referral,
          diagonosis,
          reasons_for_referal,
          refery_personel,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const get_referral_codes = (req, res) => {
  const {
    id = 0,
    date_time = null,
    refered_by = null,
    refered_to = null,
    enefiary_code = null,
    hospital_no = null,
    address = null,
    clinical_finding = null,
    treatment_before_referral = null,
    diagonosis = null,
    reasons_for_referal = null,
    refery_personel = null,

    // query_type = "select"
  } = req.body;
  const { query_type = "" } = req.query;

  db.sequelize
    .query(
      `call referral_codes(:id,:query_type,:date_time,:refered_by,:refered_to,:enefiary_code,:hospital_no,:address,:clinical_finding,:treatment_before_referral,:diagonosis,:reasons_for_referal,:refery_personel)`,
      {
        replacements: {
          id,
          query_type,
          date_time,
          refered_by,
          refered_to,
          enefiary_code,
          hospital_no,
          address,
          clinical_finding,
          treatment_before_referral,
          diagonosis,
          reasons_for_referal,
          refery_personel,
        },
      }
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};
