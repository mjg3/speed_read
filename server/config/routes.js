var User    = require('./../controllers/user.js')
var Quiz    = require('./../controllers/quiz.js');

module.exports = function(app) {

  app.post('/get_quiz', function(req, res){
    Quiz.show(req, res);
  })

  app.post('/store_grade', function(req, res) {
    Quiz.store(req, res);
  })

  app.post('/store_diagnostic', function(req, res){
    User.store_diagnostic(req, res);
  })

  app.post('/add_user', function(req, res){
    User.add(req, res);
  })

  app.post('/get_user', function(req, res){
    User.get(req, res);;
  })
};
