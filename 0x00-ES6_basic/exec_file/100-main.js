import createIteratorObject from "/home/okinamos/alx-backend-javascript/0x00-ES6_basic/100-createIteratorObject.js";

import createEmployeesObject from '/home/okinamos/alx-backend-javascript/0x00-ES6_basic/11-createEmployeesObject.js';
import createReportObject from '/home/okinamos/alx-backend-javascript/0x00-ES6_basic/12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}
