var circle = {
    x: 9,
    y: 8,
    r: 5,
};
function Area(c) {
    console.log("area of given circle having coordinate(".concat(c.x, ",").concat(c.y, " radius is ").concat(c.r, " is ").concat(3.14 * Math.pow(c.r, 2)));
}
Area({ x: 9, y: 8, r: 5 });
Area({ x: 8, y: 4, r: 2 });
Area({ x: 5, y: 7, r: 1 });
Area(circle);
var bear = {
    name: "bhalo",
    honey: true,
};
console.log(bear.name);
console.log(bear.honey);
var Beear = {
    name: "bhaalo",
    honey: false,
};
console.log(Beear.name);
console.log(Beear.honey);
var hero = {
    fly: true,
    fastRunner: true,
    IQ_level: 100,
};
console.log(hero);
