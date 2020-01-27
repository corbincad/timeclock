db.Employee.create(req.body).then(function(data){
    res.json(data);
});

db.Department.create(req.body).then(function(data){
    res.json(data);
});

