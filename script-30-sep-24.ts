// --------------------------------------------------------------------------------------
// GENERICS

//eg:1....in function

function printMsg<T>(msg: T) {
  console.log(msg);
}
printMsg<string>("helloooo");
printMsg("heyyyyy");
printMsg<number>(4);
printMsg(true);

// ------------------------------------------------------------------------------------

//eg:2.......in interface

interface Locker<T> {
  key: T;
}
let lock: Locker<number> = {
  key: 1234,
};
console.log(lock);

let lock1: Locker<string> = {
  key: "QWE",
};
console.log(lock1);

// --------------------------------------------------------------------------------------

// eg:3..
interface mobile<T> {
  company: T;
}
let m1: mobile<string> = {
  company: "dell",
};
console.log(m1);

// ------------------------------------------------------------------------------------------

//eg:4........in class
class laptopBuilder<T> {
  constructor(public id: T) {}
}
let b1 = new laptopBuilder<string>("qwe");
console.log(b1);
let b2 = new laptopBuilder<number>(123);
console.log(b2);

// ----------------------------------------------------------------------------------------

//TYPE ASSERTION

//eg:5
function recorder<T>(a: T): T {
  return <T>"sey";
  // return "say" as T
}
recorder<string>("yes");

// -------------------------------------------------------------------------------------------

//TYPE CONVERSION /CASTING

//eg:6
let num = "123";
console.log(Number(num));

let n = 531;
console.log(String(n));

// -------------------------------------------------------------------------------------------
