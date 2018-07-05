console.log("Synechron Main Module Loading started...");
//import * as myMath from "./synechron-math";
import { addition, subtraction } from "./synechron-math";
//import message  from "./synechron-message";
import { getHrMessage, getCeoMessage } from './synechron-message';
import Order from "./order";
console.log(addition(200, 200));
console.log(subtraction(700, 200));

import { square } from "./synechron-advance-math";

console.log("Synechron Main Module Loading finished...");

console.log(square(20));
console.log(getHrMessage());
console.log(getCeoMessage());

var order = new Order();
order.orderId = 2378;
order.qty = 90;
order.price = 12.90;
console.log(order.printOrder());