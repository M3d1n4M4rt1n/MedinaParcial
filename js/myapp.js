const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES VERDADERAS */
const credenciales = {
    usuario: "Usuario",
    pass: "123456",
    conductor: "Conductor",
    passConductor: "654321"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario === credenciales.usuario) {
        if (valuePassword === credenciales.pass) {
            location.href = "dashboard.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta",
                icon: "error"
            });
        }
    } else if (valueUsuario === credenciales.conductor) {
        if (valuePassword === credenciales.passConductor) {
            location.href = "dashboard2.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta para el usuario 'Conductor'",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    // Eliminar la información de inicio de sesión del LocalStorage
    localStorage.removeItem('usuario');
    // Redirigir al usuario a la página de inicio de sesión
    location.href = "index.html";
});


