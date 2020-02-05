const render = function(data){
    return `
        <div>${data.departmentName}</div>
        <div>${data.numEmployees}</div>
        <div>${data.departmentBudget}</div>
    `
};

exports.render = render;