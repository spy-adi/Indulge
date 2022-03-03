const db = require('../models');
const InternDetails = db.internDetails;

// create

const addInternDetails = async(req,res)=>{
    try {
        const internDetails = await InternDetails.create(req.body);
            res.status(200).json(internDetails);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all InternDetails

const getAllInternDetails = async(req,res)=>{
    try {
        const internDetails = await InternDetails.findAll({});
        res.status(200).json(internDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single InternDetails

const getOneInternDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const internDetails = await InternDetails.findOne({where:{id:id}});
        res.status(200).json(internDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update InternDetails

const updateInternDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedInternDetails = await InternDetails.update(req.body,{where:{id:id}});
        res.status(200).json(updatedInternDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete InternDetails

const deleteInternDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        await InternDetails.destroy({where:{id:id}});
        res.status(200).json("internDetails deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addInternDetails,
    getAllInternDetails,
    getOneInternDetails,
    updateInternDetails,
    deleteInternDetails
}

