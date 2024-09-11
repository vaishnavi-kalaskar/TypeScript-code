// type annotation on variables
// var a=3;
// // a="c";  //error occure because here type is number.
// var a:number=98;
// var b:string="vaishnavi";
// var c:boolean=true;
// var d:number=9;
// console.log(a+d);
// var arr:number[]=[3,5,6];
// var arr:number[]=[3,5,6,"9"]; //error occure because arr is only type of number
// var f; //type is any......avoid this type
//type annotation on function
// function greet(): void {
//   console.log("hello");
// }
// greet();
// function add(a: number, b: number): number {
//   var sum = a + b;
//   return sum;
// }
// console.log("sum:", add(7, 8));
// function sub(a: number, b: number): number {
//   var substarct = a - b;
//   return substarct;
// }
// console.log("sum:", sub(7, 8));
// function getItemId(id: string) {
//     id=id.toUpperCase();
//   console.log(`Registation of ${id} done successfully`);
// }
// getItemId("s202409110");
//array
var marks = [67, 89, 87, 97];
marks.forEach(function (element) {
    console.log(element);
});
// The parameter's type annotation is an object type
function cordinate(point) {
    console.log("The coordinate's x   " + point.x);
    console.log("The coordinate's y   " + point.y);
}
cordinate({ x: 3, y: 7 });
//optional properties
function printName(obj) {
    console.log(obj.first);
}
// printName({ first: "John" }); // here error occure whwn we are not give a optional property to last
printName({ first: "John", last: "Doe" });
