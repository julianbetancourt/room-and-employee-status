$(document).ready(function () {
  var employeesURL = "data/employees.json";
  var roomsURL = 'data/rooms.json';

  $.getJSON(employeesURL, function (res) {
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

  $.getJSON(roomsURL, function (res) {
    var statusHTML = '<ul class="rooms">';
    $.each(res, function (index, room) {
      if (room.available) {
        statusHTML += '<li class="full">';
      } else {
        statusHTML += '<li class="empty">'
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomsID').html(statusHTML);
  });

}); //end of ready
