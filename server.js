var express = require('express');
var app = express();
var port = 3006;

// app.use('/js', express.static(__dirname + '/js'));
// app.use('/dist', express.static(__dirname + '/../dist'));
// app.use('/css', express.static(__dirname + '/css'));
// app.use('/partials', express.static(__dirname + '/partials'));
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/app'));

app.use('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname+'/app' });
});

console.log('listening on port '+port);
app.listen(port); //the port you want to use