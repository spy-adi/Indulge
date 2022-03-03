const db = require('../models');
const DdIntProg = db.ddIntProgs;

// create

const addDdIntProg = async(req,res)=>{
    try {
        const ddIntProgs = await DdIntProg.create(req.body);
            res.status(200).json(ddIntProgs);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all DdIntProg

const getAllDdIntProg = async(req,res)=>{
    try {
        const ddIntProgs = await DdIntProg.findAll({});
        res.status(200).json(ddIntProgs);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single DdIntProg

const getOneDdIntProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const ddIntProgs = await DdIntProg.findOne({where:{id:id}});
        res.status(200).json(ddIntProgs);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update DdIntProg

const updateDdIntProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedDdIntProg = await DdIntProg.update(req.body,{where:{id:id}});
        res.status(200).json(updatedDdIntProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete DdIntProg

const deleteDdIntProg = async(req,res)=>{
    try {
        let id = req.params.id;
        await DdIntProg.destroy({where:{id:id}});
        res.status(200).json("ddIntProgs deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addDdIntProg,
    getAllDdIntProg,
    getOneDdIntProg,
    updateDdIntProg,
    deleteDdIntProg
}

