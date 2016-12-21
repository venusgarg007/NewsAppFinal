var express = require('express');
var router = express.Router();
var passport = require('passport');
var strategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');


// localhost:8080/users?id=venus&pass=venus

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
	
    res.send("succesfully logged in");
});

module.exports = router;
