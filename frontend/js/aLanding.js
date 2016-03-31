





<<<<<<< HEAD
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

=======
$(document).ready(function(){  //1
    $.get('/getLanding', function(results, function(index, rowObject){ //2
      results.forEach(function Add(){   //3
         
         $("#aLanding_table").append( "<tr>" +
         "<td>" + rowObject.trng_reqst_nbr + "</td>" + 
         "<td>" + rowObject.trng_cors_nm + "</td>" +
        "<td>" + rowObject.trng_cors_cost + "</td></tr>" +
         "<td><input class='btnApprove' id='approve_" + rowObject.trng_reqst_nbr + "' /><input class='btnReject' id='reject_" + rowObject.trng_reqst_nbr + "' /></td>"+
         "</tr>"); 
       //  $(".btnApprove").bind("click", Save);	
       //  $(".btnReject").bind("click", Delete);
       
       $(".btnApprove").onClick(function(button) {
          var id = button.id
       })
         
     });
    });
});
>>>>>>> 67b4e50cb460ed0bc082a93472f1ff754f937e23


