var mongoose = require('mongoose');

var fs = require('fs');
// connect to the database
mongoose.connect('mongodb://localhost/speed_read');
// specify the path to all of the models
var models_path = __dirname + '/../models'

// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})

Schema = mongoose.Schema;

var userSchema   = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  diagnostic: Array,
  created_at: Date,
  quiz_performances: Array

})

var quizSchema = new mongoose.Schema({
  answer_key: Array,
  passage_id: Number,
  passage: String,
  questions: Object,
  words_per_minute: Number,

})

var User = mongoose.model('User', userSchema);

mongoose.model('Quiz', quizSchema);
