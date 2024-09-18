//ex
// interface point {
//   x: number;
//   y: number;
// }
// interface Square {
//   a: point;
//   b: point;
//   c: point;
//   d: point;
// }
// var sqr: Square = {
//   a: { x: 6, y: 6 },
//   b: { x: 9, y: 6 },
//   c: { x: 9, y: 9 },
//   d: { x: 6, y: 9 },
// };

// ex 2
type digit = number;
interface point {
  x: digit;
  y: digit;
}
interface Square {
  a: point;
  b: point;
  c: point;
  d: point;
}
var sqr: Square = {
  a: { x: 6, y: 6 },
  b: { x: 9, y: 6 },
  c: { x: 9, y: 9 },
  d: { x: 6, y: 9 },
};

// Type Assertion
//eg 1
var box: null | HTMLElement;
box = document.getElementById("box");
console.log(box);

//eg 2
// function dispaly(p) {
//   for (let i = 0; i <= 4; i++) {
//     console.log(p);
//   }
// }
// dispaly(document.querySelector("#box"));

//eg 3
let Name: "B@pP@";
// Name="ganesha"....its gives error because Name is only assignable to B@pP@

var heyy: "hello";
heyy = "hello";
