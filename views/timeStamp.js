const render = function(data){
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href=".../public/css/style.css">
        <title>Time Clock</title>
    </head>
    <body>
        
        <img id="logoImage" src=".../public/logo/c52acad2-ef47-4ffd-aae1-48ea333b3451_200x200.png" height="200">
    
        <div id="namer">
            <div id="id-input">
             <input type="text" name="namername" placeholder="ID #">
            </div>
            <div class="namer-controls">
            </div>
           </div>    
    
    </body>
    </html>
    
    `
}

exports.render = render;