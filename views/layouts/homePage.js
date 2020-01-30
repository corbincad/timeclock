const render = function (data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/style.css">
        <title>Time Clock</title>
    </head>
    <body>

        <button id="home" type="button"></button>

        <button id="settings" type="button"></button>

        <div id="mainContent">
        ${data}
        </div>

        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
    <script src="js/buttons.js"></script>
    </body>
    </html>`
};

exports.render = render;