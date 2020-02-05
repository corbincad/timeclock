const render = function(data){
    return `


    <div id="namer">
        <div id="id-input">
            <div class="columns">
                
                    <input type="text" name="namername" placeholder="First Name" id="firstName">
                
                    <input type="text" placeholder="Last Name" id="lastName">
                
                    <input type="text" placeholder="Employee's Email" id="email">
            </div>
        </div>
    </div>
   
        <div class="columns">
            <div class="column">
                <input type="image" src="/logo/check.png" id="addEmployee" class="color-change">
            </div>
            
            <select id="departmentList">
                <option selected disabled>Choose Department</option>
                ${data}
            </select>

        </div>
    
    `
}

exports.render = render;