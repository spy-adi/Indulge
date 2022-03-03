const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addMscProg,
    getAllMscProg,
    getOneMscProg,
    updateMscProg,
    deleteMscProg
} = require("../controllers/mscProgController");
// const auth = require("../middleware/auth")

router.get("/getAllMscProg",getAllMscProg);
router.get("/addMscProg",addMscProg);
router.get("/:id",getOneMscProg);
router.put("/:id",updateMscProg);
router.delete("/:id",deleteMscProg);

module.exports = router;