const render = function(){
    return `
    <img id="logoImage" src="logo/logo.png" height="200">

    <div class="columns">
    
        <div id="namer">
            <div id="id-input">
                <input type="text" name="namername" placeholder="ID #" id="pinCode">
            </div>

            <div class="namer-controls">

            </div>
        </div> 
    </div>
    `
}

exports.render = render;