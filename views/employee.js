const render = function(data){
    return `
    <div id="namer">
            <div id="id-input">
            <input type="text" name="namername" placeholder="First Name" id="firstName">
            </div>

<input type="text" placeholder="Last Name" id="lastName">
<input type="text" placeholder="Employee's Email" id="email">
<select id="departmentList">
    <option selected disabled>Choose Department</option>
    ${data}
</select>
<button type="button" id="addEmployee">submit</button>
    `
}

exports.render = render;