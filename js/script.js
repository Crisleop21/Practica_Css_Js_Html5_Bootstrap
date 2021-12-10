$( '.toggle').click(function(){
    $('.form-register').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'

    })
});

const usuario = document.getElementById("Ingrese Usuario");
const password = document.getElementById("Ingrese Contraseña");

function iniciarSesion(){
    console.log("Usuario: " + usuario.value);
    console.log("Contraseña: " + password.value);
    alert("Se ha iniciado la sesión");
}