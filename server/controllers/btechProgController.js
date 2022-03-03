const db = require('../models');
const BtechProg = db.btechProg;

// create

const addBtechProg = async(req,res)=>{
    try {
        const btechProg = await BtechProg.create(req.body);
            res.status(200).json(btechProg);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all BtechProg

const getAllBtechProg = async(req,res)=>{
    try {
        const btechProg = await BtechProg.findAll({});
        res.status(200).json(btechProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single BtechProg

const getOneBtechProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const btechProg = await BtechProg.findOne({where:{id:id}});
        res.status(200).json(btechProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update BtechProg

const updateBtechProg = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedBtechProg = await BtechProg.update(req.body,{where:{id:id}});
        res.status(200).json(updatedBtechProg);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete BtechProg

const deleteBtechProg = async(req,res)=>{
    try {
        let id = req.params.id;
        await BtechProg.destroy({where:{id:id}});
        res.status(200).json("btechProg deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addBtechProg,
    getAllBtechProg,
    getOneBtechProg,
    updateBtechProg,
    deleteBtechProg
}

