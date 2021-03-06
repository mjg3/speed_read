
var express = require('express');
var path = require('path');
var app  = express();
var bodyParser = require('body-parser');


var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));


require('./server/config/mongoose.js');
// routes is probably the last thing to be loaded before the server
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

// app.listen(8000, function(){
//   console.log("Listening on port 8000");
// })
