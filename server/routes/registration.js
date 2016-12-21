var exp = require('express');
var router = exp.Router();
var User = require('../model/users');

// localhost:8080/regis?fname=dali&lname=dali&age=22&email=dali&pass=pass

router.post('/',function(req,res,next) {

  var regisUser = new User({
    username : req.body.username,
    email : req.body.email,
    age : req.body.age,
    password : req.body.password,
  });

  regisUser.save(function(err){
    if(err) throw err;
    res.send('User saved successfully');
  });

});

module.exports = router;
