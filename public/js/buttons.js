$(document).ready(function () {


    $('#settingsBtn').on('click', function(event){
        event.preventDefault();
        location.href = '/settings';
    })

    $('#addDepartment').on('click', function(event){
        event.preventDefault();
        location.href = '/settings/adddepartments';
    });

    $('#employeePage').on('click', function(event){
        event.preventDefault();
        location.href = '/settings/addemployees'
    })

    
    $('#pinCode').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            console.log($('#pinCode').val().trim());
        }
    });


    $('#depName').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            const newDep = {
                departmentName: $('#depName').val().trim()
            }

            function addDepartment(dep){
                $.post('/settings/adddepartments', dep, function(){
                    $('#depName').val('');
                    location.reload();
                })
            }

            addDepartment(newDep);
        }
    });

    $('#addEmployee').on('click', function(event) {
        event.preventDefault();

        var val = Math.floor(1000 + Math.random() * 9000);
        
        const newEmployee = {
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            email: $('#email').val().trim(),
            loginID: val,
            DepartmentId: $('#departmentList').val().trim()
        };
        
        console.log(newEmployee);
        function addEmployee (employee){
            $.post('/settings/addemployees', employee, function(){
                $('#firstName').val('');
                $('#lastName').val('');
                $('#email').val('');
            })
        };

        addEmployee(newEmployee);
    });
});



