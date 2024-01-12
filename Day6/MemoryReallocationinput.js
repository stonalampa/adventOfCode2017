const { dataImporter } = require('../DataImporter');
const data = dataImporter()[0].split('\t').map(Number);

const part1 = () => {
    let count = 0;
    let seen = {};
    let key = data.join(',');
    while (!seen[key]) {
        seen[key] = count;
        let max = Math.max(...data);
        let index = data.indexOf(max);
        data[index] = 0;
        while (max > 0) {
            index = (index + 1) % data.length;
            data[index]++;
            max--;
        }
        key = data.join(',');
        count++;
    }
    console.log("Part 1 - " + count);
}

const part2 = () => {
    let count = 0;
    let seen = {};
    let key = data.join(',');
    while (!seen[key]) {
        seen[key] = count;
        let max = Math.max(...data);
        let index = data.indexOf(max);
        data[index] = 0;
        while (max > 0) {
            index = (index + 1) % data.length;
            data[index]++;
            max--;
        }
        key = data.join(',');
        count++;
    }
    console.log("Part 2: " + (count - seen[key]));
}

part1();
part2();