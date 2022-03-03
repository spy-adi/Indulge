const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addskillBasedProg,
    getAllskillBasedProg,
    getOneskillBasedProg,
    updateskillBasedProg,
    deleteskillBasedProg
} = require("../controllers/skillBasedProgController");
// const auth = require("../middleware/auth")

router.get("/getAllskillBasedProg",getAllskillBasedProg);
router.get("/addskillBasedProg",addskillBasedProg);
router.get("/:id",getOneskillBasedProg);
router.put("/:id",updateskillBasedProg);
router.delete("/:id",deleteskillBasedProg);

module.exports = router;