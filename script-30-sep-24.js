// GENERICS
var lock = {
    key: 1234,
};
console.log(lock);
var lock1 = {
    key: "QWE",
};
console.log(lock1);
var m1 = {
    company: "dell",
};
console.log(m1);
//eg:4........in class
var laptopBuilder = /** @class */ (function () {
    function laptopBuilder(id) {
        this.id = id;
    }
    return laptopBuilder;
}());
var b1 = new laptopBuilder("qwe");
console.log(b1);
var b2 = new laptopBuilder(123);
console.log(b2);
//TYPE ASSERTION
//eg:5
function recorder(a) {
    return "sey";
    // return "say" as T
}
recorder("yes");
//TYPE CONVERSION /CASTING
//eg:6
var num = "123";
console.log(Number(num));
var n = 531;
console.log(String(n));
