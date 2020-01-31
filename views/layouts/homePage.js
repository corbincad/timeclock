const render = function (data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link type="text/css" rel="stylesheet" href="/css/style.css">
        <!--google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Kanit:300&display=swap" rel="stylesheet">
        <title>Time Clock</title>
    </head>
    <body>

        <button onMouseDown="mouseDown()" id="deparmentsBtn" class="color-change">DEPARTMENTS</button>

        <button onMouseDown="mouseDown()" id="reportsBtn" class="color-change">REPORTS</button>

        <div id="mainContent">
        ${data}
        </div>

        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
    <script src="/js/buttons.js"></script>
    </body>
    </html>`
};

exports.render = render;