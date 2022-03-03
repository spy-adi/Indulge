const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addJnfHrDetails,
    getAllJnfHrDetails,
    getOneJnfHrDetails,
    updateJnfHrDetails,
    deleteJnfHrDetails
} = require("../controllers/jnfHrDetailsController");
// const auth = require("../middleware/auth")

router.get("/getAllJnfHrDetails",getAllJnfHrDetails);
router.get("/addJnfHrDetails",addJnfHrDetails);
router.get("/:id",getOneJnfHrDetails);
router.put("/:id",updateJnfHrDetails);
router.delete("/:id",deleteJnfHrDetails);

module.exports = router;