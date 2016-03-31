





$(document).ready(function(){
   
    $.get('/getLanding', function(results){

 // getStub('/getLanding', function(results){
    var tableString = "<tr><th>Req #</th><th>Course</th><th>Cost</th></tr>";
    var $approve =$('#approve');
   
   
    $.each(results, function(index, rowObject){
      tableString += "<tr><td>" + rowObject.trng_reqst_nbr + "</td>" +
        "<td>" + rowObject.trng_cors_nm + "</td>" +
        "<td>" + rowObject.trng_cors_cost + "</td></tr><tr><td><button class='btnApprove' onclick = 'el' id='approve_" + rowObject.trng_reqst_nbr + "'>Approve</button><button class='btnReject' id='reject_" + rowObject.trng_reqst_nbr + "' >Reject  </button></td></tr>";
                     
                  
   
    
           
           
   
     })




    $('#aLanding_table').html(tableString);
    
    $
  });
 
});

 $('#approve').on(click,(function(){
     
     var approve = {
         
         trng_request_immed_supv_apv_flg : $approve.val()
     };
     $.ajax({
         type: 'POST',
         url: '/getApp',
         data: order,
         success: function(newAPP){
             alert("successful submission")
         }
     })

})

);



