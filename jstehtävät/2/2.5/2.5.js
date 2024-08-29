const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function sortArray(numbers, order) {
    numbers.sort((a, b) => a - b);
    if (order === 'desc') {
        numbers.reverse();
    }
    return numbers;
}

console.log(sortArray(array, 'asc'));
console.log(sortArray(array, 'desc'));