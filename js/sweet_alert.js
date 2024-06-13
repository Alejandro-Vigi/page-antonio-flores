// sweet_alert.js

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#sendForm').addEventListener('click', function(event) {
      event.preventDefault(); // Previene el envío estándar del formulario
  
      const myForm = document.querySelector('form[name="contact"]');
      const formData = new FormData(myForm);
  
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: '¡Gracias!',
            text: 'Tu mensaje ha sido enviado correctamente.',
            confirmButtonText: 'OK',
            customClass: {
                container: 'swal-contenedor', // Clase para personalizar el contenedor de la alerta
                popup: 'swal-popup-contenedor' // Clase para personalizar la apariencia de la alerta
              }
          });
  
          myForm.reset();
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo en un par de minutos.',
            confirmButtonText: 'OK',
            customClass: {
                container: 'swal-contenedor', // Clase para personalizar el contenedor de la alerta
                popup: 'swal-popup-contenedor' // Clase para personalizar la apariencia de la alerta
              }
          });
        });
    });
  });
  