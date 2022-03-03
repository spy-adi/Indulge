require("dotenv").config();
const db = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const CompanyDetails = db.companyDetails;

// create
const addCompanyDetails = async(req,res)=>{
    try {
        let company = await CompanyDetails.findOne({where:{cemail:req.body.cemail}});
        console.log(company);
        if(company) {return res.status(400).json({msg:"User already exists"});}
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.cpassword,salt);
         company = await CompanyDetails.create({...req.body,cpassword:password});
         const id = company.dataValues.id;
        console.log(company.dataValues);
        
        const payload = {
            cid:{
                id:id
            }
        }
        console.log(payload.cid);
        let token = await jwt.sign(payload,process.env.SECRET,{expiresIn:3600});
        if(token){
            res.json({token});
        }
        // if token is not produced and if there is an error it will be catched by the catch block

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Server Error"});
    }
}


// read/get all CompanyDetails

const getAllCompanyDetails = async(req,res)=>{
    try {
        const companyDetails = await CompanyDetails.findAll({});
        res.status(200).json(companyDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

// read/get a single CompanyDetails

const getOneCompanyDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const companyDetails = await CompanyDetails.findOne({where:{id:id}});
        res.status(200).json(companyDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//update CompanyDetails

const updateCompanyDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedCompanyDetails = await CompanyDetails.update(req.body,{where:{id:id}});
        res.status(200).json(updatedCompanyDetails);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

//delete CompanyDetails

const deleteCompanyDetails = async(req,res)=>{
    try {
        let id = req.params.id;
        await CompanyDetails.destroy({where:{id:id}});
        res.status(200).json("companyDetails deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }

}

module.exports = {
    addCompanyDetails,
    getAllCompanyDetails,
    getOneCompanyDetails,
    updateCompanyDetails,
    deleteCompanyDetails
}

