'use strict';

$(document).ready(function(){

  $('#addEmployeeForm').submit(function(){

    $.post('/getzUi', {
      id: $('#id').val(),
      name: $('#name').is(':checked'),
      email: $('#email`').val()
    });

    return false;
  });

});

