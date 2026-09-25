let cantidadCarrito = 0;let totalCarrito = 0;
const botonesAgregar = document.querySelectorAll(".agregar-carrito");
const contadorCarrito = document.getElementById("contador-carrito");
const cantidadPedido = document.getElementById("cantidad-pedido");
const totalPedido = document.getElementById("total-pedido");
const botonConfirmar = document.getElementById("confirmar-pedido");

botonesAgregar.forEach(function(boton) {
 boton.addEventListener("click", function() {
  const nombreProducto = boton.dataset.nombre;  const precioProducto = Number(boton.dataset.precio);
  cantidadCarrito++;
  totalCarrito += precioProducto;
  contadorCarrito.textContent = cantidadCarrito;
  cantidadPedido.textContent = cantidadCarrito;
  totalPedido.textContent = totalCarrito.toLocaleString("es-CO");
  alert(   " " + nombreProducto +   " fue agregado a tu pedido."  );
 });
});

botonConfirmar.addEventListener("click", function() {
if (cantidadCarrito === 0) {
alert(" Tu pedido está vacío. Agrega un producto primero.");
} else {
alert(" ¡Gracias por tu pedido!\n\n" +"Productos: " + cantidadCarrito +"\nTotal: $" +totalCarrito.toLocaleString("es-CO"));
}
});