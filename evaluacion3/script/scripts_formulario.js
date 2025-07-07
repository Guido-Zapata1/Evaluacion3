$(document).ready(function () {
    $("#boton_Enviar").on("click", validarFormulario);
    $("#inputNombre").on("change", validarNombre);
    $("#inputusuario").on("change", validarusuario);
    $("#inputEmail").on("change", validarEmail);
    $("#inputFechaDeIngreso").on("change", validarFecha);;
});
function validarNombre() {
    const input = $("#inputNombre");
    const valor = input.val().trim();


    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (valor === "" || !soloLetras.test(valor)) {
        input.addClass("is-invalid");
        return false;
    } else {
        input.removeClass("is-invalid");
        return true;
    }
}
function validarusuario() {
    const input = $("#inputusuario")
    const valor = input.val().trim();

    if (valor === "") {
        input.addClass("is-invalid");
    } else {
        input.removeClass("is-invalid");
        return true;
    }
}
function validarEmail() {
    const emailInput = $("#inputEmail");
    const email = emailInput.val().trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
        emailInput.addClass("is-invalid");
        return false;
    } else {
        emailInput.removeClass("is-invalid");
        return true;
    }
}

function validarFecha() {
    const input = $("#inputFechaDeIngreso");
    const valor = input.val();

    if (valor === "") {
        input.addClass("is-invalid");
        return false;
    } else {
        input.removeClass("is-invalid");
        return true;
    }
}


$("#boton_Cancelar").on("click", function () {
    $("input").val("").removeClass("is-invalid");
});

function validarFormulario(event) {
    event.preventDefault();

    const nombreEsValido = validarNombre();
    const usuarioesvalido = validarusuario();
    const emailValido = validarEmail();
    const fechaesvalida = validarFecha();

    if (nombreEsValido && usuarioesvalido && emailValido && fechaesvalida) {
        alert("Formulario enviado correctamente");
    }
}



