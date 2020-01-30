$(document).ready(function () {

    $('#pinCode').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13) {
            console.log($('#pinCode').val().trim())
        }
    })


 

});

var click = false;
function mouseDown() {
    click = true;
    console.log('Button being clicked');
}


