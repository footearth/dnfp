// Generated by CoffeeScript 2.5.1
var totalCost;
import { add, multiply } from 'https://x.nest.land/ramda@0.27.0/source/index.js';

totalCost = (outbound, inbound, tax) => {
  return multiply(add(outbound, inbound), tax);
};

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));