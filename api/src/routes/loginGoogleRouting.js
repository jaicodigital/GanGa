const passport = require("passport");

const { Router } = require("express");
const router = Router();
const {
    loginGoogle,
    callback,
    logoutG
} = require("../controllers/loginGoogleController");

router.get("/",passport.authenticate('google', { scope: ['profile','email'] }), loginGoogle);
router.get("/callback",passport.authenticate('google'),callback)   // ruta para loginGoogle/callback"
router.get("/logout",logoutG)


module.exports = router;
