var express = require('express');
var router = express.Router();
//var User = require('./model/users');

// localhost:8080/users?id=venus&pass=venus

router.post('/', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
	username = req.query.username;
    password =  req.query.password;
    res.redirect('/');
});

module.exports = router;
