//ex1 ..simple class with default values and instance
// class chair {
//   public material: string = "wood";
//   public color: string = "black";
//   public price: number = 800;
//   public noOfLegs: number =  4;
// }
// let c1 = new chair();
// console.log("material of chair:", c1.material);
// console.log("color of chair:", c1.color);
// console.log("price of chair:", c1.price);
// console.log("noOFLegs of chair:", c1.noOfLegs);
// let c2 = new chair();
// c2.material = "metal";
// c2.color = "white";
// c2.price = "2500";
// console.log("material of chair:", c2.material);
// console.log("color of chair:", c2.color);
// console.log("price of chair:", c2.price);
// console.log("noOFLegs of chair:", c2.noOfLegs);
//ex2.. use constructor
// class chair {
//   material: string;
//   color: string;
//   price: number;
//   noOfLegs: number;
//   constructor(
//     material: string,
//     color: string,
//     price: number,
//     noOfLegs: number
//   ) {
//     this.material = material;
//     this.color = color;
//     this.price = price;
//     this.noOfLegs = noOfLegs;
//   }
// }
// let c1 = new chair("wood", "black", 1200, 4);
// console.log("material of chair:", c1.material);
// console.log("color of chair:", c1.color);
// console.log("price of chair:", c1.price);
// console.log("noOFLegs of chair:", c1.noOfLegs);
// let c2 = new chair("metal", "white", 2500, 1);
// console.log("material of chair:", c2.material);
// console.log("color of chair:", c2.color);
// console.log("price of chair:", c2.price);
// console.log("noOFLegs of chair:", c2.noOfLegs);
//ex3 ...parameter properties
// class chair {
//     constructor(
//       public material: string,
//       public color: string,
//       public price: number,
//       public noOfLegs: number
//     ) {
//       this.material = material;
//       this.color = color;
//       this.price = price;
//       this.noOfLegs = noOfLegs;
//     }
//   }
//   let c1 = new chair("wood", "black", 1200, 4);
//   console.log("material of chair:", c1.material);
//   console.log("color of chair:", c1.color);
//   console.log("price of chair:", c1.price);
//   console.log("noOFLegs of chair:", c1.noOfLegs);
//   let c2 = new chair("metal", "white", 2500, 1);
//   console.log("material of chair:", c2.material);
//   console.log("color of chair:", c2.color);
//   console.log("price of chair:", c2.price);
//   console.log("noOFLegs of chair:", c2.noOfLegs);
//ex4 ..access specifier
//1=>public access modifier
// class chair {
//   constructor(public material: string ,public price:number) {
//     this.material = material;
//     this.price=price;
//   }
//   setPrice(v:number):void{
//     this.price=v;
//   }
// }
// let c1 = new chair("wood" ,1200);
// console.log("material of chair:", c1.material);
// console.log("price of chair:", c1.price);
// c1.price=1500;
// console.log("price of chair:", c1.price);
// c1.setPrice(4000);
// console.log("price of chair:", c1.price);
//2=>protected access modifier
var chair = /** @class */ (function () {
    function chair(material, price) {
        this.material = material;
        this.price = price;
        this.material = material;
        this.price = price;
    }
    chair.prototype.setPrice = function (v) {
        this.price = v;
    };
    chair.prototype.getPrice = function () {
        return this.price;
    };
    return chair;
}());
var c1 = new chair("wood", 1200);
console.log("material of chair:", c1.material);
console.log("price of chair:", c1.getPrice());
console.log("price of chair:", c1.setPrice(4000));
c1.setPrice(4325);
console.log("price of chair:", c1.setPrice);
//3=>private access modifier
// class chair {
//   constructor(private material: string ,private price:number) {
//     this.material = material;
//     this.price=price;
//   }
//   setPrice(v:number):void{
//     this.price=v;
//   }
// }
// let c1 = new chair("wood" ,1200);
// console.log("material of chair:", c1.material);
// console.log("price of chair:", c1.price);
//4=>protected access modifier
// class Chair {
//     constructor(public material: string, private price: number) {
//       this.material = material;
//       this.price = price;
//     }
//     getPrice(): number {
//       return this.price;
//     }
//     setPrice(v: number): void {
//       this.price = v;
//     }
//   }
//   let c1 = new Chair("wood", 1200);
//   console.log("Material of chair:", c1.material);
//   console.log("Price of chair:", c1.getPrice());
//   c1.setPrice(4000);
//   console.log("Price of chair after update:", c1.getPrice());
