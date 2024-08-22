let p1x = parseInt(prompt("Point 1 x:"))
let p1y = parseInt(prompt("Point 1 y:"))
let p2x = parseInt(prompt("Point 2 x:"))
let p2y = parseInt(prompt("Point 2 y:"))

let d = Math.sqrt(Math.pow((p2x - p1x), 2) + Math.pow((p2y - p1y), 2));

document.getElementById("output").innerHTML =
    `Distance is ${d.toFixed(2)}`;