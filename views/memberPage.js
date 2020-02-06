const render = function(data){
    console.log(data);
    return `

        <div id="welcomeText" class="columns"
            <div id="pleaseMove" class="column"
                <p>Welcome, ${data.firstName} ${data.lastName}!</p>
                <button type='button' class="color-change move" id='clockIn'>Clock In</button>
                <button type='button' class="color-change move" id='clockOut'>Clock Out</button>
            </div>
        </div>
        
        
    `
}

exports.render = render;