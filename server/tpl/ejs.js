module.exports = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Koa Server HTML</title>
        <link rel="stylesheet" href="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <script src = "https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.bundle.js"></script>
        
        </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1>Hi <%= you %></h1>
                    <p>This <%= me %></p>
                </div>
                <div class="col-md-4">
                    <p>测试静态页面</p>
                </div>
            </div>
            
        </div>
    </body>
</html>
`