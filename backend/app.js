var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/tori', function(req,res){
  console.log('app tori/ requested');
  return res.render(200).send("tori.html");
});

app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});