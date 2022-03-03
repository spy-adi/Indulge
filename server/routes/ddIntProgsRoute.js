const express = require("express");
const router = express.Router();
const db = require("../models");
const {
    addDdIntProg,
    getAllDdIntProg,
    getOneDdIntProg,
    updateDdIntProg,
    deleteDdIntProg
} = require("../controllers/ddIntProgsController");
// const auth = require("../middleware/auth")

router.get("/getAlldIntProg",getAllDdIntProg);
router.get("/addDdIntProg",addDdIntProg);
router.get("/:id",getOneDdIntProg);
router.put("/:id",updateDdIntProg);
router.delete("/:id",deleteDdIntProg);

module.exports = router;