//interface
//ex=1
interface cir {
  x: number;
  y: number;
  r: number;
}

var circle: cir = {
  x: 9,
  y: 8,
  r: 5,
};

function Area(c: cir) {
  console.log(
    `area of given circle having coordinate(${c.x},${c.y} radius is ${c.r} is ${
      3.14 * c.r ** 2
    }`
  );
}
Area({ x: 9, y: 8, r: 5 });
Area({ x: 8, y: 4, r: 2 });
Area({ x: 5, y: 7, r: 1 });

Area(circle);

// ex:2
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
const bear: Bear = {
  name: "bhalo",
  honey: true,
};
console.log(bear.name);
console.log(bear.honey);

// ex:3
type amimal = {
  name: string;
};
type bear = Animal & {
  honey: boolean;
};
const Beear: bear = {
  name: "bhaalo",
  honey: false,
};
console.log(Beear.name);
console.log(Beear.honey);

// ex 4
interface Hero {
  fly: boolean;
  fastRunner: boolean;
}
interface Hero {
  IQ_level: number;
}
var hero: Hero = {
  fly: true,
  fastRunner: true,
  IQ_level: 100,
};
console.log(hero);

// ex 5
// type Heroo={
//   fly: boolean;
//   fastRunner: boolean;
// }
// type Heroo{
//   IQ_level: number;
// }
//.........its gives the error because we cant give same type name
