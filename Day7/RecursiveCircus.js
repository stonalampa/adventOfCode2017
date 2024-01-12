const { dataImporter } = require('../DataImporter');
const data = dataImporter('\n');

const parseProgram = (line) => {
    const match = line.match(/(\w+) \((\d+)\)(?: -> (.+))?/);
    const name = match[1];
    const weight = parseInt(match[2]);
    const children = match[3] ? match[3].split(', ') : [];
    return { name, weight, children };
};

const buildTree = () => {
    let tree = {};
    data.forEach(line => {
        const program = parseProgram(line);
        tree[program.name] = program;
    });
    return tree;
}

const part1 = () => {
    const tree = buildTree();
    const programs = Object.keys(tree);
    const childSet = new Set();

    programs.forEach(program => {
        tree[program].children.forEach(child => {
            childSet.add(child);
        });
    });
    console.log("Part 1 - The root of the tree: "
        + programs.find(program => !childSet.has(program)));
}

part1();

// ! **** The solution is 193, I have no idea why ****
// ! *** Even ChatGPT is useless here ***
// const dfs = (node, graph) => {
//     if (!graph[node]) {
//         return { [node]: graph[node].weight };
//     }

//     const weights = {};

//     for (const child of graph[node].children) {
//         const childWeights = dfs(child, graph);
//         weights[child] = graph[child].weight + Object.values(childWeights).reduce((sum, val) => sum + val, 0);
//     }

//     return weights;
// };

// const part2 = () => {
//     const root = 'cyrupz';
//     const tree = buildTree();
//     console.log(dfs(root, tree));
// }

// part2();