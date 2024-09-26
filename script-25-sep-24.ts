// abstract,overloading,overriding,polymorphisam
//eg:1
// abstract class Shape {
//   abstract Area(...Args: number[]): number;
// }
// class square extends Shape {
//   Area(side: number) {
//     return side * side;
//   }
// }
// class Circle extends Shape {
//   Area(radius: number): number {
//     return Math.PI * radius * radius;
//   }
// }
// class Triangle extends Shape {
//   Area(base: number, height: number): number;
//   Area(a: number, b: number, c: number): number;

//   Area(a: number, b: number, c?: number): number {
//     if (typeof c == "undefined") {
//       return 0.5 * a * b;
//     } else {
//       let s = (a + b + c) / 2;
//       return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     }
//   }
// }
// let tri = new Triangle();
// console.log(tri.Area(8, 6, 6));

// let circle = new Circle();
// let a = circle.Area(5);
// console.log(a);
// console.log(Math.round(circle.Area(3)));

// let tri = new Triangle();
// console.log(tri.Area(20, 20));

//eg:2
//abstract method calculator and method is add calculator have 2 classes first is arithmatic claculator and second is Matrix calculator

abstract class Calculator {
  abstract add(...Args): number | number[][];
}

class Arith_cal extends Calculator {
  add(...nums: number[]): number {
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return sum;
  }
}

class Matrix_cal extends Calculator {
  add(a: number[][], b: number[][]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < a[i].length; j++) {
        result[i][j] = a[i][j] + b[i][j];
      }
    }
    return result;
  }
}
const arithCalc = new Arith_cal();
console.log("Sum of numbers:", arithCalc.add(1, 2, 3, 4));

const matrix1: number[][] = [
  [1, 2],
  [3, 4],
];
const matrix2: number[][] = [
  [5, 6],
  [7, 8],
];

const matrixCalc = new Matrix_cal();
console.log("Matrix sum:", matrixCalc.add(matrix1, matrix2));
