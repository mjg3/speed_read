
var express = require('express');
var path = require('path');
var app  = express();
var bodyParser = require('body-parser');

var passport = require('passport');

// This is the file we created in step 2.
// This will configure Passport to use Auth0
var strategy = require('./server/controllers/setup-passport');

// Session and cookies middlewares to keep user logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(cookieParser());
app.use(session({ secret: 'shhhhhhhhh' }));
app.use(passport.initialize());
app.use(passport.session());


require('./server/config/mongoose.js');
// routes is probably the last thing to be loaded before the server
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

// app.listen(8000, function(){
//   console.log("Listening on port 8000");
// })
