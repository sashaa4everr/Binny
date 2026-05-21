// BOTÓN PARA IR A LOGIN

function irLogin(){

    window.location.href = "login.html";

}


// BOTÓN PARA VOLVER AL INICIO

function volverInicio(){

    window.location.href = "index.html";

}


// LOGIN TEMPORAL

function iniciarSesion(){

    // agarrar valores inputs

    let correo = document.getElementById("correo").value;

    let contraseña = document.getElementById("contraseña").value;


    // validación básica

    if(correo === "" || contraseña === ""){

        alert("Completa todos los campos");

    }

    else{

        alert("Inicio de sesión exitoso");

        // aquí luego puedes mandar al dashboard

        window.location.href = "index.html";

    }

}


// CREAR CUENTA TEMPORAL

function crearCuenta(){

    alert("Página de crear cuenta próximamente");

}