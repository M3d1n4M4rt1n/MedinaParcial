document.addEventListener('DOMContentLoaded', function() {
    // Array de usuarios y sus viajes
    const usuarios = [
        { nombre: "Usuario 1", total: 100 },
        { nombre: "Usuario 2", total: 200 },
        { nombre: "Usuario 3", total: 150 },
        // Agrega más usuarios y sus montos totales aquí
    ];

    // Función para mostrar la lista de usuarios y montos totales
    function mostrarListaUsuarios() {
        const $listaUsuarios = document.getElementById('listaUsuarios');
        $listaUsuarios.innerHTML = ''; // Limpiar la lista

        usuarios.forEach(function(usuario) {
            const item = `
                <li class="collection-item">
                    <span class="title">${usuario.nombre}</span>
                    <p>Monto total: ${usuario.total}</p>
                </li>
            `;
            $listaUsuarios.insertAdjacentHTML('beforeend', item);
        });
    }

    // Mostrar la lista de usuarios al cargar la página
    mostrarListaUsuarios();
});
