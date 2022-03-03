require("dotenv").config();
const {Router} = require("express");
const router = Router();
const db = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");
const CompanyDetails = db.companyDetails;

//@route   GET /api/auth
//@desc    getting logged user
//@access  private

router.get("/",auth,async(req,res)=>{
    try {
        let id = req.user.id;
        const company = await CompanyDetails.findOne({where:{id}});
        res.json(company);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});

    }
});
//@route   GET /api/auth
//@desc    login page
//@access  public

router.post("/",async(req,res)=>{
    const {cemail,cpassword} = req.body;
    try {
        let company = await CompanyDetails.findOne({where:{cemail}});
        if(!company){
            return res.status(404).json({msg:"Invalid Credentials"});
    }
    const isMatch = await bcrypt.compare(cpassword,company.cpassword);
    if(!isMatch){
        return res.status(400).json({msg:"Invalid Credentials"});
    }
    const payload = {
        cid:{
            id:company.dataValues.id
        }
    }
    jwt.sign(payload,process.env.SECRET,{expiresIn:3600},(err,token)=>{
        if(err) throw err;
        res.json({token});
    })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
    });

module.exports = router;