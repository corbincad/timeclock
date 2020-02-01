const allDepartments = require('./department');

const render = departments => departments.map(i => allDepartments.render(i) + "<hr/>").join("");
exports.render = render;