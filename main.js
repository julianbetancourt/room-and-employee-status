var xhr = new XMLHttpRequest();
xhr.open('GET', 'data/employees.json');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="employees-list">';
    for (var i = 0, j = employees.length; i < j; i+= 1) {
      if (employees[i].inoffice) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">'
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeesID').innerHTML = statusHTML;
  }
};

xhr.send();

/*
** ROOMS AJAX REQUEST
*/
var roomsxhr = new XMLHttpRequest();
roomsxhr.open('GET', 'data/rooms.json');
roomsxhr.onreadystatechange = function () {
  if (roomsxhr.readyState === 4 && roomsxhr.status === 200) {
    var rooms = JSON.parse(roomsxhr.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i = 0, j = rooms.length; i < j; i+= 1) {
      if (rooms[i].available) {
        statusHTML += '<li class="full">';
      } else {
        statusHTML += '<li class="empty">';
      }
      statusHTML += rooms[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomsID').innerHTML = statusHTML;
  }
};
roomsxhr.send();
