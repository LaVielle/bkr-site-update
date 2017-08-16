// Main js file for the app

// requiring node modules
var express = require('express');
var app = express();
var pug = require('pug');

// OAuth token
var token = require('./tokens');

console.log(token);

// setting up pug rendering
app.set('view engine', 'pug');
// setting location of pug templates
app.set('views', __dirname + '/views');

// run server on localhost:2046
var port = 2046;

// confirms server is running
app.listen(port, function(){
   console.log('server running on port ' + port);
})

app.get('/', function(request, response, error){
   console.log('requested main endpoint');

   // renders index.pug as index.html and sends it to client
   response.render('index');
})

app.get('/custom', function(request, response, error){
   console.log('requested /custom endpoint');

   var data = {
		name: "Sam",
		state: "happy"
	};

   response.render('custom', data);
})
