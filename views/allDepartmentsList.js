const departmentLists = require('./departmentsList');

const render = allDepartmentsList => allDepartmentsList.map(i => departmentLists.render(i));
exports.render = render;