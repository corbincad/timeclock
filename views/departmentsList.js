const render = function(data){
    return `
    <option value="${data.id}">${data.departmentName}</option>
    `
};
exports.render = render;