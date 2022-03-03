const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addBtechProg,
    getAllBtechProg,
    getOneBtechProg,
    updateBtechProg,
    deleteBtechProg
} = require("../controllers/btechProgController");
// const auth = require("../middleware/auth")

router.get("/getAllBtechProg",getAllBtechProg);
router.get("/addBtechProg",addBtechProg);
router.get("/:id",getOneBtechProg);
router.put("/:id",updateBtechProg);
router.delete("/:id",deleteBtechProg);

module.exports = router;