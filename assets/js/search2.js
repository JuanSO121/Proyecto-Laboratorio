$(document).ready(function() {
    // Escuchar el evento de clic en el botón de búsqueda
    $('.search-right .btn').on('click', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario
  
      // Obtener el valor del campo de búsqueda
      var searchTerm = $(this).siblings('input[type="text"]').val();
  
      // Realizar alguna acción con el término de búsqueda (por ejemplo, redirigir a una página de resultados)
      window.location.href = 'search-results.html?search=' + searchTerm;
    });
  });
  