document.addEventListener('DOMContentLoaded', function() {
const viajes = [
    {
        "id": "1",
        "duracion": "2 horas",
        "fecha": "2024-04-24",
        "origen": "Lima",
        "destino": "Cusco",
        "conductor": "Juan Pérez"
    },
    {
        "id": "2",
        "duracion": "3 horas",
        "fecha": "2024-04-23",
        "origen": "Arequipa",
        "destino": "Lima",
        "conductor": "María Rodríguez"
    },
    {
        "id": "3",
        "duracion": "4 horas",
        "fecha": "2024-04-22",
        "origen": "Trujillo",
        "destino": "Chiclayo",
        "conductor": "Pedro Gómez"
    },
    {
        "id": "4",
        "duracion": "2.5 horas",
        "fecha": "2024-04-21",
        "origen": "Piura",
        "destino": "Tumbes",
        "conductor": "Ana Martínez"
    },
    {
        "id": "5",
        "duracion": "3 horas",
        "fecha": "2024-04-20",
        "origen": "Cajamarca",
        "destino": "Chachapoyas",
        "conductor": "Carlos González"
    },
    {
        "id": "6",
        "duracion": "5 horas",
        "fecha": "2024-04-19",
        "origen": "Iquitos",
        "destino": "Tarapoto",
        "conductor": "Luis Pérez"
    },
    {
        "id": "7",
        "duracion": "6 horas",
        "fecha": "2024-04-18",
        "origen": "Pucallpa",
        "destino": "Huanuco",
        "conductor": "Elena García"
    },
    {
        "id": "8",
        "duracion": "4.5 horas",
        "fecha": "2024-04-17",
        "origen": "Huancayo",
        "destino": "Arequipa",
        "conductor": "Fernando Rodríguez"
    },
    {
        "id": "9",
        "duracion": "3.5 horas",
        "fecha": "2024-04-16",
        "origen": "Tacna",
        "destino": "Moquegua",
        "conductor": "Jorge Sánchez"
    },
    {
        "id": "10",
        "duracion": "2 horas",
        "fecha": "2024-04-15",
        "origen": "Ica",
        "destino": "Nazca",
        "conductor": "Mónica López"
    }
];

const $misViajes = document.getElementById("misViajes");

function mostrarViajes(viajes) {
    viajes.forEach((viaje) => {
        const template = `
            <div class="viaje-item">
                <img src="images/sample-1.jpg" alt="Imagen de referencia del viaje">
                <div class="viaje-info">
                    <p>Duración: ${viaje.duracion}</p>
                    <p>Fecha: ${viaje.fecha}</p>
                    <p>Origen: ${viaje.origen}</p>
                    <p>Destino: ${viaje.destino}</p>
                    <p>Conductor: ${viaje.conductor}</p>
                </div>
            </div>
        `;
        $misViajes.insertAdjacentHTML('beforeend', template);
    });
}

mostrarViajes(viajes.slice(0, 4));

$("#verMasButton").on("click", function() {
    mostrarViajes(viajes);
    $(this).hide();
});
});