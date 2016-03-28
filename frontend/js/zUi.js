

$(document).ready(function(){

$.get('/getzUi', function(results){

  $('#addEmployeeForm').submit(function(){

    $.post('/getzUi', {
      id: $('#id').val(),
      name: $('#name').val(),
      email: $('#email').val()
    });

    $('#addEmployeeForm')[0].reset();
    return false;
  });
});
});
