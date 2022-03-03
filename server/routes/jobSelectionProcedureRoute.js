const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addJobSelectionProcedure,
    getAllJobSelectionProcedure,
    getOneJobSelectionProcedure,
    updateJobSelectionProcedure,
    deleteJobSelectionProcedure
} = require("../controllers/jobSelectionProcedureController");
// const auth = require("../middleware/auth")

router.get("/getAllJobSelectionProcedure",getAllJobSelectionProcedure);
router.get("/addJobSelectionProcedure",addJobSelectionProcedure);
router.get("/:id",getOneJobSelectionProcedure);
router.put("/:id",updateJobSelectionProcedure);
router.delete("/:id",deleteJobSelectionProcedure);

module.exports = router;