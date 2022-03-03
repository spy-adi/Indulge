const db = require('../models');
const JobSelectionProcedure = db.jsp;

// create

const addJobSelectionProcedure = async(req,res)=>{
    try {
        const jsp = await JobSelectionProcedure.create(req.body);
            res.status(200).json(jsp);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all JobSelectionProcedure

const getAllJobSelectionProcedure = async(req,res)=>{
    try {
        const jsp = await JobSelectionProcedure.findAll({});
        res.status(200).json(jsp);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single JobSelectionProcedure

const getOneJobSelectionProcedure = async(req,res)=>{
    try {
        let id = req.params.id;
        const jsp = await JobSelectionProcedure.findOne({where:{id:id}});
        res.status(200).json(jsp);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update JobSelectionProcedure

const updateJobSelectionProcedure = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedJobSelectionProcedure = await JobSelectionProcedure.update(req.body,{where:{id:id}});
        res.status(200).json(updatedJobSelectionProcedure);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete JobSelectionProcedure

const deleteJobSelectionProcedure = async(req,res)=>{
    try {
        let id = req.params.id;
        await JobSelectionProcedure.destroy({where:{id:id}});
        res.status(200).json("jsp deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addJobSelectionProcedure,
    getAllJobSelectionProcedure,
    getOneJobSelectionProcedure,
    updateJobSelectionProcedure,
    deleteJobSelectionProcedure
}

