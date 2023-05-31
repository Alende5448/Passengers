"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taskOne = function (passengers, shuffle) {
    var boarded = [];
    var reservation = [];
    var count = 0;
    var obj1 = {
        name: "Passenger 1",
        location: "Abuja"
    };
    boarded.push(obj1);
    //complete your work here
    return {
        boarded,
        reservation: [],
        count: 0
    };
};
exports.default = taskOne;
console.log(taskOne(2, 2));
