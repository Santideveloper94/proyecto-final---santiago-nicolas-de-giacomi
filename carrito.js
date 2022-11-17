//console.log de los vehiculos
let vehiculosJSON = [];
let dolarCompra;
//Agrego storage para carrito
let totalCarrito;
let contenedor = document.getElementById("vehiculosVenta");
let botonFinalizar = document.getElementById("botonFinalizar");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

(carrito.length != 0) && miTabla();
obtenerDolar();

function miTabla(){
    for(const vehiculo of carrito){
        document.getElementById("tablaBody"). innerHTML += `
        <tr>
        <td>${vehiculo.id}</td>
        <td>${vehiculo.marca}</td>
        <td>${vehiculo.modelo}</td>
        <td>${vehiculo.precio}</td>
        <td>${vehiculo.color}</td>
        <td>${vehiculo.anio}</td>
        <td><button class="btn btn-light" onclick="eliminar(event)"</button></td>
        </tr>
        `;
    }
    totalCarrito = carrito.reduce((acumulador,vehiculo) => acumulador + vehiculo.precio,0);
    let total = document.getElementById("total");
    total.innerText = "Total a pagar $= " + totalCarrito;
}

function renderizarVehiculos(){
    for(const vehiculo of vehiculosJSON){
        contenedor.innerHTML += `
        <div class="card col-sm-2">
        <img src= "${vehiculo.imagen}" class="card-img-top" alt= "${vehiculo.anio}">
        <div class= "card-body">
        <h5 class="card-title">${vehiculo.marca} ${vehiculo.modelo}</h5>
        <p class= "card-text">${vehiculo.color}</p>
        <p class= "card-text">${vehiculo.id}</p>
        <p class= "card-text">U$D
        ${vehiculo.precio/dolarCompra.toFixed(2)}</p>
        <button id="btn ${vehiculo.id}" class="btn btn-primary">Comprar</button>
        </div>
        `;
    }
}
//eventos
vehiculosJSON.forEach(vehiculo => {
    document.getElementById(`btn${vehiculo.id}`).addEventListener("click", function(){
        agregarAlCarrito(vehiculo);
    })
})

function agregarAlCarrito(vehiculoComprado){
    carrito.push(vehiculoComprado);
    console.table(carrito);
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
totalCarrito = carrito.reduce((acumulador,vehiculo) => acumulador + vehiculo.precio,0 );
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a pagar $: " + totalCarrito;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
//eliminar vehiculos del carrito
function eliminar(ev){
    console.log(ev);
    let fila = ev.target.parentElement;
    console.log(fila);
    let id= fila.children[0].innerText;
    console.log(id);
    let indice = carrito.findIndex(producto => producto.id == id);
    console.log(indice);
    //remover los productos del carrito
    carrito.splice(indice,1);
    console.table(carrito);
    //remueve la fila de la tabla
    File.remove();
    //recalcula el total
    let totalAcumulado = carrito.reduce((acumulador, vehiculo) => acumulador + vehiculo.precio,0);
    total.innerText = "Total a pagar $: " +totalAcumulado;

    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//obtiene valor del dolar
function obtenerDolar(){
    const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
    .then(respuesta => respuesta.JSON())
    .then(cotizaciones => {
        const dolarBlue = cotizaciones.blue;
        console.log(dolarBlue);
        document.getElementById("api_dolar").innerHTML += `
        <p>Dolar compra: $ ${dolarBlue.value_buy} Dolar venta: $ ${dolarBlue.value_buy}</p>
        `;
        dolarCompra = dolarBlue.value_buy;
        obtenerJSON();
    })
}
//getJson de vehiculos.json
async function obtenerJSON(){
    const URLJSON = "vehiculos.json"
    const resp = await fetch (URLJSON);
    const data = await resp.json();
    vehiculosJSON = data;
    renderizarVehiculos();
}
//finalizar la compra
botonFinalizar.onclick = () => {
    if(carrito.length ==0){
        Swal.fire({
            icon: 'error',
            title: 'El carro esta vacio',
            text: 'Necesita compra algun vehiculo!!',
            footer: '<a href="">Cual es el problema?</a>'
            })    
    }
}