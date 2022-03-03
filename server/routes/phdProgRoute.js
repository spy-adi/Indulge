const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addPhdProg,
    getAllPhdProg,
    getOnePhdProg,
    updatePhdProg,
    deletePhdProg
} = require("../controllers/phdProgController");
// const auth = require("../middleware/auth")

router.get("/getAllPhdProg",getAllPhdProg);
router.get("/addPhdProg",addPhdProg);
router.get("/:id",getOnePhdProg);
router.put("/:id",updatePhdProg);
router.delete("/:id",deletePhdProg);

module.exports = router;