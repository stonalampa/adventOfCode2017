const input = 312051;

const findCoordinates = (matrix, input) => {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(input)) {
            return [i, matrix[i].indexOf(input)];
        }
    }
}

const generateCircularMatrix = (input) => {
    let matrix = [];


}

// * Part 1
const matrix = generateCircularMatrix(input);
const coordinatesOfInput = findCoordinates(matrix, input);
const coordinatesOStart = findCoordinates(matrix, 1);
const distance =
    Math.abs(coordinatesOfInput[0] - coordinatesOStart[0]) +
    Math.abs(coordinatesOfInput[1] - coordinatesOStart[1]);

console.log("Part 1 - Distance: " + distance);