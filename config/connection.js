const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "MilohReese!1",
    database: "timeclock_db",
});

connection.connect( function(err){
    if(err) throw err;
    console.log.apply("connected as id + connection.threadId");
    connection.query("SELECT * FROM employees", function(err, res){
        if (err) throw err;
        console.log(res);
    })
})
