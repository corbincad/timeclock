const render = function(data){
    return `
    <button type='button' id='addDepartment'>add department</button>
    <button type="button" id='employeePage'>add employee</button>
    <button type="button" id='deleteEmployee'>delete employee</button>
    <button type="button" id='viewEmployees'>view all employees</button>
    `
}

exports.render = render;