const db = require('../models');
const MscProg = db.mscProg;

// create

const addMscProg = async(req,res)=>{
    try {
        const mscProg = await MscProg.create(req.body);
            res.status(200).json(mscProg);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all MscProg

const getAllMscProg = async(req,res)=>{
    try {
        const mscProg = await MscProg.findAll({});
        res.status(200).json(mscProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single MscProg

const getOneMscProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const mscProg = await MscProg.findOne({where:{id:id}});
        res.status(200).json(mscProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update MscProg

const updateMscProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedMscProg = await MscProg.update(req.body,{where:{id:id}});
        res.status(200).json(updatedMscProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete MscProg

const deleteMscProg = async(req,res)=>{
    try {
        let id = req.params.id;
        await MscProg.destroy({where:{id:id}});
        res.status(200).json("mscProg deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addMscProg,
    getAllMscProg,
    getOneMscProg,
    updateMscProg,
    deleteMscProg
}

