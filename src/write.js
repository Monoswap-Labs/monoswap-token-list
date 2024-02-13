const buildList = require('./buildList');

const data = buildList();
console.log(JSON.stringify(data, null, 2));