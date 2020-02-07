const db = require('../models');
const homePage = require('../views/layouts/homePage');
const addDepartment = require('../views/layouts/addDepartment');
const viewAllEmployees = require('../views/layouts/viewEmployees');

const settings = require('../views/settings');
const loginScreen = require('../views/timeStamp-login');
const allDepartments = require('../views/allDepartments');
const departmentsList = require('../views/allDepartmentsList')
const employees = require('../views/employee');
const allEmployees = require('../views/viewAllEmployees');
const memberPage = require('../views/memberPage');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.send(homePage.render(loginScreen.render()));
    });

    app.get("/settings", function (req, res) {
        res.send(homePage.render(settings.render()));
    });

    app.get("/settings/adddepartments", function (req, res) {
        db.Department.findAll({
            raw: true
        }).then(function (data) {
            res.send(addDepartment.render(allDepartments.render(data)));
        })
    });

    app.get("/settings/addemployees", function (req, res) {
        db.Department.findAll({
            raw: true
        }).then(function (data) {
            res.send(homePage.render(employees.render(departmentsList.render(data))));
        })
    });

    app.get("/settings/viewemployees", function (req, res) {
        db.Employee.findAll({
            include: [{
                all: true
            }]
        }).then(function (data) {
            res.send(viewAllEmployees.render(allEmployees.render(data)));
        })
    });

    app.get("/home", function (req, res) {
        db.Employee.findOne(
            {
                raw: true,
                where: {
                    loginID: req.query.loginID
                }
            }).then(function (data) {
                res.send(homePage.render(memberPage.render(data)));
            })
    });

    app.get("/settings/viewemployees/searched", function (req, res) {
        db.Employee.findAll({
            include: [{
                all: true
            }],
            where: {
                firstName: req.query.firstName,
                lastName: req.query.lastName
            }
        }).then(function (data) {
            console.log(data[0].firstName);
            res.send(viewAllEmployees.render(allEmployees.render(data)));
        })
    })

    app.post('/home', function(req, res) {
        db.Clockin.create(req.body).then(function(data){
            res.json(data);
        })
    });

    app.post('/home', function(req, res) {
        db.Clockout.create(req.body).then(function(data){
            res.json(data);
        })
    })

    app.post("/settings/adddepartments", function (req, res) {
        db.Department.create(req.body).then(function (data) {
            res.json(data)
        });
    });

    app.post("/settings/addemployees", function (req, res) {
        db.Employee.create(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.delete("/settings/viewemployees", function (req, res) {
        db.Employee.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (data) {
            res.json(data);
        })
    });
};