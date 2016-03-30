





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


