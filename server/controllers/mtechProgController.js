const db = require('../models');
const MtechProg = db.mtechProg;

// create

const addMtechProg = async(req,res)=>{
    try {
        const mtechProg = await MtechProg.create(req.body);
            res.status(200).json(mtechProg);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all MtechProg

const getAllMtechProg = async(req,res)=>{
    try {
        const mtechProg = await MtechProg.findAll({});
        res.status(200).json(mtechProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single MtechProg

const getOneMtechProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const mtechProg = await MtechProg.findOne({where:{id:id}});
        res.status(200).json(mtechProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update MtechProg

const updateMtechProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedMtechProg = await MtechProg.update(req.body,{where:{id:id}});
        res.status(200).json(updatedMtechProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete MtechProg

const deleteMtechProg = async(req,res)=>{
    try {
        let id = req.params.id;
        await MtechProg.destroy({where:{id:id}});
        res.status(200).json("mtechProg deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addMtechProg,
    getAllMtechProg,
    getOneMtechProg,
    updateMtechProg,
    deleteMtechProg
}

