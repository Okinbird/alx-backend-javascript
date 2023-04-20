import Pricing from '/home/okinamos/alx-backend-javascript/0x02-ES6_classes/4-pricing.js';
import Currency from '/home/okinamos/alx-backend-javascript/0x02-ES6_classes/3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());
