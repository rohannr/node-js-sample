var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

var buf = new Buffer(fs.readFileSync('index.html'));
var splashtext = buf.toString();

app.get('/', function(request, response) {
  response.send(splashtext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
