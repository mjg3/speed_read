var mongoose = require('mongoose')

var Quiz = mongoose.model('Quiz');
var User = mongoose.model('User');

// var practice_time = new Quiz ({passage_id: 11, questions: [{question: "What's your name", answer: ['Tim', 'Todd', 'Josh', 'Joe']}, {question: "Where are you from?", answer: ["NJ", "CA", "TX", "ND"]}]});

// practice_time.save(function(err){});

// var practice_quiz = new Quiz({answer_key: ["blue", "green", "orange", "yellow"], questions:[{question: "Your favorite color?", answer: ["blue", "green", "orange", "yellow"]}, {question: "Your least favorite color?", answer: ["blue", "green", "orange", "yellow"]}, {question: "Your scariest color color?", answer: ["blue", "green", "orange", "yellow"]}, {question: "Your weirdest color?", answer: ["blue", "green", "orange", "yellow"]}], passage_id: 14})
// practice_quiz.save(function(err){})

// var practice_user = new User({name: 'Tommy', email: 'tommy@gmail.com', password:'password', quiz_performances: []});
// practice_user.save(function(error){});


module.exports = (function(){
  return {
    show: function(req, res){
      Quiz.find({passage_id: req.body.passage_id}, function(error, quiz){
        if (error) {
          console.log("There was a problem in the show method in the quiz controller");
        }
        else {
          res.json(quiz);
        }
      })
    },

    store: function(req, res) {
      console.log(req.body.user_id);
      User.update({name: 'Tommy'}, {$push: {quiz_performances: {score: req.body.score, date: Date()}}}, function(error){
        if (error) {
          console.log(error);
          console.log("Error trying to store the user's score");
        }
        else {
          User.find({_id: req.body.user_id}, function(error, person){
            console.log(person);
            res.json(person);
          })
        }
      })
    }
  }


})();
