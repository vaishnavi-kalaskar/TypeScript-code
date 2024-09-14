// literals type
// EX:1
var num: 9 | 0 | -1 | 1;
num = 9;
// num=5 its gives error

//EX:2
function handleRequest(url: string, method: "GET" | "POST"): void {
  console.log("request accepted");
}
var url = "https://example.com";
// var method:"GET"="GET"
// handleRequest(url, method );

var method = "GET";
handleRequest(url, method as "GET");

// EX:3
var marks: (string | number | boolean)[] = ["pi", 3.14, true, "e", 2.18];
//tuple
var mark: [string, number, boolean] = ["pi", 89, true];
// var mark2:[string,number,boolean]=["pi",89,true,89] ....its gives error

//types:any,unknown,undefined,never
//EX:1
//ANY
var a: any;
a = 36;
a = "you";

//EX:2
//UNKNOWN
var b: unknown;
b = 34;
b = "yes";

function accepted(x: unknown) {
  if (typeof x === "number") {
    console.log("its number");
  } else if (typeof x === "string") {
    console.log("its string");
  } else {
    console.log("invalid");
  }
}
accepted(78);

//EX:3
//UNDEFINED
var c: undefined;
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
enum Direction {
  TOP = "TOP",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  BOTTOM = "BOTTOM",
}
console.log(Direction.LEFT);

// -----------------------------------------

type direction = {
  TOP: "TOP";
  LEFT: "LEFT";
  RIGHT: "RIGHT";
  BOTTOM: "BOTTOM";
};

interface DIRECTION {
  TOP: "TOP";
  LEFT: "LEFT";
  RIGHT: "RIGHT";
  BOTTOM: "BOTTOM";
}
