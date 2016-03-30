
$(document).ready(function(){
<<<<<<< HEAD
   getStub('/getTrains', function(results){
         var tableString = "<tr><th>Train Name</th><th>In Service</th><th>Number of Available Cars</th></tr>";
         $.each(results, function(index, rowObject){
=======
 
  $.get('/getTrains', function(results){

 // getStub('/getTrains', function(results){
    var tableString = "<tr><th>Train Name</th><th>In Service</th><th>Number of Available Cars</th></tr>"
    $.each(results, function(index, rowObject){
>>>>>>> ab1aa2dc12b5b08bec94680ec6157f16a0b7331b
      tableString += "<tr><td>" + rowObject.name + "</td>" +
        "<td>" + rowObject.inservice + "</td>" +
        "<td>" + rowObject.numberofavailable + "</td></tr>"
    });
<<<<<<< HEAD

         console.log(results);
     $('#trainTable').html(tableString);
   });
});

function getStub(endpoint,callback){
   var stubbedJson="";
   if (endpoint == "/getTrains"){
     
     stubbedJson = [ 
       {"id":1,"name":"stubb redline 813","inservice":true,"numberofavailable":8},
       {"id":2,"name":"redline 912","inservice":true,"numberofavailable":10},
       {"id":3,"name":"greenline 713","inservice":true,"numberofavailable":10},
       {"id":4,"name":"brownline 412","inservice":true,"numberofavailable":8}];
  }
  callback(stubbedJson);  
}


       
     
=======
    $('#trainTable').html(tableString);
  });

});


function getStub(endpoint, callback){
  var stubbedJson="";
  if (endpoint =="/getTrains"){
    stubbedJson = [
{"id":1,"name":"stubb redline 813","inservice":true,"numberofavailable":8},{"id":2,"name":"redline 912","inservice":true,"numberofavailable":10},{"id":3,"name":"greenline 713","inservice":true,"numberofavailable":10},{"id":4,"name":"brownline 412","inservice":true,"numberofavailable":8}];
  }
  callback(stubbedJson);  
}
>>>>>>> ab1aa2dc12b5b08bec94680ec6157f16a0b7331b
