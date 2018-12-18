module.exports = `
doctype html
html
    head
        meta(charset="utf-8")
        meta(name="viewport", content="width=device-width, initial-scale=1")
        title Koa Server HTML
        link(rel="stylesheet" href="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css")
        script( src = "https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js")
        script( src = "https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.bundle.js")
    body
        .container
            .row
                .col-md-8
                    h1 Hi #{you}
                    p This is #{me}
                .col-md-4
                    p 测试动态 PUG 模板引擎



`