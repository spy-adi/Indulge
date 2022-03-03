const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addInternDetails,
    getAllInternDetails,
    getOneInternDetails,
    updateInternDetails,
    deleteInternDetails
} = require("../controllers/internDetailsController");
// const auth = require("../middleware/auth")

router.get("/getAllInternDetails",getAllInternDetails);
router.get("/addInternDetails",addInternDetails);
router.get("/:id",getOneInternDetails);
router.put("/:id",updateInternDetails);
router.delete("/:id",deleteInternDetails);

module.exports = router;