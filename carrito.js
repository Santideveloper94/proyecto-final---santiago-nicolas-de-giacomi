//Para crear el carrito previamente creo la constante carrito (es constante asi puede ser reutilizada en cualquier momento dentro del codigo), es un array vacio, por eso los corchetes sin contenido dentro.
const carrito = [];
//Creo una funcion para renderizar y luego recorro el array de objetos con un for of. En primer termino llame del HTML al JS al id "vehiculosVentas" dandole el nombre a la variable de contenedor.
let contenedor = document.getElementById("vehiculosVenta");
function renderizarVehiculos(){
    for(const vehiculo of vehiculosEnVenta){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src="${vehiculo.imagen}" class="card-img-top" alt="${vehiculo.anio}">
                <div class="card-body">
                    <h5 class="card-title">${vehiculo.marca} ${vehiculo.modelo}</h5>
                    <p class="card-text">${vehiculo.color}</p>
                    <p class="card-text">${vehiculo.id}</p>
                    <p class="card-text">$ ${vehiculo.precio}</p>
                    <button id="btn ${vehiculo.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        
        `;
    }
    vehiculosEnVenta.forEach((vehiculo)=>{
        document.getElementById(`btn ${vehiculo.id}`).addEventListener("click", function(){
            agregarAlCarrito(vehiculo);
        })
    } )
}
renderizarVehiculos();
//Creo funcion agregarAlCarrito para crear el carrito y luego pusheo los objetos con carrito.push. Traigo elementos del HTML con el uso del DOM a traves del getElementById.
function agregarAlCarrito(vehiculoAComprar){
    carrito.push(vehiculoAComprar);
    document.getElementById("tablaBody").innerHTML += `
    <tr>
        <td>${vehiculoAComprar.id}</td>
        <td>${vehiculoAComprar.marca}</td>
        <td>${vehiculoAComprar.modelo}</td>
        <td>$ ${vehiculoAComprar.precio}</td>
        <td>${vehiculoAComprar.color}</td>
        <td>${vehiculoAComprar.anio}</td>                  
    </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador, vehi)=> acumulador + vehi.precio,0);
    document.getElementById("Total").innerText = "Total a pagar $:" + totalCarrito;
    Swal.fire({
        title: 'Esta seguro que desea adquirir este vehiculo?',
        text: "Esta a un paso de finalizar su compra!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Deseo Comprar!'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Muchas Gracias!',
                'Estamos procesando su pedido.',
            )
            }
        })
}

