var express = require('express');
var app = express();
var port = 3006;


app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));



console.log('listening on port '+port);
app.listen(port); //the port you want to use