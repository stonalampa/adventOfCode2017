const { dataImporter } = require('../DataImporter');
const data = dataImporter('\n');

const part1 = () => {
    let sum = 0;
    data.map((row) => {
        const words = row.split(' ');
        const uniqueWords = new Set(words);
        sum += words.length === uniqueWords.size ? 1 : 0;
    });
    console.log("Part 1 - Number of valid passphrases: " + sum);
}

const noAnagrams = (words) => {
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 1; j < words.length; j++) {
            const otherWord = words[j];
            if (word.length === otherWord.length && word) {
                const wordLetters = word.split('');
                const otherWordLetters = otherWord.split('');
                const isAnagram = wordLetters.every((letter) => {
                    return otherWordLetters.includes(letter);
                });
                if (isAnagram) return false;
            }
        }
    }
    return true;
}

const part2 = () => {
    let sum = 0;
    data.map((row) => {
        const words = row.split(' ');
        const uniqueWords = new Set(words);
        sum += words.length === uniqueWords.size && noAnagrams(words) ? 1 : 0;
    });
    console.log("Part 2 - Number of valid passphrases: " + sum);
}

part1();
part2();