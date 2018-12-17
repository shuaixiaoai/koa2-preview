const fs = require('fs');
const util = require('util');
const xlsx = require('node-xlsx');

//读取文件内容
const obj = xlsx.parse('../3pd - ICI-KELLY-0.xlsx'); //配置excel文件的路径
const excelObj = obj[0].data; //excelObj是excel文件里第一个sheet文档的数据，obj[i].data表示excel文件第i+1个sheet文档的全部内容

let data = [];
for (var i in excelObj) {
    var arr = [];
    var value = excelObj[i];
    for (var j in value) {
        arr.push(value[j]);
    }
    data.push(arr);
}

console.log(data)