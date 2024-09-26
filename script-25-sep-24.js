// abstract,overloading,overriding,polymorphisam
//eg:1
// abstract class Shape {
//   abstract Area(...Args: number[]): number;
// }
// class square extends Shape {
//   Area(side: number) {
//     return side * side;
//   }
// }
// class Circle extends Shape {
//   Area(radius: number): number {
//     return Math.PI * radius * radius;
//   }
// }
// class Triangle extends Shape {
//   Area(base: number, height: number): number;
//   Area(a: number, b: number, c: number): number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   Area(a: number, b: number, c?: number): number {
//     if (typeof c == "undefined") {
//       return 0.5 * a * b;
//     } else {
//       let s = (a + b + c) / 2;
//       return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     }
//   }
// }
// let tri = new Triangle();
// console.log(tri.Area(8, 6, 6));
// let circle = new Circle();
// let a = circle.Area(5);
// console.log(a);
// console.log(Math.round(circle.Area(3)));
// let tri = new Triangle();
// console.log(tri.Area(20, 20));
//eg:2
//abstract method calculator and method is add calculator have 2 classes first is arithmatic claculator and second is Matrix calculator
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
var Arith_cal = /** @class */ (function (_super) {
    __extends(Arith_cal, _super);
    function Arith_cal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arith_cal.prototype.add = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var sum = 0;
        for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
            var num = nums_1[_a];
            sum += num;
        }
        return sum;
    };
    return Arith_cal;
}(Calculator));
var Matrix_cal = /** @class */ (function (_super) {
    __extends(Matrix_cal, _super);
    function Matrix_cal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Matrix_cal.prototype.add = function (a, b) {
        var result = [];
        for (var i = 0; i < a.length; i++) {
            result[i] = [];
            for (var j = 0; j < a[i].length; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        return result;
    };
    return Matrix_cal;
}(Calculator));
var arithCalc = new Arith_cal();
console.log("Sum of numbers:", arithCalc.add(1, 2, 3, 4));
var matrix1 = [
    [1, 2],
    [3, 4],
];
var matrix2 = [
    [5, 6],
    [7, 8],
];
var matrixCalc = new Matrix_cal();
console.log("Matrix sum:", matrixCalc.add(matrix1, matrix2));
