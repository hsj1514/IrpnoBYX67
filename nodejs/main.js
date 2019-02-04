var http = require('http');
var mysql = require('mysql');

var db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '111111',
  database : 'basic'
});

db.connect();

var app = http.createServer(function(request,response){
        db.query('SELECT * FROM topic' , function(error , topics){
          console.log(topics);
          response.writeHead(200);
          response.end('success');
        });
});
app.listen(4000);
