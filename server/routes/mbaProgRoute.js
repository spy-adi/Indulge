const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addMbaProg,
    getAllMbaProg,
    getOneMbaProg,
    updateMbaProg,
    deleteMbaProg
} = require("../controllers/mbaProgController");
// const auth = require("../middleware/auth")

router.get("/getAllMbaProg",getAllMbaProg);
router.get("/addMbaProg",addMbaProg);
router.get("/:id",getOneMbaProg);
router.put("/:id",updateMbaProg);
router.delete("/:id",deleteMbaProg);

module.exports = router;