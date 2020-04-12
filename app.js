var express=require('express');
var path=require('path');
var app=express();

app.set('port', (process.env.PORT||3000));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('resume');
});

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});