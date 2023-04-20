import EVCar from '/home/okinamos/alx-backend-javascript/0x02-ES6_classes/100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);
