$(document).ready(function () {

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
                $.post('/settings/departments', dep, function(){
                    $('#depName').val('');
                })
            }

            addDepartment(newDep);
        }
    });

    $('#addEmployee').on('click', function(event) {
        event.preventDefault();

        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);
        
        const newEmployee = {
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            email: $('#email').val().trim()
            // loginID: 
        };
        
        console.log(newEmployee);
        function addEmployee (employee){
            $.post('/settings/employees', employee, function(){
                $('#firstName').val('');
                $('#lastName').val('');
                $('#email').val('');
            })
        };

        addEmployee(newEmployee);
    });

    $('#settingsBtn').on('click', function(event){

    })
});



