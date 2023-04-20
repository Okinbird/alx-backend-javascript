import listOfStudents from "/home/okinamos/alx-backend-javascript/0x02-ES6_classes/9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
