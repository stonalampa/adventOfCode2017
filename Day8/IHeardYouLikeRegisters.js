const { dataImporter } = require('../DataImporter');
const data = dataImporter('\n');

const part1 = () => {
    const registers = {};
    let max = 0;
    data.forEach(line => {
        const regex = /(\w+) (inc|dec) (-?\d+) if (\w+) (>=|<=|==|!=|>|<) (-?\d+)/;
        const [_, register, operation, value, conditionRegister, condition, conditionValue] = regex.exec(line);
        if (!registers[register]) registers[register] = 0;
        if (!registers[conditionRegister]) registers[conditionRegister] = 0;
        if (eval(`${registers[conditionRegister]} ${condition} ${conditionValue}`)) {
            registers[register] += operation === 'inc' ? parseInt(value) : -parseInt(value);
        }
        max = Math.max(max, ...Object.values(registers));
    });
    console.log("Part 1 - Max value: ", Math.max(...Object.values(registers)));
}

const part2 = () => {
    const registers = {};
    let max = 0;
    data.forEach(line => {
        const regex = /(\w+) (inc|dec) (-?\d+) if (\w+) (>=|<=|==|!=|>|<) (-?\d+)/;
        const [_, register, operation, value, conditionRegister, condition, conditionValue] = regex.exec(line);
        if (!registers[register]) registers[register] = 0;
        if (!registers[conditionRegister]) registers[conditionRegister] = 0;
        if (eval(`${registers[conditionRegister]} ${condition} ${conditionValue}`)) {
            registers[register] += operation === 'inc' ? parseInt(value) : -parseInt(value);
        }
        max = Math.max(max, ...Object.values(registers));
    });
    console.log("Part 2 - Max value: ", max);
}

part1();
part2();