import getListStudents from "/home/okinamos/alx-backend-javascript/0x03-ES6_data_manipulation/0-get_list_students.js";
import getStudentIdsSum from "/home/okinamos/alx-backend-javascript/0x03-ES6_data_manipulation/3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
