// class Laptop {
//   static company: string = "Dell";
//   static color: string;
//   static os: string = "windows";
//   constructor(
//     public ram: number,
//     public rom: number,
//     public processor: string
//   ) {}
//   oprnApp(app: string) {
//     console.log(`opening app in ${app} on ${Laptop.os} os`);
//   }
//   static GiveColor(color: string) {
//     this.color = color;
//   }
// }
// let lp = new Laptop(16, 125, "intel");
// console.log("company name:", Laptop.company);
// Laptop.company = "HP";
// console.log("company name :", Laptop.company);

class Employee {
  company: string = "fastcart";
  static NoOfEmps: number = 0;
  id: number;
  constructor(public name: string) {
    Employee.NoOfEmps++;
    this.id = Employee.NoOfEmps + 100;
  }
  EmpData() {
    console.log(`company name: ${this.company}`);
    console.log(`id if employee: ${this.id}`);
    console.log(`name of employee: ${this.name}`);
  }
}
console.log(Employee.NoOfEmps);
let e1 = new Employee("isha");
let e2 = new Employee("nitya");
let e3 = new Employee("nisha");
let e4 = new Employee("vaishnavi");
let e5 = new Employee("shivani");

e3.EmpData();
