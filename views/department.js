const render = function(data){
    return `
        <div>${data.departmentName}</div>
        <div>${data.numEmployees}</div>
        <div>${data.budget}</div>
    `
};

exports.render = render;