"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../task/app"));
var mock_1 = require("./mock");
describe("Test for function structure", function () {
    it("Returns an object for even distro", function () {
        var passengers = 5;
        var shuffle = 3;
        expect((0, app_1.default)(passengers, shuffle)).toBeInstanceOf(Object);
    });
    it("function is been called with 2 arguments", function () {
        var passengers = 10;
        var shuffle = 3;
        var func = jest.fn(app_1.default);
        func(passengers, shuffle);
        expect(func).toHaveBeenCalledWith(passengers, shuffle);
        expect(func).toHaveBeenCalledTimes(1);
    });
});
describe("Test for function expected value", function () {
    it("Returns evenly distributed values for boarded", function () {
        var passengers = 15;
        var shuffle = 0;
        var expected = (0, app_1.default)(passengers, shuffle);
        expect(expected.boarded.length).toBe(15);
        expect(expected.reservation.length).toBe(0);
        expect(expected.count).toBe(1);
    });
    it("Returns reservation list for uneven distro", function () {
        var passengers = 52;
        var shuffle = 0;
        var expected = (0, app_1.default)(passengers, shuffle);
        expect(expected.boarded.length).toBe(50);
        expect(expected.boarded[49]).toStrictEqual({
            name: "passenger50",
            location: expect.any(String),
        });
        expect(expected.reservation.length).toBe(2);
    });
    it("Passengers does not exceed 50", function () {
        var passengers = 60;
        var shuffle = 0;
        var expected = (0, app_1.default)(passengers, shuffle);
        expect(expected.boarded.length).toBe(50);
        expect(expected.reservation.length).toBe(10);
        expect(expected.count).toBe(1);
    });
});
describe("test for shuffle", function () {
    it("Single shuffle works ", function () {
        var passengers = 60;
        var shuffle = 1;
        var expected = (0, app_1.default)(passengers, shuffle);
        expect(expected.boarded.length).toBe(10);
        expect(expected.reservation.length).toBe(0);
        expect(expected.count).toBe(2);
    });
    it("first multiple shuffle works ", function () {
        var passengers = 60;
        var shuffle = 3;
        var expected = (0, app_1.default)(passengers, shuffle);
        expect(expected.boarded.length).toBe(10);
        expect(expected.reservation.length).toBe(0);
        expect(expected.count).toBe(2);
    });
    it("second multiple shuffle works ", function () {
        var passengers = 150;
        var shuffle = 3;
        var expected = (0, app_1.default)(passengers, shuffle);
        expect(expected.boarded.length).toBe(50);
        expect(expected.reservation.length).toBe(0);
        expect(expected.count).toBe(3);
    });
    it("third multiple shuffle works ", function () {
        var passengers = 210;
        var shuffle = 3;
        var expected = (0, app_1.default)(passengers, shuffle);
        expect(expected.boarded.length).toBe(50);
        expect(expected.reservation.length).toBe(10);
        expect(expected.count).toBe(4);
    });
});
describe("test for boarded value", function () {
    var passengers = 50;
    var shuffle = 0;
    var expected = (0, app_1.default)(passengers, shuffle);
    expect(expected.boarded).toStrictEqual(mock_1.prefilled);
});
