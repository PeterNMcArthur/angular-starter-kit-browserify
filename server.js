var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);


app.use(express.static(__dirname + '/build'));

http.listen(8000, function() {
    console.log('running on port 8000');
});
