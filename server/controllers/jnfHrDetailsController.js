const db = require('../models');
const JnfHrDetails = db.jnfHrDetails;

// create

const addJnfHrDetails = async(req,res)=>{
    try {
        const jnfHrDetails = await JnfHrDetails.create(req.body);
            res.status(200).json(jnfHrDetails);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all JnfHrDetails

const getAllJnfHrDetails = async(req,res)=>{
    try {
        const jnfHrDetails = await JnfHrDetails.findAll({});
        res.status(200).json(jnfHrDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single JnfHrDetails

const getOneJnfHrDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const jnfHrDetails = await JnfHrDetails.findOne({where:{id:id}});
        res.status(200).json(jnfHrDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update JnfHrDetails

const updateJnfHrDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedJnfHrDetails = await JnfHrDetails.update(req.body,{where:{id:id}});
        res.status(200).json(updatedJnfHrDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete JnfHrDetails

const deleteJnfHrDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        await JnfHrDetails.destroy({where:{id:id}});
        res.status(200).json("jnfHrDetails deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addJnfHrDetails,
    getAllJnfHrDetails,
    getOneJnfHrDetails,
    updateJnfHrDetails,
    deleteJnfHrDetails
}

