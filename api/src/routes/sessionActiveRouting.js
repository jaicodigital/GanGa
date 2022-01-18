const passport = require("passport");

const { Router } = require("express");
const router = Router();
const {
    sessionActive,
} = require("../controllers/sessionActiveController");

router.get("/",sessionActive)


module.exports = router;
