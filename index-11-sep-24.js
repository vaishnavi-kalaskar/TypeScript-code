//union
//ex:1
// var id=5786765
// var id="hiiii"
function record(id) {
    if (typeof id == "string") {
        id = id.toUpperCase();
        console.log("id:".concat(id, " is get recorded"));
    }
    else {
        console.log("id:".concat(id, " is not recorded"));
    }
}
record("s2409001");
//ex:2
function Color(color) {
    if (Array.isArray(color)) {
        // console.log(color.join(", "));
        color.forEach(function (item) {
            console.log(item);
        });
    }
    else {
        console.log("your given color is ".concat(color));
    }
}
Color("red");
Color(["red", "blue", "green"]);
//ex3
function getAge(age) {
    if (typeof age == "string") {
        age = parseInt(age);
    }
    else {
        console.log("invalid age");
    }
}
getAge(78);
//ex:1
//point={x:10,y:20}
//point={x:10,y:20,z:30}
function printPoint(point) {
    console.log(point.x, point.y);
}
printPoint({ x: 10, y: 20 });
var b1 = {
    title: "ramayan",
    pages: 900,
    author: "vyas rhishi",
};
console.log(b1);
var s1 = {
    name: "ram",
    age: 20,
    marks: 90,
};
console.log(s1);
