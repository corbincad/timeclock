const render = function(){
    return `
    <div id="containerForSettings" class="columns">

        <div id="columnsForSettings" class="column">
            <button type='button' class="color-change" id='addDepartment'>Add Department</button>
            <button type="button" class="color-change" id='employeePage'>Add Employee</button>
            <button type="button" class="color-change" id='viewEmployees'>View All Employees</button>
        </div>

    </div>
    `
    
}

exports.render = render;