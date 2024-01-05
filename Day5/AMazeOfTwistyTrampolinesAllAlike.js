const { dataImporter } = require('../DataImporter');
const data = dataImporter('\n').map(char => parseInt(char));

const part1 = (offsets) => {
    let position = 0;
    let steps = 0;

    while (position >= 0 && position < offsets.length) {
        const jump = offsets[position];
        offsets[position]++;
        position += jump;
        steps++;
    }

    console.log("Part 1 - Steps: ", steps);
}

const part2 = (offsets) => {
    let position = 0;
    let steps = 0;

    while (position >= 0 && position < offsets.length) {
        const jump = offsets[position];
        if (jump >= 3) {
            offsets[position]--;
        } else {
            offsets[position]++;
        }
        position += jump;
        steps++;
    }

    console.log("Part 2 - Steps: ", steps);
}

part1([...data]);
part2([...data]);