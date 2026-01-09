const express = require("express");
const router = express.Router({mergeParams: true});
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");


const signupuserController = require("../controllers/users.js");

router.route("/signup")
.get(signupuserController.renderSignupForm)
.post(wrapAsync(signupuserController.signup));


router.route("/login")
.get(signupuserController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}), signupuserController.login);


router.get("/logout", signupuserController.logout);

module.exports = router;