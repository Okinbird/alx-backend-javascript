import createEmployeesObject from "/home/okinamos/alx-backend-javascript/0x00-ES6_basic/11-createEmployeesObject.js";
import createReportObject from '/home/okinamos/alx-backend-javascript/0x00-ES6_basic/12-createReportObject.js';
import createIteratorObject from '/home/okinamos/alx-backend-javascript/0x00-ES6_basic/100-createIteratorObject.js';
import iterateThroughObject from '/home/okinamos/alx-backend-javascript/0x00-ES6_basic/101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
