var input = document.getElementById("id-input");

input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){

        event.preventDefault();
        console.log(input.value);
    }
})