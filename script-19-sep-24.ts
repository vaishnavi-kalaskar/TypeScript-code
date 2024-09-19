//function
//ex:
class Earphone {
  public static isBTEnable = true;
  constructor(
    public colour: string,
    public readonly company: string,
    private _price: number
  ) {}

  public set price(value) {
    this._price = value;
  }

  public get price() {
    return this._price;
  }

  SayHello() {
    console.log("hello");
  }
  Display() {
    console.log(" company name :", this.company);
    console.log("colour :", this.colour);
    console.log("price :", this.price);
  }
  ChangeColor(newColor: string) {
    this.colour = newColor;
  }

  // PrintBill(GST: number, GSTNo: string) {
  //   let billAmt = this.price + this.price * GST;
  //   // console.log(GSTNo, "sold earphone for", billAmt, "Rs");
  // }

  //....by optional value
  PrintBill(GST: number, GSTNo?: string) {
    let billAmt = this.price + this.price * GST;
    if (GSTNo == undefined) {
      console.log("we Sold Earphone for ", billAmt, "Rs");
    } else {
      console.log("we Sold Earphone for ", billAmt, "Rs with GST No: ", GSTNo);
    }
  }

  //....by default value
  // PrintBill(GST: number, GSTNo: string = "MH00001") {
  //   let billAmt = this.price + this.price * GST;
  //   console.log("we Sold Earphone for ", billAmt, "Rs with GST No: ", GSTNo);
  // }
}

let e1 = new Earphone("black", "apple", 2000);
e1.SayHello();
e1.Display();

e1.ChangeColor("white");
e1.Display();

e1.PrintBill(0.28, "MH1690QR45");
