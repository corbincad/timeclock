const render = function(data){
    return `
    <div>${data.firstName} ${data.lastName}</div>
    <div>${data.email}</div>
    <div>${data.loginID}</div>
    <div>${data.Department.departmentName}</div>
    <button class='deleteBtn' id='${data.id}'>delete</button>
    `
};

exports.render = render;