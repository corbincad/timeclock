const render = function(data){
    return `
    <input type="text" placeholder="First Name" id="firstName">
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