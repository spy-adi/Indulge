const db = require('../models');
const InternSelectionProcedure = db.isp;

// create

const addInternSelectionProcedure = async(req,res)=>{
    try {
        const isp = await InternSelectionProcedure.create(req.body);
            res.status(200).json(isp);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all InternSelectionProcedure

const getAllInternSelectionProcedure = async(req,res)=>{
    try {
        const isp = await InternSelectionProcedure.findAll({});
        res.status(200).json(isp);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single InternSelectionProcedure

const getOneInternSelectionProcedure = async(req,res)=>{
    try {
        let id = req.params.id;
        const isp = await InternSelectionProcedure.findOne({where:{id:id}});
        res.status(200).json(isp);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update InternSelectionProcedure

const updateInternSelectionProcedure = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedInternSelectionProcedure = await InternSelectionProcedure.update(req.body,{where:{id:id}});
        res.status(200).json(updatedInternSelectionProcedure);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete InternSelectionProcedure

const deleteInternSelectionProcedure = async(req,res)=>{
    try {
        let id = req.params.id;
        await InternSelectionProcedure.destroy({where:{id:id}});
        res.status(200).json("isp deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addInternSelectionProcedure,
    getAllInternSelectionProcedure,
    getOneInternSelectionProcedure,
    updateInternSelectionProcedure,
    deleteInternSelectionProcedure
}

