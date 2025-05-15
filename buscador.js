document.addEventListener("DOMContentLoaded", function () {
    const inputBuscador = document.getElementById("buscador");
    const botonBuscar = document.getElementById("boton-buscar");
    const productos = document.querySelectorAll(".item");

    
    const rutas = {
        "grafica" : "grafica.html",
        "contactos" : "/Belcam/componentes/cardteam.html",
        "camisetas": "/Belcam/componentes/camisetas.html",
        "gorras": "/Belcam/componentes/gorras.html",
        "zapatos": "/Belcam/componentes/zapatos.html",
        "conjuntos": "/Belcam/componentes/conjuntos.html",
        "bolsos": "/Belcam/componentes/bolsos.html"
    };

    function buscarProductos() {
        const texto = inputBuscador.value.trim().toLowerCase();

        
        if (rutas[texto]) {
            window.location.href = rutas[texto];
            return;
        }

        let hayCoincidencias = false;

        productos.forEach(producto => {
            const nombre = producto.querySelector("h2, h3").textContent.toLowerCase();
            const categoria = producto.dataset.categoria.toLowerCase();

            if (nombre.includes(texto) || categoria.includes(texto)) {
                producto.style.display = "block";
                hayCoincidencias = true;
            } else {
                producto.style.display = "none";
            }
        });

        if (!hayCoincidencias && texto !== "") {
            alert("No se encontraron resultados para: " + texto);
        }

        if (texto === "") {
           
            productos.forEach(p => p.style.display = "block");
        }
    }

    botonBuscar.addEventListener("click", buscarProductos);
    inputBuscador.addEventListener("keypress", function (e) {
        if (e.key === "Enter") buscarProductos();
    });

    
});

