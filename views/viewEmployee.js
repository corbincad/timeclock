const render = function(data){
    return `

    <div class="columns">
    
        <div id="borderForData" class="column">
            <div>${data.firstName} ${data.lastName}</div>
        </div>

        <div id="borderForData" class="column">
            <div>${data.email}</div>
        </div>

        <div id="borderForData" class="column">
            <div>${data.loginID}</div>
        </div>

        <div id="borderForData" class="column">
            <div>${data.Department.departmentName}</div>
        </div>

        <input type="image" src="/logo/deleteIcon.png" class="color-change deleteBtn"  id='${data.id}'></input>

    </div>
    `
};

exports.render = render;