// var customers = require('./../controllers/customer.js');
var Quiz    = require('./../controllers/quiz.js');

module.exports = function(app) {

  app.post('/get_quiz', function(req, res){
    Quiz.show(req, res);
  })

  app.post('/store_grade', function(req, res) {
    Quiz.store(req, res);
  })
};
