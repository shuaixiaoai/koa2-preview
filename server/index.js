const Koa = require('koa');
const app = new Koa();
const ejs = require('ejs');
const pug = require('pug');

const {
    htmlTpl, ejsTpl, pugTpl
} = require('./tpl');

app.use(async (ctx, next) => {
    ctx.type = "text/html; charset=utf8";
    // ctx.body = ejs.render(ejsTpl, {
    //     you: 'xiaodoubi',
    //     me: 'shuaixiaoai'
    // });
    ctx.body = pug.render(pugTpl, {
        you: 'xiaodoubi',
        me: 'shuaixiaoai'
    })
});

app.listen(4455);