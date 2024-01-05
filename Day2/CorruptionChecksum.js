const { dataImporter } = require('../DataImporter');
const data = dataImporter('\n')

const getRowChecksum = (row) => {
    const numbers = row.split('\t').map((number) => parseInt(number));
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return max - min;
}

const part1 = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += getRowChecksum(data[i]);
    }
    return sum;
}

const getDivisibleRowChecksum = (row) => {
    const numbers = row.split('\t').map((number) => parseInt(number));
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] % numbers[j] === 0) {
                return numbers[i] / numbers[j];
            }
        }
    }
}

const part2 = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += getDivisibleRowChecksum(data[i]);
    }
    return sum;
}

console.log("Part 1 - sum: " + part1());
console.log("Part 2 - sum: " + part2());