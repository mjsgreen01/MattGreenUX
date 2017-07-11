var express = require('express');
var app = express();
var port = process.env.PORT || 3006;


app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(['/projects', '/hunter', '/psal', '/erb', '/home', '/immigration'], function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname+'/app' });
});



console.log('listening on port '+port);
app.listen(port); //the port you want to use
