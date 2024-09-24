//inhetitance
//eg:1
//single-level inhetitance
// class Person {
//   constructor(public name: string, public age: number) {}
//   getPersonDeatils() {
//     return `Name is ${this.name}, Age is ${this.age}`;
//   }
// }

// class Student extends Person {
//   constructor(public name: string, public age: number, public roll_no: number) {
//     super(name, age);
//   }
//   getStudentDetails() {
//     return `${this.getPersonDeatils()}, roll no is ${this.roll_no}`;
//   }
// }
// let s1 = new Student("isha", 22, 25);
// console.log(s1.getStudentDetails());

// ----------------------------------------------------------------------------------------------

//eg:2
//multi-level inheritance
// class Person {
//   constructor(public name: string, public age: number) {}
//   getPersonDeatils() {
//     return `Name is ${this.name}, Age is ${this.age}`;
//   }
// }

// class Student extends Person {
//   constructor(public name: string, public age: number, public roll_no: number) {
//     super(name, age);
//   }
//   getStudentDetails() {
//     return `${this.getPersonDeatils()}, roll no is ${this.roll_no}`;
//   }
// }
// class Employee extends Student {
//   constructor(
//     public name: string,
//     public age: number,
//     public roll_no: number,
//     public deparment: string
//   ) {
//     super(name, age, roll_no);
//   }
//   getEmployeeDetails() {
//     return `${this.getStudentDetails()}, depatment is ${this.deparment}`;
//   }
// }
// let e1 = new Employee("nitya", 22, 12, "bcs");
// console.log(e1.getEmployeeDetails());

// -----------------------------------------------------------------------------

//eg:3
//hirarchical interface
// class Person {
//   constructor(public name: string, public age: number) {}

//   getPersonDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// class Employee extends Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public department: string
//   ) {
//     super(name, age);
//   }
//   getEmployeeDetails() {
//     return `${this.getPersonDetails()}, Department: ${this.department}`;
//   }
// }
// class Student extends Person {
//   constructor(public name: string, public age: number, public rollno: number) {
//     super(name, age);
//   }
//   getStudentDetails() {
//     return `${this.getPersonDetails()} Roll No.: ${this.rollno}`;
//   }
// }

// let s1 = new Student("Ashok", 22, 1);
// console.log(s1.getStudentDetails());

// let e1=new Employee("nitya",21,"bcs");
// console.log(e1.getEmployeeDetails());

// -----------------------------------------------------------------------------------

//eg:4
//multiple inheritance
// interface Person {
//   name: string;
//   age: number;
// }
// interface Dancer {
//   dance_style: string;
// }
// class superDancer implements Person, Dancer {
//   constructor(
//     public name: string,
//     public age: number,
//     public dance_style: string
//   ) {}
//   getData(){
//     return `name is ${this.name}, age is${this.age}, dance_style is ${this.dance_style}`
//   }
// }
// let D1=new superDancer("vidya",21,"bhartnatyam");
// console.log( D1.getData());

//eg:5.....single inheritance
// class Ele_Device {
//   constructor(public company: string, public price: number) {}
// }
// class Mobile extends Ele_Device {
//   constructor(
//     public company: string,
//     public price: number,
//     public Ram: number,
//     public os: string
//   ) {
//     super(company, price);
//   }
//   getDisplyDetails() {
//     return `company: ${this.company}, price:${this.price},Ram:${this.Ram},operating system:${this.os}  `;
//   }
// }
// let m1 = new Mobile("apple", 100000, 64, "android");
// console.log(m1.getDisplyDetails());

// --------------------------------------------------------------------------------------------

//eg:6.......multilevel inhetitance
// class country {
//   constructor(public countryName: string, public capital: string) {}
// }
// class state extends country {
//   constructor(
//     public countryName: string,
//     public capital: string,
//     public stateName: string
//   ) {
//     super(countryName, capital);
//   }
// }
// class city extends state {
//   constructor(
//     public countryName: string,
//     public capital: string,
//     public stateName: string,
//     public cityName: string
//   ) {
//     super(countryName, capital, stateName);
//   }
// }
// class District extends city {
//   constructor(
//     public countryName: string,
//     public capital: string,
//     public stateName: string,
//     public distName: string,
//     public cityName: string
//   ) {
//     super(countryName, capital, stateName, cityName);
//   }
//   getDisplyDetails() {
//     return `contry name:${this.countryName},
//     capital name:${this.capital},
//     state name ${this.stateName},
//     distict name:${this.distName},
//     city name:${this.cityName}`;
//   }
// }
// let c1 = new District("india", "delhi", "maharashtra", "Ahilyanagar", "karjat");
// console.log(c1.getDisplyDetails());

// ------------------------------------------------------------------------------------------

//eg:7.....hirarchical inhetitance
// class Electronic_Device {
//   constructor(public brand: string) {}
// }
// class Mobile extends Electronic_Device {
//   constructor(public brand: string, public ram: number, public os: string) {
//     super(brand);
//   }
//   getDisplyDetails() {
//     return `brand:${this.brand},
//     ram:${this.ram},
//     operating ststem:${this.os}`;
//   }
// }
// class Laptop extends Electronic_Device {
//   constructor(
//     public brand: string,
//     public ram: number,
//     public os: string,
//     public battery_life: number,
//     public processor: string
//   ) {
//     super(brand);
//   }
//   getDisplayDetails() {
//     return `brand:${this.brand},
//     ram:${this.ram},
//     operating system:${this.os},
//     battery life:${this.battery_life}hours ,
//     processor:${this.processor}`;
//   }
// }
// let mob = new Mobile("samsung", 64, "android");
// console.log(mob.getDisplyDetails());

// let lap = new Laptop("dell", 125, "windows", 10, "intel");
// console.log(lap.getDisplayDetails());

// ---------------------------------------------------------------------------------------

//eg:8 ....multiple inhetitance
interface BankAccount {
  account_no: number;
  account_type: string;
  bank_name: string;
}
interface ATM {
  atm_no: number;
  atm_pin: number;
}
class PhonePay implements BankAccount, ATM {
  constructor(
    public account_no: number,
    public account_type: string,
    public bank_name: string,
    public atm_no: number,
    public atm_pin: number
  ) {}
  DisplyDetails() {
    return `account no:${this.account_no},
    account type:${this.account_type},
    bank name:${this.bank_name},
    atm no:${this.atm_no},
    atm pin:${this.atm_pin}`;
  }
}
let bank = new PhonePay(1112000005643, "saving", "BOB", 465733, 7453);
console.log(bank.DisplyDetails());
