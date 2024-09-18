var box;
box = document.getElementById("box");
console.log(box);
// function dispaly(p) {
//   for (let i = 0; i <= 4; i++) {
//     console.log(p);
//   }
// }
// dispaly(document.querySelector("#box"));
function dispaly(p) {
    var word = ["hello", "hiii", "heyy", "sayonara"];
    for (var i = 0; i <= 4; i++) {
        console.log(p + "".concat(p.innerHTML));
    }
}
dispaly(document.querySelector("#box"));
