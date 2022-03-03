const db = require('../models');
const sendMail =require('../utils/sendMail');
const Inf = db.inf;

// create

const addInf = async(req,res)=>{
    try {
        const inf = await Inf.create(req.body);
        // await sendMail(["darshantejha@gmail.com"], `INF Submitted `, `<p>TATA has submitted a new INF. The file is attached here for your reference.</p><p>IITISM Company Registration Portal Notifications</p>`);
            res.status(200).json(inf);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all Inf

const getAllInf = async(req,res)=>{
    try {
        const inf = await Inf.findAll({});
        res.status(200).json(inf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single Inf

const getOneInf = async(req,res)=>{
    try {
        let id = req.params.id;
        const inf = await Inf.findAll({where:{cid:id}});
        res.status(200).json(inf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}


//update Inf

const updateInf = async(req,res)=>{
    try {
        let id = req.params.id;
        let e = await Inf.findOne({where:{id:id}});
        e = await e.update(req.body);
        res.status(200).json(e);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete Inf

const deleteInf = async(req,res)=>{
    try {
        let id = req.params.id;
        await Inf.destroy({where:{id:id}});
        res.status(200).json("inf deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addInf,
    getAllInf,
    getOneInf,
    updateInf,
    deleteInf
}

