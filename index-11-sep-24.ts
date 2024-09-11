//union............................

//ex:1
// var id=5786765
// var id="hiiii"

function record(id: number | string) {
  if (typeof id == "string") {
    id = id.toUpperCase();
    console.log(`id:${id} is get recorded`);
  } else {
    console.log(`id:${id} is not recorded`);
  }
}
record("s2409001");

//ex:2

function Color(color: string | string[]) {
  if (Array.isArray(color)) {
    // console.log(color.join(", "));
    color.forEach((item) => {
      console.log(item);
    });
  } else {
    console.log(`your given color is ${color}`);
  }
}
Color("red");
Color(["red", "blue", "green"]);

//ex3
function getAge(age: number | string) {
  if (typeof age == "string") {
    age = parseInt(age);
  } else {
    console.log("invalid age");
  }
}
getAge(78);

//type Aliaces.......................................

type Point = {
  x: number;
  y: number;
};
//ex:1
//point={x:10,y:20}
//point={x:10,y:20,z:30}
function printPoint(point: Point) {
  console.log(point.x, point.y);
}
printPoint({ x: 10, y: 20 });

//ex:2
type Book = {
  title: string;
  pages: number;
  author: string;
};
var b1: Book = {
  title: "ramayan",
  pages: 900,
  author: "vyas rhishi",
};
console.log(b1);

//ex:3
type student = {
  name: string;
  age: number;
  marks: number;
};
var s1: student = {
  name: "ram",
  age: 20,
  marks: 90,
};
console.log(s1);
