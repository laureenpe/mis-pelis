
$(document).ready(function () {
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
        if ($('#username').val() != ''){//si el valor es diferente de vacìo
            localStorage.setItem('username', $('#username').val());
        }
        if ($('#email').val() != ''){//si el valor es diferente de vacìo
            localStorage.setItem('email', $('#email').val());
        }
        if ($('#country').val() != ''){//si el valor es diferente de vacìo
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

//This function validate the login 
//This function validate the create user