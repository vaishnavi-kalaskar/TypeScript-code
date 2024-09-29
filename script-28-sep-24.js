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
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        this.company = "fastcart";
        Employee.NoOfEmps++;
        this.id = Employee.NoOfEmps + 100;
    }
    Employee.prototype.EmpData = function () {
        console.log("company name: ".concat(this.company));
        console.log("id if employee: ".concat(this.id));
        console.log("name of employee: ".concat(this.name));
    };
    Employee.NoOfEmps = 0;
    return Employee;
}());
console.log(Employee.NoOfEmps);
var e1 = new Employee("isha");
var e2 = new Employee("nitya");
var e3 = new Employee("nisha");
var e4 = new Employee("vaishnavi");
var e5 = new Employee("shivani");
e3.EmpData();
