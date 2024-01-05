const { dataImporter } = require('../DataImporter');
const data = dataImporter('')

const part1 = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        const current = data[i];
        const next = data[i + 1] || data[0];
        if (current === next) {
            sum += parseInt(current);
        }
    }
    return sum;
}

const part2 = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        const current = data[i];
        const next = data[i + data.length / 2] || data[i - data.length / 2];
        if (current === next) {
            sum += parseInt(current);
        }
    }
    return sum;
}

console.log("Part 1 - sum: " + part1());
console.log("Part 2 - sum: " + part2());