var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);
var bodyParser = require("body-parser");

var app = express();

app.set('port', process.env.PORT || 5000);


app.use(bodyParser.json());


app.get('/', function(req, res){
  res.send('This is Todo API page');
});


app.get('/list', function(req, res){

  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type , Accept , Authorization");

  connection.query('SELECT * from todo', function(err, rows) {
    if(err) throw err;

    console.log('list is: ', rows);
    res.send(rows);
  });
});


app.get('/list_title', function(req, res){

  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type , Accept , Authorization");

  connection.query('SELECT title from todo', function(err, rows) {
    if(err) throw err;


    console.log('title part is: ', rows);
    res.send(rows);
  });
});


app.get('/list_description', function(req, res){

  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type , Accept , Authorization");

  connection.query('SELECT description from todo', function(err, rows) {
    if(err) throw err;


    console.log('description part is: ', rows);
    res.send(rows);
  });
});


app.post('/add', function (req, res) {

  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type , Accept , Authorization");

  const title=req.body.title;
  const description=req.body.description;
  const year=req.body.year;
  const month=req.body.month;
  const day=req.body.day;
  console.log(title)
  console.log(description)
  console.log(year)
  console.log(month)
  console.log(day)

  connection.query(`INSERT INTO todo (title , description , year , month , day , created) VALUES (? , ? , ? , ? , ? , NOW())` , [title , description , year , month , day] , function(err,rows) {
    if(err) throw err;

    console.log('post success ', rows);
    res.send(rows);

  });
})


app.put('/check', function (req, res) {

  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type , Accept , Authorization");

  const check = req.body.checkboxState;


  connection.query(`INSERT INTO todo (checkboxState) VALUES ( ? )` , [check] , function(err,rows) {
    if(err) throw err;

    console.log('put success ', rows);
    res.send(rows);

  });
})


app.get('/delete', function (req, res) {

  res.header("Access-Control-Allow-Origin" , "*");
  res.header("Access-Control-Allow-Headers" , "Origin, X-Requested-With, Content-Type , Accept , Authorization");

  connection.query(`DELETE FROM todo` , function(err,rows) {
    if(err) throw err;

    console.log('delete success ', rows);
    res.send(rows);
    return

  });
})


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
