const render = function(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!--SPECTRE CSS-->
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css">
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css">
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css">
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
            <button id="homeBtn" class="color-change">HOME</button>
        </div>

        <div class="column">
        <input type="image" src="/logo/gearCog2.png" id="settingsBtn" class="color-change">
        </div>

    </div>

    <div class="columns">

        <div class="column">
            <div id="namer">
                <div id="id-input">
                    <input type="text" name="namername" placeholder="Department Name" id="pinCode">
            </div>

        </div>

        <div class="column">
            <div id="namer">
                <div id="id-input">
                    <input type="text" name="departmentBudget" placeholder="Monthly Budget" id="depBudget" />
                        ${data}
                </div>
            </div>
        </div>

    </div>

    </section>

    

</div>

        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous">
        </script>

        <script src="/js/buttons.js"></script>
    
    </body>
    </html>
    `
};
exports.render = render;