var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Sir !');
});

app.get('/:filename/please', function(req, res){
  res.download(__dirname + '/files/' + req.params.filename, req.params.filename, function(err){
    if(err){
      console.warn(err);
    } else {
      console.log('someone has downloaded', req.params.filename);
    }
  });
});

var server = app.listen(5050, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
