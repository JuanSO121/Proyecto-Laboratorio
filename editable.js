document.getElementById("autenticacion").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

  var totalPagar = shoe.cart.total();

  // Muestra el popup de pago exitoso con el valor total
  Swal.fire({
    title: "Pago exitoso",
    text: "¡Gracias por tu compra! Valor total pagado: " + "$" + totalPagar + ".000",
    icon: "success",
    confirmButtonText: "Aceptar"
  }).then(function () {
    // Redirige a index.html después de hacer clic en "Aceptar"
    window.location.href = "index.html";
  });

  // Restablece los campos del formulario
  this.reset();
});