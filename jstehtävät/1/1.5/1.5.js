let number = parseInt(prompt("Syötä positiivinen luku:"));

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

document.getElementById("target").innerHTML = `Lukujen summa lukuun ${number} asti on: ${sum}`;