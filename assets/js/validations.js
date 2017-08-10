var photo_url = ''; //save pictures
$(document).ready(function () {
    $("#btn-upload").click(handleFileSelect);//handleFileSelect, extract the files on input
    $('#sign-session').click(onLogin);//listener to button click
    $("#sign-session").click(saveToLocalStorage); //guarda a local storage
    getFromLocalStorage(); //obtener local storage
});

//This function save to local storage
function saveToLocalStorage() {
    if (typeof (Storage) !== "undefined") {//soporte del navegador
        if (photo_url != '') {//si la foto es diferente de vacìo
            localStorage.setItem('photo', photo_url);
        }
        if ($('#firstname').val() != '') {//si el nombre es diferente de vacío
            localStorage.setItem('firstname', $('#firstname').val());
        }
        if ($('#username').val() != '') {//si el valor es diferente de vacìo
            localStorage.setItem('username', $('#username').val());
        }
        if ($('#email').val() != '') {//si el valor es diferente de vacìo
            localStorage.setItem('email', $('#email').val());
        }
        if ($('#country').val() != '') {//si el valor es diferente de vacìo
            localStorage.setItem('country', $('#country').val());
        }
        alert('Datos actualizados');

    } else {
        //No hay soporte de navegador
        console.log('Sorry there is not support for local storage.')
    }
}

function getFromLocalStorage() {
    console.log('getting info for: ' + localStorage.getItem('firstname'));
    $('#photo').attr('src', localStorage.getItem('photo'));
    $('#firstname').val(localStorage.getItem('firstname'));
    $('#username').val(localStorage.getItem('username'));
    $('#email').val(localStorage.getItem('email'));
    $('#country').val(localStorage.getItem('country'));
}

//This function validate the name and email and put a red border in case of error
function validateForm() {
    var valid = true;
    if (!(/^([a-zñáéíóú]{2,13})+$/.test($("#firstname").val()))) {
        $("#firstname").css("border", "1px solid red");
        alert('El nombre debe ser válido');
        valid = false;
    }
    if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($('#email').val()))) {
        $("#email").css("border", "1px solid red");
        alert('Error en el email');
        valid = false;
    }
    return valid;
}
// If validations are true, then go to movies.html and save it into 
function onLogin() {
    if (validateForm()) { //If validate form is True
        $("#sign-session").attr("href", "movies.html");
        saveToLocalStorage(); //guarda a local storage
    }
}
//Function to save images in local storage
function handleFileSelect() {
    var files = $('#files')[0].files; 
    // Gets the image selected on input and assign them to image. Get from https://www.html5rocks.com/en/tutorials/file/dndfiles/
    for (var i = 0, file; file = files[i]; i++) {
        // Si la imagen coincide, proseguir
        if (!file.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader(); //object js to process the image
        // when load image
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                $('#photo').attr('src', e.target.result);//assign the image to the function
                photo_url = e.target.result;
            };
        })(file);
        // lee la imagen como una URL
        reader.readAsDataURL(file);
    }
}
//This function validate the create user

