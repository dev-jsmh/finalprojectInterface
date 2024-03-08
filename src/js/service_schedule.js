
/**
<!-- Jhonatan Samuel Martinez Hernandez -->
<!-- Software analysis and development -->


 * en esta parte prevenimos que el formulario
 para ingresar los datos del servicio 
para la factura recarguen la pagina
 */
 
let invoce_data = document.getElementById("service-invoce-data");
invoce_data.addEventListener("click", function (event) {
    event.preventDefault();
});
/**
* el modal para seleccionar los producto usados recargue la pagina
 * 
 */
let modal_invoce_add_products = document.getElementById("modal_invoce_add_products");
modal_invoce_add_products.addEventListener("click", function (event) {
    event.preventDefault();
});


