const db = require('./models');
const express = require("express");

// const homepage = require('./views/layouts/homepage');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

require('./routes/api-routes')(app);

db.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });

});
