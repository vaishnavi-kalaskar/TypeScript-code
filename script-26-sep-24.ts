//eg:1
abstract class BankAcc {
  abstract CalInterest(): number;
}
class SavingAcc extends BankAcc {
  constructor(public name: string, private balance: number) {
    super();
  }
  public CalInterest(): number {
    return 0.05 * this.balance;
  }
}
class CurrentAcc extends BankAcc {
  constructor(public name: string, private balance: number) {
    super();
  }
  public CalInterest(): number {
    return 0.07 * this.balance;
  }
}
let s1 = new SavingAcc("nitya", 25000);
console.log(s1.CalInterest());

let c1 = new CurrentAcc("vidhi", 25000);
console.log(c1.CalInterest());

// ------------------------------------------------------------------------

//eg:2
type Matrix = {
  0: [number, number, number];
  1: [number, number, number];
  2: [number, number, number];
};

abstract class Calculator {
  abstract add(A, B): number | Matrix;
  abstract add(A: Matrix, B: Matrix): number | Matrix;
}
class ArithCal extends Calculator {
  add(...nums): number {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }
}
class MatrixAdd extends Calculator {
  add(A: Matrix, B: Matrix): Matrix {
    let M: Matrix = {
      0: [0, 0, 0],
      1: [0, 0, 0],
      2: [0, 0, 0],
    };
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        M[i][j] = A[i][j] + B[i][j];
      }
    }
    return M;
  }
}
const A: Matrix = {
  0: [1, 2, 3],
  1: [4, 5, 6],
  2: [7, 8, 9],
};
const B: Matrix = {
  0: [7, 8, 9],
  1: [6, 5, 4],
  2: [1, 2, 3],
};
let a1 = new ArithCal();
console.log(a1.add(5, 55, 667, 6));

let m = new MatrixAdd();
console.log(m.add(A, B));

// -------------------------------------------------------------

//eg:3
class Parent {
  show() {
    console.log("hello parent!!!!");
  }
}
class Child extends Parent {
  show(): void {
    console.log("helloooo Child!!!!");
  }
}

let n1 = new Child();
n1.show();

// -----------------------------------------------------------------------

//eg:4
// type Matrix = {
//   x: [number, number, number];
//   y: [number, number, number];
//   z: [number, number, number];
// };

// abstract class Calculator {
//   abstract add(A, B): number | Matrix;
//   abstract add(A: Matrix, B: Matrix): number | Matrix;
// }
// class ArithCal extends Calculator {
//   add(...nums): number {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//     }
//     return sum;
//   }
// }
// class MatrixAdd extends Calculator {
//   add(A: Matrix, B: Matrix): Matrix {
//     let M: Matrix = {
//       x: [0, 0, 0],
//       y: [0, 0, 0],
//       z: [0, 0, 0],
//     };
//     for (let i = 0; i < 3; i++) {
//       M.x[i] = A.x[i] + B.x[i];
//       M.y[i] = A.y[i] + B.y[i];
//       M.z[i] = A.z[i] + B.z[i];
//     }
//     return M;
//   }
// }
// const A: Matrix = {
//   x: [1, 2, 3],
//   y: [4, 5, 6],
//   z: [7, 8, 9],
// };
// const B: Matrix = {
//   x: [7, 8, 9],
//   y: [6, 5, 4],
//   z: [1, 2, 3],
// };
// let mat = new MatrixAdd();
// console.log(mat.add(A, B));

// ---------------------------------------------------------------------
//eg:5...multiplication of matrix
type matrix = {
  0: [number, number, number];
  1: [number, number, number];
  2: [number, number, number];
};

abstract class Calculator1 {
  abstract add(...args): number | matrix;
  abstract multiply(C: matrix, D: matrix): matrix;
}

class MatrixOps extends Calculator1 {
  add(A: matrix, B: matrix): matrix {
    let M: matrix = {
      0: [0, 0, 0],
      1: [0, 0, 0],
      2: [0, 0, 0],
    };
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        M[i][j] = A[i][j] + B[i][j];
      }
    }
    return M;
  }

  multiply(C: matrix, D: matrix): matrix {
    let M: matrix = {
      0: [0, 0, 0],
      1: [0, 0, 0],
      2: [0, 0, 0],
    };
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let sum = 0;
        for (let k = 0; k < 3; k++) {
          sum += C[i][k] * D[k][j];
        }
        M[i][j] = sum;
      }
    }
    return M;
  }
}

const C: matrix = {
  0: [1, 2, 3],
  1: [4, 5, 6],
  2: [7, 8, 9],
};

const D: matrix = {
  0: [7, 8, 9],
  1: [6, 5, 4],
  2: [1, 2, 3],
};
let m1 = new MatrixOps();
console.log("Matrix Multiplication:", m1.multiply(C, D));
