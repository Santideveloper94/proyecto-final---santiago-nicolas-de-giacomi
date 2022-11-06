const carrito = [];
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