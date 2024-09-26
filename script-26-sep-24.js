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
//eg:1
var BankAcc = /** @class */ (function () {
    function BankAcc() {
    }
    return BankAcc;
}());
var SavingAcc = /** @class */ (function (_super) {
    __extends(SavingAcc, _super);
    function SavingAcc(name, balance) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.balance = balance;
        return _this;
    }
    SavingAcc.prototype.CalInterest = function () {
        return 0.05 * this.balance;
    };
    return SavingAcc;
}(BankAcc));
var CurrentAcc = /** @class */ (function (_super) {
    __extends(CurrentAcc, _super);
    function CurrentAcc(name, balance) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.balance = balance;
        return _this;
    }
    CurrentAcc.prototype.CalInterest = function () {
        return 0.07 * this.balance;
    };
    return CurrentAcc;
}(BankAcc));
var s1 = new SavingAcc("nitya", 25000);
console.log(s1.CalInterest());
var c1 = new CurrentAcc("vidhi", 25000);
console.log(c1.CalInterest());
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
var ArithCal = /** @class */ (function (_super) {
    __extends(ArithCal, _super);
    function ArithCal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArithCal.prototype.add = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var sum = 0;
        for (var i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        return sum;
    };
    return ArithCal;
}(Calculator));
var MatrixAdd = /** @class */ (function (_super) {
    __extends(MatrixAdd, _super);
    function MatrixAdd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixAdd.prototype.add = function (A, B) {
        var M = {
            0: [0, 0, 0],
            1: [0, 0, 0],
            2: [0, 0, 0],
        };
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                M[i][j] = A[i][j] + B[i][j];
            }
        }
        return M;
    };
    return MatrixAdd;
}(Calculator));
var A = {
    0: [1, 2, 3],
    1: [4, 5, 6],
    2: [7, 8, 9],
};
var B = {
    0: [7, 8, 9],
    1: [6, 5, 4],
    2: [1, 2, 3],
};
var a1 = new ArithCal();
console.log(a1.add(5, 55, 667, 6));
var m = new MatrixAdd();
console.log(m.add(A, B));
// -------------------------------------------------------------
//eg:3
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.show = function () {
        console.log("hello parent!!!!");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.show = function () {
        console.log("helloooo Child!!!!");
    };
    return Child;
}(Parent));
var n1 = new Child();
n1.show();
var Calculator1 = /** @class */ (function () {
    function Calculator1() {
    }
    return Calculator1;
}());
var MatrixOps = /** @class */ (function (_super) {
    __extends(MatrixOps, _super);
    function MatrixOps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixOps.prototype.add = function (A, B) {
        var M = {
            0: [0, 0, 0],
            1: [0, 0, 0],
            2: [0, 0, 0],
        };
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                M[i][j] = A[i][j] + B[i][j];
            }
        }
        return M;
    };
    MatrixOps.prototype.multiply = function (C, D) {
        var M = {
            0: [0, 0, 0],
            1: [0, 0, 0],
            2: [0, 0, 0],
        };
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var sum = 0;
                for (var k = 0; k < 3; k++) {
                    sum += C[i][k] * D[k][j];
                }
                M[i][j] = sum;
            }
        }
        return M;
    };
    return MatrixOps;
}(Calculator1));
var C = {
    0: [1, 2, 3],
    1: [4, 5, 6],
    2: [7, 8, 9],
};
var D = {
    0: [7, 8, 9],
    1: [6, 5, 4],
    2: [1, 2, 3],
};
var m1 = new MatrixOps();
console.log("Matrix Multiplication:", m1.multiply(C, D));
