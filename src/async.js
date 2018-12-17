const fs = require('fs');

// function readFile(cb) {
//     fs.readFile('./package.json', (err, data) => {
//         if (err) return cb(err);
//         cb(null, data);
//     });
// }

// readFile((err, data) => {
//     if (!err) {
//         data = JSON.parse(data);
//         console.log(data);
//     }
// })

// 第二阶段 promise

// 第三阶段 co
// const co = require('co');
const util = require('util');

// co(function* () {
//     let data = yield util.promisify(fs.readFile)('./package.json');
//     data = JSON.parse(data);
//     console.log(data);
// })

// 第四阶段  Async
const readAsync = util.promisify(fs.readFile);

async function init() {
    let data = await readAsync('./____file__1.xlsx');
    data = JSON.parse(data);
    console.log(data);
}

init();