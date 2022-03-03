const db = require('../models');
const Jnf = db.jnf;

// create

const addJnf = async(req,res)=>{
    try {
        const jnf = await Jnf.create(req.body);
            res.status(200).json(jnf);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all Jnf

const getAllJnf = async(req,res)=>{
    try {
        const jnf = await Jnf.findAll({});
        res.status(200).json(jnf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single Jnf

const getOneJnf = async(req,res)=>{
    try {
        let id = req.params.id;
        const jnf = await Jnf.findOne({where:{id:id}});
        res.status(200).json(jnf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update Jnf

const updateJnf = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedJnf = await Jnf.update(req.body,{where:{id:id}});
        res.status(200).json(updatedJnf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete Jnf

const deleteJnf = async(req,res)=>{
    try {
        let id = req.params.id;
        await Jnf.destroy({where:{id:id}});
        res.status(200).json("jnf deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addJnf,
    getAllJnf,
    getOneJnf,
    updateJnf,
    deleteJnf
}

