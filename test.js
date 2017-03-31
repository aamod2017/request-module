var express = require('express')
var timeout = require('connect-timeout'); //express v4
var app = express()
var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json())
app.post('/api/users', function(req, res) {
            
            console.log("req.body",req.body)
            console.log("request.headers.host",req.headers.host)
	    var user_id = req.body.id;
	    var token = req.body.token;
	    var geo = req.body.geo;

	    res.send({"id":user_id,"token": token, "geo":geo});
})
process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit()
}); 

process.on('exit', function (){
  console.log('Goodbye!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


//application/x-www-form-urlencoded
