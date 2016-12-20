var express = require('express');
var router = express.Router();
var passport = require('passport');
var strategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');
var User = require('./model/users');

// localhost:8080/users?id=venus&pass=venus

router.post('/', passport.authenticate('local', { failureRedirect: '/' }), function(req, res) {
	username = req.query.username;
    password =  req.query.password;
    res.redirect('../home');
});

module.exports = router;
