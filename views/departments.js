const render = function(data){
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="temporary.css">
    <title>Document</title>
</head>
<body>

    <button id="deparmentsBtn" class="color-change">DEPARTMENTS</button>

    <button id="reportsBtn" class="color-change">REPORTS</button>
   
</body>
</html>
    
    `
}

exports.render = render;