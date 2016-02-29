$(document).ready(function () {
  var url = "data/employees.json";
  $.getJSON(url, function (res) {
    var statusHTML = '<ul class="employees-list">';
    $.each(res, function (index, employee) {
      if (employee.inoffice) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeesID').html(statusHTML);
  });
}); //end of ready
