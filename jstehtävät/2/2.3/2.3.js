const numbers = [];

while (true) {
    const input = prompt("Enter a number (or 'done' to finish):");

    if (input === "done") {
        break;
    }

    const number = parseInt(input);

    if (!isNaN(number)) {
        numbers.push(number);
    }
}

let evenNumbers = "";

for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbers += number + ", ";
    }
}

if (evenNumbers.length > 0) {
    evenNumbers = evenNumbers.slice(0, -2);
    console.log("Even Numbers: " + evenNumbers);
} else {
    console.log("Even Numbers: None");
}

console.log("End of program.");