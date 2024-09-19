//function
//ex:1
var Earphone = /** @class */ (function () {
    function Earphone(colour, company, _price) {
        this.colour = colour;
        this.company = company;
        this._price = _price;
    }
    Object.defineProperty(Earphone.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Earphone.prototype.SayHello = function () {
        console.log("hello");
    };
    Earphone.prototype.Display = function () {
        console.log(" company name :", this.company);
        console.log("colour :", this.colour);
        console.log("price :", this.price);
    };
    Earphone.prototype.ChangeColor = function (newColor) {
        this.colour = newColor;
    };
    // PrintBill(GST: number, GSTNo: string) {
    //   let billAmt = this.price + this.price * GST;
    //   // console.log(GSTNo, "sold earphone for", billAmt, "Rs");
    // }
    Earphone.prototype.PrintBill = function (GST, GSTNo) {
        var billAmt = this.price + this.price * GST;
        if (GSTNo == undefined) {
            console.log("we Sold Earphone for ", billAmt, "Rs");
        }
        else {
            console.log("we Sold Earphone for ", billAmt, "Rs with GST No: ", GSTNo);
        }
    };
    Earphone.isBTEnable = true;
    return Earphone;
}());
var e1 = new Earphone("black", "apple", 2000);
e1.SayHello();
e1.Display();
e1.ChangeColor("white");
e1.Display();
e1.PrintBill(0.28);
