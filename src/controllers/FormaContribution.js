import db from "../models";


export const formalContribution = (req,res)=>{

    const {
        organisation='',
 type='',
 category='',
 gradeLevel='',
 contribution='',
 enter_percent=''
    }=req.body;
    const {query_type=''}=req.query;

    db.sequelize.query('CALL FormalContribution(:query_type,:organisation,:type,:category,:gradeLevel,:contribution,:enter_percent) ',{
        replacements:{
            organisation,
 type,
 category,
 gradeLevel,
 contribution,
 query_type,
 enter_percent
        }
    })
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });

}


export const formalScope = (req,res)=>{
    const {enrole_cover_type='', no_of_principle='', no_of_dependants='', no_of_sponses='', extra_dependant=''}=req.body;
    const {query_type=''}=req.query;

    db.sequelize.query('CALL formal_sector_scope(:id,:query_type,:enrole_cover_type,:no_of_principle,:no_of_dependants,:no_of_sponses,:extra_dependant)',{
        replacements:{
            enrole_cover_type, no_of_principle, no_of_dependants, no_of_sponses, extra_dependant,query_type,id:0
        }
    })
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
}