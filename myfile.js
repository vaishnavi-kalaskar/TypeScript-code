"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.addall = addall;
function add(a, b) {
    return a + b;
}
function addall(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
