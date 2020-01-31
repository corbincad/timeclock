const render = function (data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!--bulma-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        <link rel="stylesheet" href="/css/style.css">
        <!--google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Kanit:300&display=swap" rel="stylesheet">
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        <title>Time Clock</title>
    </head>
    <body>
    
    <section class="hero is-fullheight">

    <div class="columns">

        <div class="column">
            <button onMouseDown="mouseDown()" id="reportsBtn" class="color-change">REPORTS</button>
        </div>

        <div class="column">
            <button onMouseDown="mouseDown()" id="settingsBtn" class="color-change">SETTINGS</button>
        </div>

    </div>

    <div class="columns">

        <div class="column" id="mainContent">
            ${data}
        </div>

    </div>

    </section>

    

</div>

        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
<<<<<<< HEAD
        crossorigin="anonymous">
        </script>

        <script src="js/buttons.js"></script>
    
=======
        crossorigin="anonymous"></script>
    <script src="/js/buttons.js"></script>
>>>>>>> 2308df70e75fb99b039f212de5826efbb7d8fca5
    </body>
    </html>`
};

exports.render = render;