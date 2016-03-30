var express = require('express');
var database = require('./database.js')
var app = express();
var port = process.env.PORT || 1337;
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.get('/', function(req,res){
  console.log('app root/ requested');
  return res.status(200).send("hello worlds");
});


app.post('/addTrain', function(req,res){
  var sql = `
   INSERT INTO trains (name,inService,numberOfAvailable) 
   VALUES ('${req.body.nameOfTrain}', '${req.body.inService}', '${req.body.availableTrains}');
  `;
   database.executeQuery(sql);
  console.log('posted to /addTrain');
  console.log(JSON.stringify(req.body));
  return res.send("success");
});



app.get('/trainList', function(req,res){
  console.log('app / trains requested');
  return res.render('trainList.html');
});

app.get('/trainList2', function(req,res){
  console.log('app / trains requested');
  return res.render('trainList2.html');
});


// This is my URL endpoint which is /get trains

app.get('/getTrains', function(req,res){
  console.log('app / getTrains requested');
 database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);

//this is bringing back JSON not rendering HTML
  
});
});




app.get('/helloworld', function(req,res){
  console.log('app helloworld/ requested');
  return res.render("helloworld.html");
});

app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});