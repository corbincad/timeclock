const render = function(){
    return `
    <section id="containerForSettings" class="container">
        <div id="columnsForSettings" class="columns">
            <button type='button' class="color-change" id='addDepartment'>add department</button>
            <button type="button" class="color-change" id='employeePage'>add employee</button>
            
        </div>
        <div class="columns">
<<<<<<< HEAD
            <button type="button" class="color-change" id='deleteEmployee'>delete employee</button>
            <button type="button" class="color-change" id='viewEmployees'>view all employees</button>
=======
            <button type="button" id='viewEmployees'>view all employees</button>
>>>>>>> 8a1b00414715f5d7b950f1e0ca588791de0a65bf
        </div>
    </section>
    `
    
}

exports.render = render;