var express 			= require('express'),
	app 				= express(),
	bodyParser 			= require('body-parser'),
	mongoose 			= require('mongoose'),
	firstController 	= require('./server/controllers/serve-controller');

//mongoose.connect('mongodb://localhost:27017/mean-demo');

// app.use(bodyParser.urlencoded({    extended: true }));
//     app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

// app.use('/js', express.static(__dirname + '/client/js'));

// app.get('/api/meetups', meetupsController.list);
// app.post('/api/meetups', meetupsController.create);

app.listen(3000, function() {
	console.log('I\'m Listening...');
});