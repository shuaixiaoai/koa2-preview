const fs = require('fs');

// express callback
// fs.readFile('./package.json', (err, data) => {
//     if (err) return console.log(err);
//     data = JSON.parse(data);
//     console.log(data);
// });


// 过渡时期的promise
// function readFileAsync(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if (err) reject(err)
//             else resolve(data)
//         })
//     })
// }
// readFileAsync('./package.json')
//     .then(data => {
//         console.log(JSON.parse(data))
//     })
//     .catch(err => console.log(err));

// async await   node8以后的utils原生支持 --> util.promisify包装回调到promise的体验
const util = require('util');
util.promisify(fs.readFile)('./package.json')
    .then(JSON.parse)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })