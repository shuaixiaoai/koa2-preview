#### koa2

1、https://github.com/creationix/nvm nvm 管理 node 版本.  
命令行安装`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`

2、 淘宝镜像 --registry=https://registry.npm.taobao.org

3、 查看文档 mozlia mon

4、 安装 babel 编译环境以及 babel 插件  运行环境
babel-plugin-transform-runtime babel-runtime

#### koa 核心对象

```
1、application.js
const app = new Koa() --> Application  -->    class App extends Emitter -->  constuctor、use、listen(this.callback)、callback
其中callback分为： createContext  --> context、request/response、context.app = this、 context.req/res = req/res、cookie、ip；
                 handleRequest  --> compose(middleware)、response(buffer/string/stream pipe/json);

app.use(middleware)
app.listen(2333)


new Koa()  -->  new Application() --> 提供new 出来的实例能够使用koa的能力， 包括  -->  传入中间件、监听端口生成服务器实例、nodejs拿到http请求、然后逐层的过中间件数组、吧把中间件的结果交给Application声明的handleResponse处理响应、返回具体的响应内容;

2、context.js
export proto对象； 将response、request上的属性方法代理到proto
Object.create()方法会使用指定的原型对象及其属性去创建一个新的对象
在application.js中会执行createContext方法， 创建context/request/response对象： context = Object.create(this.context)
                                                                          request = Object.create(this.request);
                                                                          response = Object.create(this.response;
主要就是生成context： 把request、response的方法属性挂载到context；

3、request.js
设置request的get、set方法

4、response.js
get socket ()、 get header()、 get status()、 set status ()、 get message()、 set message()、 get body()、 set body()、 get length()、 set length()、 vary(field)、redirect(url, alt)、 get lastModify()、 set lastModify()、 get etag()、 set etag()、 get(field)等等；

5、中间件
koa-compose： 可组合、尾递归以及纯函数
export compose方法
function compose (middleware) {
    return function (context, next) {
        let index = -1;
        return dispatch(0);
        function dispatch (i) {
            if (i <= index ) return Promise.reject(new Error('next() called multiple times');
            index  = i;
            let fm = middleware[i];
            if (i === middleware.length) fn = next;
            if (!fn) return Promise.resolve();
            try {
                return Promise.resolve(fn(context, function next () {
                    return dispatch(i + 1);
                }))
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }
}

koa2一切都是中间件！！！

6、session、cookie
app.keys = []                   // 给session加密的
const CONFIG = {
    key: 'koa:sess,                 // 默认值
    maxAge: 8640000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
}
app.use(session(config, app));

```
