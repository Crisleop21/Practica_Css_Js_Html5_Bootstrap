$( '.toggle').click(function(){
    $('.form-register').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'

    })
});

const usuario = document.getElementById("nombres");
const password = document.getElementById("password");

function iniciarSesion(){
    console.log("Usuario: " + usuario.value);
    console.log("Contraseña: " + password.value);
    alert("Se ha iniciado la sesión");
}