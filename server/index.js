const Koa = require('koa');
const views = require('koa-views');
const { resolve } = require('path');

const app = new Koa();

app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))

app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'XiaoDoubi',
        me: 'Shuaixiaoai'
    })
});

app.listen(4455);