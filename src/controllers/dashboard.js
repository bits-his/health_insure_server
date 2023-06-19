import db from "../models";


export const querDashboard =(req,res)=>{
    const {query_type=''}=req.query;
    db.sequelize.query(`CALL dashboard(:query_type)`,{
        replacements:{
            query_type
        }
    })
    .then((results)=>res.json({success:true,results}))
    .catch((err)=>res.status(500).json({success:false}))
}