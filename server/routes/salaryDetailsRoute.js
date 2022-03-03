const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addSalaryDetails,
    getAllSalaryDetails,
    getOneSalaryDetails,
    updateSalaryDetails,
    deleteSalaryDetails
} = require("../controllers/salaryDetailsController");
// const auth = require("../middleware/auth")

router.get("/getAllSalaryDetails",getAllSalaryDetails);
router.get("/addSalaryDetails",addSalaryDetails);
router.get("/:id",getOneSalaryDetails);
router.put("/:id",updateSalaryDetails);
router.delete("/:id",deleteSalaryDetails);

module.exports = router;