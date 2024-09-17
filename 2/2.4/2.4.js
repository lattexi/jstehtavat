const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function sortArray(array) {
    array.sort((a, b) => a - b);
    return array;
}

sortArray(numbers);

console.log(numbers);