const db = require('../models');
const homePage = require('../views/layouts/homePage');
const settings = require('../views/settings');
const loginScreen = require('../views/timeStamp-login');
const departments = require('../views/departments');
const employees = require('../views/employee');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.send(homePage.render(loginScreen.render()));
    });

    app.get("/settings", function (req, res) {
        res.send(homePage.render(settings.render()));
    });

    app.get("/settings/departments", function(req, res) {
        res.send(homePage.render(departments.render()));
    });

    app.get("/settings/employees", function(req, res) {
        res.send(homePage.render(employees.render()));
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