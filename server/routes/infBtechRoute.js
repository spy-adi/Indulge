const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    add
} = require("../controllers/infBtechController");
// const auth = require("../middleware/auth")

router.post("/addInfBtech",add);
module.exports = router;