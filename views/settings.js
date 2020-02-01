const render = function(){
    return `
    <section class="hero is-fullheight">
        <div class="columns">
            <button type='button' id='addDepartment'>add department</button>
            <button type="button" id='employeePage'>add employee</button>
        </div>
        <div class="columns">
            <button type="button" id='deleteEmployee'>delete employee</button>
            <button type="button" id='viewEmployees'>view all employees</button>
        </div>
    </section>
    `
    
}

exports.render = render;