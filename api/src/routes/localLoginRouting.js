const passport = require("passport");

const { Router } = require("express");
const router = Router();
const {
    localLogin
} = require("../controllers/localLoginController ");


router.post("/",passport.authenticate('local', { failureRedirect: '/sessionActive' }),localLogin)  


module.exports = router;
