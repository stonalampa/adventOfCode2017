const input = 312051;

// * Part 1
const manhattanDistance = (target) => {
    // Find the layer (or "ring") in which the target is located
    let layer = 0;
    let maxInLayer = 1;

    while (maxInLayer * maxInLayer < target) {
        layer++;
        maxInLayer += 2;
    }

    // Find the distance from the target to the nearest axis in the current layer
    const distanceToAxis = Math.abs((target - (maxInLayer - 2) * (maxInLayer - 2)) % (maxInLayer - 1) - (maxInLayer - 1) / 2);

    // The Manhattan Distance is the sum of the layer and distance to axis
    const manhattanDistance = layer + distanceToAxis;

    return manhattanDistance;
}

// * Part 2
const getAdjacentSum = (x, y, grid) => {
    let sum = 0;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            sum += grid[`${i}_${j}`] || 0;
        }
    }
    return sum;
}

const findFirstLargerValue = (target) => {
    const grid = {};
    let x = 0;
    let y = 0;
    let direction = 'right';
    let value = 1;

    while (value <= target) {
        grid[`${x}_${y}`] = value;
        if (direction === 'right') {
            x++;
            if (!grid[`${x}_${y - 1}`]) direction = 'up';
        } else if (direction === 'up') {
            y--;
            if (!grid[`${x - 1}_${y}`]) direction = 'left';
        } else if (direction === 'left') {
            x--;
            if (!grid[`${x}_${y + 1}`]) direction = 'down';
        } else if (direction === 'down') {
            y++;
            if (!grid[`${x + 1}_${y}`]) direction = 'right';
        }

        value = getAdjacentSum(x, y, grid);
    }

    return value;
}

console.log("Part 1 - Distance: " + manhattanDistance(input));
console.log("Part 2 - Larger Value: " + findFirstLargerValue(input));