const employees = require('./viewEmployee');

const render = allEmployees => allEmployees.map(i => employees.render(i) + "<hr/>").join("");

exports.render = render;