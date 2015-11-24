var mongoose = require('mongoose')

var Quiz = mongoose.model('Quiz');
var User = mongoose.model('User');

module.exports = (function(){
  return {
    add: function(req, res){
      User.find({user_id: req.body.user_id}, function(error, person){
        console.log(person);
        if (person[0]) {
          console.log("The user was already in the database");
          res.end();
        }

        else {
          var new_user = new User({user_id: req.body.user_id, name: req.body.nickname, email: req.body.email});
          // console.log(new_user);
          new_user.save(function(error){
            console.log("added the new user");
            console.log("There was a problem attempting to add a new user to the database");
          })
          res.end();
        }
      })
    },

    get: function(req, res){
      User.find({user_id: req.body.user_id}, function(error, person){
        console.log(person);
        if (error) {
          console.log(error);
        }
        else {
          res.json(person);
        }
      })
    },

    store_diagnostic: function(req, res) {
      User.update({user_id: req.body.user_id}, {$push: {diagnostic_performances: {speed: req.body.words_per_minute, date: Date()}}}, function(error){
        if (error) {
          console.log(error)
        }
        else {
          console.log('added a diagnostic');
          res.end()
        }
      })
    }

  }
})();
