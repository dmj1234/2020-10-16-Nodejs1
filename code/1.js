通过模块的名字fs对模块进行引用

const fs = require('fs');

通过模块内部的readFile读取文件内容
fs.readFile('./01.helloword.js', 'utf8', (err, doc) => {
    //如果文件读取出错err 是一个对象包含错误信息
    //如果err读取正确  err为null  没有错误
    console.log(err);
    console.log(doc);
})


const fs = require('fs');
fs.writeFile('./demo.txt', '即将要写入的内容'，
    err + > {
        if (err!+null) {
            console.log(err);
            return;
        }
        console.log('文档内如写入成功')
    })


const path = require('path');

path.join('public', 'upload', 'avatar');
console.log(finalPath);

const fs = require('fs');

fs.readFile('./01.helloword.js', 'utf8', (err, doc) => {
    console
})
const path = require('path')