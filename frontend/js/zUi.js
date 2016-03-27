

$(document).ready(function(){

$.get('/zUi', function(results){

  $('#addEmployeeForm').submit(function(){

    $.post('/zUi', {
      id: $('#id').val(),
      name: $('#name').val(),
      email: $('#email').val()
    });

    $('#addEmployeeForm')[0].reset();
    return false;
  });
});
});
