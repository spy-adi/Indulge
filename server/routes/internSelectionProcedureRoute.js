const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addInternSelectionProcedure,
    getAllInternSelectionProcedure,
    getOneInternSelectionProcedure,
    updateInternSelectionProcedure,
    deleteInternSelectionProcedure
} = require("../controllers/internSelectionProcedureController");
// const auth = require("../middleware/auth")

router.get("/getAllInternSelectionProcedure",getAllInternSelectionProcedure);
router.get("/addInternSelectionProcedure",addInternSelectionProcedure);
router.get("/:id",getOneInternSelectionProcedure);
router.put("/:id",updateInternSelectionProcedure);
router.delete("/:id",deleteInternSelectionProcedure);

module.exports = router;