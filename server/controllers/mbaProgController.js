const db = require('../models');
const MbaProg = db.mbaProg;

// create

const addMbaProg = async(req,res)=>{
    try {
        const mbaProg = await MbaProg.create(req.body);
            res.status(200).json(mbaProg);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all MbaProg

const getAllMbaProg = async(req,res)=>{
    try {
        const mbaProg = await MbaProg.findAll({});
        res.status(200).json(mbaProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single MbaProg

const getOneMbaProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const mbaProg = await MbaProg.findOne({where:{id:id}});
        res.status(200).json(mbaProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update MbaProg

const updateMbaProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedMbaProg = await MbaProg.update(req.body,{where:{id:id}});
        res.status(200).json(updatedMbaProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete MbaProg

const deleteMbaProg = async(req,res)=>{
    try {
        let id = req.params.id;
        await MbaProg.destroy({where:{id:id}});
        res.status(200).json("mbaProg deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addMbaProg,
    getAllMbaProg,
    getOneMbaProg,
    updateMbaProg,
    deleteMbaProg
}

