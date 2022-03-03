const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addInfHrDetails,
    getAllInfHrDetails,
    getOneInfHrDetails,
    updateInfHrDetails,
    deleteInfHrDetails
} = require("../controllers/infHrDetailsController");
// const auth = require("../middleware/auth")

router.get("/getAllInfHrDetails",getAllInfHrDetails);
router.post("/addInfHrDetails",addInfHrDetails);
router.get("/:id",getOneInfHrDetails);
router.put("/:id",updateInfHrDetails);
router.delete("/:id",deleteInfHrDetails);

module.exports = router;