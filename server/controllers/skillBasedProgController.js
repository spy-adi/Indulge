const db = require('../models');
const skillBasedProg = db.skillBasedProg;

// create

const addskillBasedProg = async(req,res)=>{
    try {
        const skillBasedProg = await skillBasedProg.create(req.body);
            res.status(200).json(skillBasedProg);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all skillBasedProg

const getAllskillBasedProg = async(req,res)=>{
    try {
        const skillBasedProg = await skillBasedProg.findAll({});
        res.status(200).json(skillBasedProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single skillBasedProg

const getOneskillBasedProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const skillBasedProg = await skillBasedProg.findOne({where:{id:id}});
        res.status(200).json(skillBasedProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update skillBasedProg

const updateskillBasedProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedskillBasedProg = await skillBasedProg.update(req.body,{where:{id:id}});
        res.status(200).json(updatedskillBasedProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete skillBasedProg

const deleteskillBasedProg = async(req,res)=>{
    try {
        let id = req.params.id;
        await skillBasedProg.destroy({where:{id:id}});
        res.status(200).json("skillBasedProg deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addskillBasedProg,
    getAllskillBasedProg,
    getOneskillBasedProg,
    updateskillBasedProg,
    deleteskillBasedProg
}

