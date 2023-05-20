document.addEventListener("DOMContentLoaded", function() {
    var taskForm = document.getElementById('taskForm');

    taskForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe

      // Obtener los valores de los campos de entrada
      var datepickerValue = document.getElementById('datepicker').value;
      var descriptionValue = document.getElementById('description').value;

      // Hacer algo con los valores, por ejemplo, imprimirlos en la consola
      console.log("Fecha:", datepickerValue);
      console.log("Descripción:", descriptionValue);

      // Limpiar los campos de entrada
      document.getElementById('datepicker').value = '';
      document.getElementById('description').value = '';
    });
  });