const db = require('../models');
const SalaryDetails = db.salaryDetails;

// create

const addSalaryDetails = async(req,res)=>{
    try {
        const salaryDetails = await SalaryDetails.create(req.body);
            res.status(200).json(salaryDetails);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all SalaryDetails

const getAllSalaryDetails = async(req,res)=>{
    try {
        const salaryDetails = await SalaryDetails.findAll({});
        res.status(200).json(salaryDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single SalaryDetails

const getOneSalaryDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const salaryDetails = await SalaryDetails.findOne({where:{id:id}});
        res.status(200).json(salaryDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update SalaryDetails

const updateSalaryDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedSalaryDetails = await SalaryDetails.update(req.body,{where:{id:id}});
        res.status(200).json(updatedSalaryDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete SalaryDetails

const deleteSalaryDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        await SalaryDetails.destroy({where:{id:id}});
        res.status(200).json("salaryDetails deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addSalaryDetails,
    getAllSalaryDetails,
    getOneSalaryDetails,
    updateSalaryDetails,
    deleteSalaryDetails
}

