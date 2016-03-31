var express = require('express');
var database = require('./database.js');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/', function(req,res){
  console.log('app / requested');
  return res.status(200).send("hello world");
});

app.get('/hi', function(req,res){
  console.log('app / requested');
  return res.status(200).send("hi there programmer");
});


app.get('/getTrains', function(req,res){
   database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
});
});


app.get('/helloworld', function(req,res){
  console.log('app / helloworld requested');
  return res.render('helloworld.html');
});


app.get('/rForm', function(req,res){
  console.log('app / rForm requested');
  return res.render('rForm.html');
});

app.get('/trainList', function(req,res){
  console.log('app / trains requested');
  return res.render('trainList.html');
});


//misc calls





//STATUS PAGE APPROVERS

app.get('/getstat', function(req,res){
  console.log('app getstat/ requested');
  database.executeQuery("SELECT trng_reqst_nbr, trng_cors_cost, trng_reqst_immed_supv_apvl_flg, trng_reqst_dept_hd_apvl_flg, trng_reqst_vp_apvl_flg FROM ttx_empl_trng_reqst", function(results) {
      res.send(results);
});
});


app.get('/status', function(req,res){
  console.log('app / status requested');
  return res.render('status.html');
});


// ANCILLARY PAGES
app.get('/contactUs', function(req,res){
  console.log('app / contactUs requested');
  return res.render('contactUs.html');
});



//FOR THE cHistory PAGE USER
app.get('/cHistory', function(req,res){
  console.log('app cHistory/  requested');
  return res.render('cHistory.html');
});



app.get('/getHistory', function(req,res){
  console.log('app getHistory/ requested');
  database.executeQuery("SELECT trng_reqst_nbr, trng_cors_nm, trng_cors_strt_dt, trng_cors_end_dt FROM ttx_empl_trng_reqst", function(results) {
      res.send(results);
});
});
//zui get

app.get('/zUi', function(req,res){
  console.log('app zUi/  requested');
  return res.render('zUi.html');
});


//FOR THE LANDING PAGE APPROVERS


app.get('/getLanding', function(req,res){
  console.log('app getLanding/ requested');
  database.executeQuery("SELECT trng_reqst_nbr, trng_cors_nm, trng_cors_cost, trng_reqst_immed_supv_apvl_flg FROM ttx_empl_trng_reqst WHERE trng_reqst_immed_supv_apvl_flg = 'P'", function(results) {
      res.send(results);
});
});

//aLanding call
app.get('/aLanding', function(req,res){
  console.log('app / aLanding requested');
  return res.render('aLanding.html');
});

//zUI call




//POSTING INFO
 
app.post('/addzUi', function(req,res){
      var sql = `
   INSERT INTO empl_info (id,name,email) 
   VALUES ('${req.body.id}', '${req.body.name}', '${req.body.email}');
  `;
        database.executeQuery(sql);
   console.log('posted to /addzUi');
  console.log(JSON.stringify(req.body));
  return res.send("success");
});

//post approver route
//get

app.get('/appSend', function(req,res){
  console.log('app / appSend requested');
   var sequel = `
   Update ttx_empl_trng_reqst
   set  trng_reqst_immed_supv_apvl_flg
  where trng_request_immed_supv_apv_flg = 'Y';
  `;
        database.executeQuery(sequel);
 
  
});

 //post





/*
  app.post('/getzUi', function(req,res){
    console.log("Sending the data");
    database.executeQuery("INSERT INTO empl_info (id,name,email) VALUES ('"
    return res.send("success");
  });
//app.post('/', function(request, response) {
//    response.write(request.body.user);
//    response.end();
//});
*/

app.listen(port, function(){
  console.log("Application is running:");
  console.log("Listening on " + port);
});


