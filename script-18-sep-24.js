//default parameters
//ex:1
// class chair {
//   constructor(public price: number, public material: string = "wood") {
//     this.material = material;
//     this.price = price;
//   }
//   setPrice(v: number): void {
//     this.price = v;
//   }
// }
// class GamingChair extends chair {
//   NewPrice(v: number): void {
//     this.price = v;
//   }
// }
// let c1 = new chair(1200, "wood");
// console.log("material of chair:", c1.material);
// console.log("material of chair:", c1.price);
// let c2 = new chair(1200, "clothes");
// let c3 = new chair(1200);
// console.log(c3.material);
//optional parameter
//ex:2
// class chair {
//   constructor(
//     public price: number,
//     public material: string = "wood",
//     public GSTNo?: string
//   ) {
//     this.material = material;
//     this.price = price;
//   }
//   setPrice(v: number): void {
//     this.price = v;
//   }
// }
// class GamingChair extends chair {
//   NewPrice(v: number): void {
//     this.price = v;
//   }
// }
// let c1 = new chair(1200, "wood", "MH16QR2024");
// console.log("material of chair:", c1.material);
// console.log("material of chair:", c1.price);
// console.log("material of chair:", c1.GSTNo);
// let c2 = new chair(1200, "clothes");
// let c3 = new chair(1200);
// console.log(c3.material);
// ReadOnly property
//ex:3
// class chair {
//   constructor(
//     public readonly price: number,
//     public material: string = "wood",
//     public GSTNo?: string
//   ) {
//     this.material = material;
//     this.price = price;
//   }
// }
// let c1 = new chair(1200, "wood", "MH16QR2024");
// console.log("material of chair:", c1.material);
// console.log("material of chair:", c1.price);
// console.log("material of chair:", c1.GSTNo);
// c1.price = 2000; ---------its gives error because it is read-only property
// console.log(c1.price);
//Getter and setter paramerters
//ex:4
// class chair {
//   constructor(public price: number, public material: string) {
//     this.material = material;
//     this.price = price;
//   }
//   public set Price(newPrice: number) {
//     this.price = newPrice;
//   }
//   public get DisplayPrice() {
//     return this.price;
//   }
// }
// let c1 = new chair(1200, "gold");
// console.log("material of chair:", c1.material);
// console.log("material of chair:", c1.DisplayPrice);
// c1.Price = 4500;
// console.log(c1.DisplayPrice);
//ex:5
// class chair {
//     constructor(public _price: number, public material: string) {
//       this.material = material;
//       this._price = _price;
//     }
//     public set price(newPrice: number) {
//       this._price = newPrice;
//     }
//     public get price() {
//       return this._price;
//     }
//   }
//   let c1 = new chair(1200, "gold");
//   console.log("material of chair:", c1.material);
//   console.log("material of chair:", c1.price);
//   c1.price = 4500;
//   console.log(c1.price);
// Static parameters
var chair = /** @class */ (function () {
    function chair(price, material) {
        this.price = price;
        this.material = material;
        this.material = material;
        this.price = price;
    }
    Object.defineProperty(chair.prototype, "Price", {
        set: function (newPrice) {
            this.price = newPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(chair.prototype, "DisplayPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    chair.GSTNO = "MH16QR2024";
    return chair;
}());
var c1 = new chair(1200, "gold");
console.log("material of chair:", c1.material);
console.log("material of chair:", c1.DisplayPrice);
c1.Price = 4500;
console.log(c1.DisplayPrice);
console.log(chair.GSTNO);
