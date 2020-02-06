$(document).ready(function () {

    $('#homeBtn').on('click', function (event) {
        event.preventDefault();
        location.href = '/';
    });

    $('#settingsBtn').on('click', function (event) {
        event.preventDefault();
        location.href = '/settings';
    })

    $('#addDepartment').on('click', function (event) {
        event.preventDefault();
        location.href = '/settings/adddepartments';
    });

    $('#employeePage').on('click', function (event) {
        event.preventDefault();
        location.href = '/settings/addemployees'
    });

    $('#viewEmployees').on('click', function (event) {
        event.preventDefault();
        location.href = '/settings/viewemployees'
    });


    $('#pinCode').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            const pin = {
                loginID: $('#pinCode').val().trim()
            }

            function loginwithID(p) {
                $.get('/home', p, function() {
                    location.href = '/home?loginID=' + $('#pinCode').val().trim();
                })
            }

            loginwithID(pin);
        }
    });

    $('#depBudget').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            const newDep = {
                departmentName: $('#depName').val().trim(),
                departmentBudget: $('#depBudget').val().trim()
            }

            function addDepartment(dep) {
                $.post('/settings/adddepartments', dep, function () {
                    $('#depName').val('');
                    $('#depBudget').val('')
                    location.reload();
                })
            }

            addDepartment(newDep);
        }
    });

    $('#addEmployee').on('click', function (event) {
        event.preventDefault();

        const val = Math.floor(1000 + Math.random() * 9000);

        const newEmployee = {
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            email: $('#email').val().trim(),
            loginID: val,
            DepartmentId: $('#departmentList').val().trim()
        };

        console.log(newEmployee);
        function addEmployee(employee) {
            $.post('/settings/addemployees', employee, function () {
                $('#firstName').val('');
                $('#lastName').val('');
                $('#email').val('');
                $('#departmentList').val('');
            })
        };

        addEmployee(newEmployee);
    });

    $('#searchEmployees').keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            const unsplitEmployee = $('#searchEmployees').val();
            const splitEmployee = unsplitEmployee.trim().split(" ");

            const searchParams = {
                firstName: splitEmployee[0],
                lastName: splitEmployee[1]
            }

            function searchForEmployee(searchInfo) {
                $.get('/settings/viewemployees/searched', searchInfo, function(){
                    location.href = '/settings/viewemployees/searched?firstName=' + splitEmployee[0] + '&lastName=' + splitEmployee[1];
                })
            }

            searchForEmployee(searchParams);

        }
    });

    $('.deleteBtn').on('click', function (event) {
        event.preventDefault();

        const idDestroy = {
            id: parseInt(event.target.id)
        }

        function deleteEmployee(employee) {
            $.ajax({
                method: 'DELETE',
                url: '/settings/viewemployees',
                data: employee
            }).then(function () {
                location.reload();
            })
        };

        deleteEmployee(idDestroy);
    })
});



