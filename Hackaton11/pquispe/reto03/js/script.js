
class Tareas {
    constructor() {
        this.tareas = [];
        this.filter = 'all'
    };

    agregarTarea(tituloIngresado, descripcionIngresada, fechaIngresada) {
        const tarea = {
            id: Date.now(),
            titulo: tituloIngresado,
            descripcion: descripcionIngresada,
            fecha: fechaIngresada,
            completado: false,
            completadoFecha: null
        };

        this.tareas.push(tarea);
        this.renderTareas();
    };

    eliminarTarea(tareaId) {
        this.tareas = this.tareas.filter(tarea => tarea.id != tareaId);
        this.renderTareas();
    };

    estadoDeLaTarea(tareaId) {
        const tarea = this.tareas.find(tarea => tarea.id == tareaId);
        tarea.completado = !tarea.completado;
        tarea.completadoFecha = tarea.completado ? new Date() : null;
        this.renderTareas();
    };

    seleccionarFiler(filter) {
        this.filter = filter;
        this.renderTareas();
    };

    renderTareas() {
        const listaTareas = document.getElementById('listaTareas');
        listaTareas.innerHTML = "";


        let tareasFiltradas = [];

        switch (this.filter) {
            case 'completed':
                tareasFiltradas = this.tareas.filter(tarea => tarea.completado);
                break;
            case 'incomplete':
                tareasFiltradas = this.tareas.filter(tarea => !tarea.completado);
            default:
                tareasFiltradas = this.tareas;
        };



        tareasFiltradas.forEach(tarea => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = tarea.completado;
            checkbox.addEventListener("click", () => {
                this.estadoDeLaTarea(tarea.id);
            });

            const h3Titulo = document.createElement('h3');
            h3Titulo.textContent = tarea.titulo;

            const pDesctipcion = document.createElement('p');
            pDesctipcion.textContent = tarea.descripcion;

            const spanFecha = document.createElement('span');
            spanFecha.textContent = tarea.completado ? `Completada el: ${tarea.completadoFecha.toLocaleDateString()}` : `Fecha de vencimiento: ${tarea.fecha}`;

            const buttonEliminar = document.createElement('button');
            buttonEliminar.textContent = "X";
            buttonEliminar.addEventListener("click", () => {
                this.eliminarTarea(tarea.id);
            });


            const divInformacion = document.createElement('div');

            const articleContainer = document.createElement('article');

            divInformacion.appendChild(h3Titulo);
            divInformacion.appendChild(pDesctipcion);
            divInformacion.appendChild(spanFecha);

            articleContainer.appendChild(checkbox);
            articleContainer.appendChild(divInformacion);
            articleContainer.appendChild(buttonEliminar);

            listaTareas.appendChild(articleContainer);
        });
    };
};



const tareaNueva = new Tareas();

const formTarea = document.getElementById('formTarea');

formTarea.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    const tituloIngresado = title.value.trim();
    const descripcionIngresada = description.value.trim();
    const fechaIngresada = date.value;

    if (tituloIngresado != "" && fechaIngresada !== "") {
        tareaNueva.agregarTarea(tituloIngresado, descripcionIngresada, fechaIngresada);

        title.value = "";
        description.value = "";
        date.value = "";
    };
});



const filterButtons = document.querySelectorAll('.filterButtons');

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        tareaNueva.seleccionarFiler(filter);
    });
});
