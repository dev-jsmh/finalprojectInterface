
Jhonatan Samuel Martinez Hernandez ficha 2675859
Analisis y Desarrollo de Software

En este documento se mencionan algunos de los muchso eventos de javascript que se encuentran presentes en mi proyecto de software.

Modulo clientes

botones de:

* Crear cliente -> escucha el evento "click" para abrir un modal de bootstrap para guardar la información del cliente

* Eliminar -> escucha el evento "click" y abre ventana de abvertencia para confirmar la acción que vamos a realizar

* Modificar información -> escucha el evento "click" para abrir un modal que permite modificar datos basicos del clientes


Modulo Agendacion de servicios

botones de:

* barra menu de opciones -> al escucha el evento "click" despliega menu de opciones

En el modulo para agendar servicios, mas precisamentes en a sección Agendaciones/servicios finalizados/facturar
se encuentra el boton facturar, que nos lleva a una vista para ingresar 
información del servicio prestado con fin de generar una factura

A su vez, se utiliza un modal que nos permite seleccionar los productos que usados trallendo 
una lista de ellos desde la base de datos. Estas haciones recargan la pagina pero con un script evitamos este comportamiento por defecto.
