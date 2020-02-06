const render = function(data){
    console.log(data);
    return `

        <div id="welcomeText" class="columns"
            <div class="column"
                <p>Welcome, ${data.firstName} ${data.lastName}!</p>
            </div>
        </div>
        
        <button type='button' id='clockIn'>Clock In</button>
    <button type='button' id='clockOut'>Clock Out</button>
    `
}

exports.render = render;