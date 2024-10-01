// import { add, addall } from "./myfile";
// console.log(add(45, 45));

// console.log(addall(45, 56, 89, 100));

//BY OBJECT....

// import { obj } from "./myClass";
// console.log(obj.add(5,8));
// console.log( obj.multi(4,5));
// console.log( obj.sub(9,8));

// BY CLASS....

// import  calculator  from "./myClass";
// let obj = new calculator();
// console.log(obj.add(45, 78));
// console.log(obj.multi(56, 78));
// console.log(obj.sub(12, 9));

// // BY EXPORT DEFAULT
// import cal from './myClass'
// let obj1=new cal();
// console.log( obj1.add(8,9));

// -------------------------------------------------------

function log(val: number, callback: Function) {
  console.log(callback(val));
}
function sq(val: number) {
  return val ** 2;
}
log(8, sq);

// ------------------------------------------------------------
// MAP...

let arr: number[] = [2, 3, 4, 5];
// arr.map((val: number) => {
//   console.log(val * val);
// });

let sqr = arr.map((val: number) => {
  return val * val;
});
console.log(sqr);

// -----------------------------------------------------
// FILTER...

let odd=arr.filter((val:number)=>{
    return val%2==1;
})
console.log(odd);

// -----------------------------------------------------------
// REDUCE...

let sum=arr.reduce((a:number,b:number)=>{
    return a+b;
})
console.log( sum);