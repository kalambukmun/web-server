var express = require('express');
var app = express();
var middleware = require('./middleware.js');

var PORT = process.env.PORT || 3000;


// app.use(middleware.requireAuthentication);
// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname)

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT +'!');
});