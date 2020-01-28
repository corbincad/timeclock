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

    </body>
    </html>`
};

exports.render = render;