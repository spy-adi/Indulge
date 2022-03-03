const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addMtechProg,
    getAllMtechProg,
    getOneMtechProg,
    updateMtechProg,
    deleteMtechProg
} = require("../controllers/mtechProgController");
// const auth = require("../middleware/auth")

router.get("/getAllMtechProg",getAllMtechProg);
router.get("/addMtechProg",addMtechProg);
router.get("/:id",getOneMtechProg);
router.put("/:id",updateMtechProg);
router.delete("/:id",deleteMtechProg);

module.exports = router;