import Building from '/home/okinamos/alx-backend-javascript/0x02-ES6_classes/5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}
