// SELECCIÓN DE ELEMENTOS DEL DOM 

// creamos las constantes de los inputs del formulario usando. getElementById yamando su id
const entradaNombre = document.getElementById('entradaNombre');
const entradaCargo = document.getElementById('entradaCargo');
const entradaColor = document.getElementById('entradaColor');
const botonGenerar = document.getElementById('botonGenerar');

// tambien de los elementos de la tarjeta de vista previa
const tarjetaVistaPrevia = document.getElementById('tarjetaVistaPrevia');
const textoNombre = document.getElementById('textoNombre');
const textoCargo = document.getElementById('textoCargo');

// y el del contenedor de la galería
const contenedorGaleria = document.getElementById('contenedorGaleria');


// EVENTOS EN TIEMPO REAL (REQUERIMIENTOS)

// actualizamos de nombre al escribir
entradaNombre.addEventListener('input', () => {
        // si el input está vacío, ponemos un texto por defecto
        textoNombre.textContent = entradaNombre.value || "Tu Nombre";
});

// actualizamos de Cargo al escribir
entradaCargo.addEventListener('input', () => {
   // igual caso
        textoCargo.textContent = entradaCargo.value || "Tu Cargo";
});

// cambio de color favorito de fondo
entradaColor.addEventListener('input', () => {
        // aplicamos el valor magico del color directamente al estilo de la tarjeta
        tarjetaVistaPrevia.style.backgroundColor = entradaColor.value;
});


// FUNCIÓN DE GUARDADO (BOTÓN CREAR)

botonGenerar.addEventListener('click', () => {
        // validamos que los campos no estén vacios
        if (entradaNombre.value === "" || entradaCargo.value === "") {
                alert("Por favor, completa el nombre y el cargo."); //mandamos una alerta para que ingrese datos
                return; // usamos return para frenar el codigo
        }

        // duplicamos la tarjeta de vista previa (incluyendo el nombre, cargo y color)
        const nuevaTarjeta = tarjetaVistaPrevia.cloneNode(true);

        // quitamos el ID para que no se repita en el documento y añadimos clase de galería
        nuevaTarjeta.removeAttribute('id');
        nuevaTarjeta.classList.add('tarjeta-guardada');

        // Agregamos la tarjeta clonada al contenedor de la galería
        contenedorGaleria.appendChild(nuevaTarjeta);

        // --- LIMPIEZA DEL FORMULARIO ---
        entradaNombre.value = "";
        entradaCargo.value = "";
        entradaColor.value = "#4a90e2"; // Color inicial

        // Reseteamos también la vista previa visualmente
        textoNombre.textContent = "Tu Nombre";
        textoCargo.textContent = "Tu Cargo";
        tarjetaVistaPrevia.style.backgroundColor = "#4a90e2";
});