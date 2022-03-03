const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addCompanyDetails,
    getAllCompanyDetails,
    getOneCompanyDetails,
    updateCompanyDetails,
    deleteCompanyDetails
} = require("../controllers/companyDetailsController");
// const auth = require("../middleware/auth")

router.get("/getAllCompanyDetails",getAllCompanyDetails);
router.post("/addCompanyDetails",addCompanyDetails);
router.get("/:id",getOneCompanyDetails);
router.put("/:id",updateCompanyDetails);
router.delete("/:id",deleteCompanyDetails);

module.exports = router;