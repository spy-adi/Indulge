const db = require('../models');
const infBtech = db.infbtech;
const add = async(req,res)=>{
    try {
        const {infId,btechProgCourseId} = req.body;
        const inf_btechProg = await infBtech.create({infId:infId,btechProgCourseId:btechProgCourseId});
            res.status(200).json(inf_btechProg);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

module.exports = {
    add
}
