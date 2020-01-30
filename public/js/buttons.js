$(document).ready(function () {

    $('#pinCode').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            console.log($('#pinCode').val().trim())
        }
    })


 

});

function mouseDown() {
    console.log('BUTTONS ARE CLICKABLE');
}




