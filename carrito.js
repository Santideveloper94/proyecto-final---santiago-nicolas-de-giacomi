
    //console.log(productos);
    let vehiculosJSON=[];
    let dolarCompra;
    //Agregado storage carrito
    let totalCarrito;
    let contenedor = document.getElementById("vehiculosVenta");
    let botonFinalizar = document.getElementById("finalizar");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    (carrito.length != 0)&&miTabla();
    obtenerDolar();


    const DateTime = luxon.DateTime;
    const ahora = DateTime.now();

    function miTabla(){
        for(const vehiculo of carrito){
            document.getElementById("tablaBody").innerHTML += `
            <tr>
                <<td>${vehiculo.id}</td>
                <td>${vehiculo.marca}</td>
                <td>${vehiculo.modelo}</td>
                <td>$ ${vehiculo.precio}</td>
                <td>${vehiculo.color}</td>
                <td>${vehiculo.anio}</td> 
                <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
            </tr>
        `;
        }
        totalCarrito = carrito.reduce((acumulador,vehiculo)=> acumulador + vehiculo.precio,0);
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: "+totalCarrito;
    }

    function renderizarVehiculos(){
        for(const vehiculo of vehiculosJSON){
            contenedor.innerHTML += `
            <div class="card col-sm-2">
            <img src="${vehiculo.imagen}" class="card-img-top" alt="${vehiculo.anio}">
            <div class="card-body">
                <h5 class="card-title">${vehiculo.marca} ${vehiculo.modelo}</h5>
                <p class="card-text">${vehiculo.color}</p>
                <p class="card-text">${vehiculo.id}</p>
                <p class="card-text">U$D ${vehiculo.precio/dolarCompra.toFixed(2)}</p>
                <button id="btn ${vehiculo.id}" class="btn btn-primary">Comprar</button>
            </div>
        </div>
            `;
        }

        //EVENTOS
        vehiculosJSON.forEach(vehiculo => {
            //evento para cada boton
            document.getElementById(`btn${vehiculo.id}`).addEventListener("click",function(){
                agregarAlCarrito(vehiculo);
            });
        })
    }

    function agregarAlCarrito(vehiculoComprado){
        carrito.push(vehiculoComprado);
        console.table(carrito);
        Swal.fire({
            title: vehiculoComprado.marca,
            text: 'Agregado al carrito',
            imageUrl: vehiculoComprado.imagen,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: vehiculoComprado.modelo,
            showConfirmButton: false,
            timer: 1500
        })
        document.getElementById("tablaBody").innerHTML += `
        <>
        <td>${vehiculoComprado.id}</td>
        <td>${vehiculoComprado.marca}</td>
        <td>${vehiculoComprado.modelo}</td>
        <td>$ ${vehiculoComprado.precio}</td>
        <td>${vehiculoComprado.color}</td>
        <td>${vehiculoComprado.anio}</td>                
        <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
            </tr>
        `;
        totalCarrito = carrito.reduce((acumulador,vehiculo)=> acumulador + vehiculo.precio,0);
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: "+totalCarrito;
        //storage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    //Para eliminar prods del carro
    function eliminar(ev){
        console.log(ev);
        let fila = ev.target.parentElement.parentElement;
        console.log(fila);
        let id = fila.children[0].innerText;
        console.log(id);
        let indice = carrito.findIndex(vehiculo => vehiculo.id == id);
        console.log(indice)
        //remueve el producto del carro
        carrito.splice(indice,1);
        console.table(carrito);
        //remueve la fila de la tabla
        fila.remove();
        //recalcular el total
        let Acumulados = carrito.reduce((acumulador,vehiculo)=>acumulador+vehiculo.precio,0);
        total.innerText="Total a pagar $: "+Acumulados;
        //storage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    //Obtener valor dolar
    function obtenerDolar(){
        const URLDOLAR="https://api.bluelytics.com.ar/v2/latest";
        fetch(URLDOLAR)
            .then( respuesta => respuesta.json())
            .then( cotizaciones => {
                const dolarBlue = cotizaciones.blue;
                console.log(dolarBlue);
                document.getElementById("api_dolar").innerHTML+=`
                    <p>Dolar compra: $ ${dolarBlue.value_buy} Dolar venta: $ ${dolarBlue.value_sell}</p>
                `;
                dolarCompra=dolarBlue.value_buy;
                obtenerJSON();
            })
    }

    //GETJSON de vehiculos.json
    async function obtenerJSON() {
        const URLJSON="../vehiculos.json";
        const resp = await fetch(URLJSON);
        const data = await resp.json();
        productosJSON = data;
        //ya tengo el dolar y los productos, renderizo las cartas
        renderizarVehiculos();
    }

    //Cerrando al compra
    botonFinalizar.onclick = () => {
        if(carrito.length==0){
            Swal.fire({
                title: 'El carro está vacío',
                text: 'Compre algun vehiculo',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            carrito = [];
            document.getElementById("tablabody").innerHTML="";
            let infoTotal = document.getElementById("total");
            infoTotal.innerText="Total a pagar $: ";
            Toastify({
                text: "Aguarde y recibirá un email para confirmar la compra",
                duration: 2000,
                gravity: 'bottom',
                position: 'center',
                style: {
                    background: 'linear-gradient(to right, lightgreen, black)'
                }
            }).showToast();

            //Quiero medir intevalo
            const cierreDeCompra=DateTime.now();
            const Interval = luxon.Interval;
            const tiempo = Interval.fromDateTimes(ahora,cierreDeCompra);
            console.log("Tardaste "+tiempo.length('seconds')+" en comprar");
            localStorage.removeItem("carrito");
        }
    }

