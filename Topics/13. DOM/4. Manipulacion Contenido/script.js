let cantidad = 0; 

const template = document.getElementById("TaskTemplate");
const btnAgregar = document.getElementById("Agregar");
const tasksContainer = document.getElementById("TasksContainer");

btnAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    const clone = template.content.cloneNode(true);
    const input = clone.querySelector("input");
    cantidad++;

    input.id = `Task${cantidad}`;
    input.value = `Tarea ${cantidad}`;

    // Clonamos y metemos en un div para asegurarnos de mantener la referencia
    const wrapper = document.createElement("div");
    wrapper.appendChild(clone);
    tasksContainer.appendChild(wrapper);

    // Ahora podemos buscar el botón dentro del wrapper
    const btnEliminar = wrapper.querySelector(".Terminar");

    btnEliminar.addEventListener("click", () => {
        wrapper.remove();
    });

    const btnEditar = wrapper.querySelector(".Editar");
    const inputEditable = wrapper.querySelector("input");
    inputEditable.disabled = false;
    btnEditar.addEventListener("click", () => {
        if (inputEditable.disabled) {
            inputEditable.disabled = false;
            btnEditar.textContent = "Guardar";
            inputEditable.focus();
        } else {
            inputEditable.disabled = true;
            btnEditar.textContent = "Editar";
        }
    });
}

