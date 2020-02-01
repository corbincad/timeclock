const db = require('../models');
const homePage = require('../views/layouts/homePage');
const addDepartment = require('../views/layouts/addDepartment')
const settings = require('../views/settings');
const loginScreen = require('../views/timeStamp-login');
const allDepartments = require('../views/allDepartments');
const departmentsList = require('../views/allDepartmentsList')
const employees = require('../views/employee');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.send(homePage.render(loginScreen.render()));
    });

    app.get("/settings", function (req, res) {
        res.send(homePage.render(settings.render()));
    });

    app.get("/settings/adddepartments", function(req, res) {
        db.Department.findAll({
            raw: true
        }).then(function(data){
            res.send(addDepartment.render(allDepartments.render(data)));
        })
    });

    app.get("/settings/addemployees", function(req, res) {
        db.Department.findAll({
            raw: true
        }).then(function(data){
            res.send(homePage.render(employees.render(departmentsList.render(data))));
        })
    });

    app.post("/settings/adddepartments", function(req, res) {
        db.Department.create(req.body).then(function(data) {
            res.json(data)
        });
    });

    app.post("/settings/addemployees", function(req, res) {
        db.Employee.create(req.body).then(function(data){
            res.json(data);
        })
    });
    // app.post("/", function (req, res) {
    //     db.burger.create(req.body).then(function (yonge) {
    //         res.json(yonge);
    //     })
    // });

    // app.put("/", function (req, res) {
    //     console.log(req.body);
    //     db.burger.update( 
    //         {
    //         devoured: true
    //         },
    //         {
    //             where: {
    //                 id: req.body.id
    //             }
    //         }).then(function (yonge) {
    //             res.json(yonge);
    //         });
    // });
};