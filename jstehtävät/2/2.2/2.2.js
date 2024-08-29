const numbers = [];

for (let i = 1; i <= 5; i++) {
    const number = prompt(`Enter Number ${i}:`);
    numbers.push(Number(number));
}

console.log("Numbers:", numbers);

const searchNumber = prompt("Enter a Number to Search:");
if (numbers.includes(Number(searchNumber))) {
    console.log(`Number ${searchNumber} is found in the array.`);
} else {
    console.log(`Number ${searchNumber} is not found in the array.`);
}

numbers.pop();

console.log("Updated Numbers:", numbers);

numbers.sort((a, b) => a - b);

console.log("Sorted Numbers:", numbers);