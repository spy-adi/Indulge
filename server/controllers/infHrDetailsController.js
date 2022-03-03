const db = require('../models');
const InfHrDetails = db.infHrDetails;

// create

const addInfHrDetails = async(req,res)=>{
    try {
        const infHrDetails = await InfHrDetails.create(req.body);
            res.status(200).json(infHrDetails);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all InfHrDetails

const getAllInfHrDetails = async(req,res)=>{
    try {
        const infHrDetails = await InfHrDetails.findAll({});
        res.status(200).json(infHrDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single InfHrDetails

const getOneInfHrDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const infHrDetails = await InfHrDetails.findOne({where:{id:id}});
        res.status(200).json(infHrDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update InfHrDetails

const updateInfHrDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedInfHrDetails = await InfHrDetails.update(req.body,{where:{id:id}});
        res.status(200).json(updatedInfHrDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete InfHrDetails

const deleteInfHrDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        await InfHrDetails.destroy({where:{id:id}});
        res.status(200).json("infHrDetails deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addInfHrDetails,
    getAllInfHrDetails,
    getOneInfHrDetails,
    updateInfHrDetails,
    deleteInfHrDetails
}

