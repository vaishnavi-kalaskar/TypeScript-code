//inhetitance
//eg:1
//single-level inhetitance
// class Person {
//   constructor(public name: string, public age: number) {}
//   getPersonDeatils() {
//     return `Name is ${this.name}, Age is ${this.age}`;
//   }
// }
var PhonePay = /** @class */ (function () {
    function PhonePay(account_no, account_type, bank_name, atm_no, atm_pin) {
        this.account_no = account_no;
        this.account_type = account_type;
        this.bank_name = bank_name;
        this.atm_no = atm_no;
        this.atm_pin = atm_pin;
    }
    PhonePay.prototype.DisplyDetails = function () {
        return "account no:".concat(this.account_no, ",\n    account type:").concat(this.account_type, ",\n    bank name:").concat(this.bank_name, ",\n    atm no:").concat(this.atm_no, ",\n    atm pin:").concat(this.atm_pin);
    };
    return PhonePay;
}());
var bank = new PhonePay(1112000005643, "saving", "BOB", 465733, 7453);
console.log(bank.DisplyDetails());
