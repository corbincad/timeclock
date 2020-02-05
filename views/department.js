const render = function(data){
    return `

        <div class="columns">
            
            <div id="borderForData" class="column">
                <div>${data.departmentName}</div>
            </div>
        
            <div id="borderForData" class="column">
                <div>${data.numEmployees}</div>
            </div>
        

            <div id="borderForData" class="column">
                <div>${data.budget}</div>
            </div>

        </div>
        
    `
};

exports.render = render;