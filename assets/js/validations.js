
$(document).ready(function () {
    $('#sign-session').click(onLogin);//listener to button click
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
function onLogin() {
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
//This function validate the create user

