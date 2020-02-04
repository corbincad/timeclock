const render = function(){
    return `
    <div id="containerForSettings" class="container">

        <div id="columnsForSettings" class="columns">
            <button type='button' class="color-change" id='addDepartment'>add department</button>
            <button type="button" class="color-change" id='employeePage'>add employee</button>
            <button type="button" class="color-change" id='viewEmployees'>view all employees</button>
        </div>

    </div>
    `
    
}

exports.render = render;