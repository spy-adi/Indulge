const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addJnf,
    getAllJnf,
    getOneJnf,
    updateJnf,
    deleteJnf
} = require("../controllers/jnfController");
// const auth = require("../middleware/auth")

router.get("/getAllJnf",getAllJnf);
router.get("/addJnf",addJnf);
router.get("/:id",getOneJnf);
router.put("/:id",updateJnf);
router.delete("/:id",deleteJnf);

module.exports = router;