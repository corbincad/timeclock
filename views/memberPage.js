const render = function(data){
    return `

        <div id="welcomeText" class="columns"
            <div class="column"
                <p>Welcome, ${data.firstName} ${data.lastName}!</p>
            </div>
        </div>
        
    `
}

exports.render = render;