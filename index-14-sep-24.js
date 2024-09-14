// literals type
// EX:1
var num;
num = 9;
// num=5 its gives error
//EX:2
function handleRequest(url, method) {
    console.log("request accepted");
}
var url = "https://example.com";
// var method:"GET"="GET"
// handleRequest(url, method );
var method = "GET";
handleRequest(url, method);
// EX:3
var marks = ["pi", 3.14, true, "e", 2.18];
//tuple
var mark = ["pi", 89, true];
// var mark2:[string,number,boolean]=["pi",89,true,89] ....its gives error
//types:any,unknown,undefined,never
//EX:1
//ANY
var a;
a = 36;
a = "you";
//EX:2
//UNKNOWN
var b;
b = 34;
b = "yes";
function accepted(x) {
    if (typeof x === "number") {
        console.log("its number");
    }
    else if (typeof x === "string") {
        console.log("its string");
    }
    else {
        console.log("invalid");
    }
}
accepted(78);
//EX:3
//UNDEFINED
var c;
c = undefined;
//EX:4
//NEVER
// function abc():never{
//     while(true){
//         console.log("hello")
//     }
// }
// abc();
// console.log("task end!")
//Enums:
// const PI = 3.14;
// var r = 9;
// var area = PI * r * r;
// console.log(area);
//enum
//EX:5
var Direction;
(function (Direction) {
    Direction["TOP"] = "TOP";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
    Direction["BOTTOM"] = "BOTTOM";
})(Direction || (Direction = {}));
console.log(Direction.LEFT);
