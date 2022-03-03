const db = require('../models');
const PhdProg = db.phdProg;

// create

const addPhdProg = async(req,res)=>{
    try {
        const phdProg = await PhdProg.create(req.body);
            res.status(200).json(phdProg);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all PhdProg

const getAllPhdProg = async(req,res)=>{
    try {
        const phdProg = await PhdProg.findAll({});
        res.status(200).json(phdProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single PhdProg

const getOnePhdProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const phdProg = await PhdProg.findOne({where:{id:id}});
        res.status(200).json(phdProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update PhdProg

const updatePhdProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedPhdProg = await PhdProg.update(req.body,{where:{id:id}});
        res.status(200).json(updatedPhdProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete PhdProg

const deletePhdProg = async(req,res)=>{
    try {
        let id = req.params.id;
        await PhdProg.destroy({where:{id:id}});
        res.status(200).json("phdProg deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addPhdProg,
    getAllPhdProg,
    getOnePhdProg,
    updatePhdProg,
    deletePhdProg
}

