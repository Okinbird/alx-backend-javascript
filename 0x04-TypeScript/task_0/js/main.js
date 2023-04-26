var studentOne = {
    firstName: 'James',
    lastName: 'Bond',
    age: 56,
    location: 'London'
};
var studentTwo = {
    firstName: 'Peter',
    lastName: 'John',
    age: 51,
    location: 'Anambra'
};
var studentsList = [studentOne, studentTwo];
var table = document.createElement('table');
document.body.appendChild(table);
var head = table.createTHead();
var row = head.insertRow();
var th1 = row.insertCell(0);
var th2 = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
var body = table.createTBody();
studentsList.map(function (student) {
    var newRow = body.insertRow();
    var firstNameRow = newRow.insertCell();
    var locationRow = newRow.insertCell();
    firstNameRow.innerHTML = student.firstName;
    locationRow.innerHTML = student.location;
});
