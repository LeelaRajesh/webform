function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#inputfile').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function numberValidation() {
    var numb = document.getElementById("mobile").value;
    if(isNaN(numb) || (numb.length !=10)){
        document.getElementById('mobileerror').innerText = "Please enter a valid ten digit number";
    }
    else{
        document.getElementById('mobileerror').innerText = null;
    }
}