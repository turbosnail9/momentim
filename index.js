var express = require('express');
var app = express();
exports.app = app;

//use ejs templating
app.set('view engine','ejs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res) {
    res.render('homepage');
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});