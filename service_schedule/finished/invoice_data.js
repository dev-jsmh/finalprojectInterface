

let service_invoce_data = document.getElementById("service-invoce-data");
service_invoce_data.addEventListener("click", function (e) {
    e.preventDefault();
});

function addOne(boton, field) {
    let boton1 = document.getElementById(boton);
    let container = document.getElementById(field);

    boton1.addEventListener("click", fuction(){
        container
    });

    console.log(container.value);


};

addOne("addOne", "product_quantity");

