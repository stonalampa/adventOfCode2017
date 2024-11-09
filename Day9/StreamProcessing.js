const { dataImporter } = require('../DataImporter');
const data = dataImporter('\n')[0].split('');
console.log(data);