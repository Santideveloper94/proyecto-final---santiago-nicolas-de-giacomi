
    //console.log(productos);
    let vehiculosJSON=[];
    //Agregado storage carrito
    let totalCarrito;
    let contenedor = document.getElementById("vehiculosVenta");
    let botonFinalizar = document.getElementById("finalizar");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    (carrito.length != 0)&&miTabla();


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
        fetch(`../vehiculos.json`)
        .then(resp => resp.json())
        .then(listaProd => {
            listaProd.forEach(vehiculo =>{
                contenedor.innerHTML += `
                <div class="card col-sm-2">
                <img src="${vehiculo.imagen}" class="card-img-top" alt="${vehiculo.anio}">
                <div class="card-body">
                    <h5 class="card-title">${vehiculo.marca} ${vehiculo.modelo}</h5>
                    <p class="card-text">${vehiculo.color}</p>
                    <p class="card-text">${vehiculo.id}</p>
                    <p class="card-text">U$D ${vehiculo.precio}</p>
                    <button id="btn${vehiculo.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
                `;
            })
            listaProd.forEach(vehiculo => {
                //evento para cada boton
                document.getElementById(`btn${vehiculo.id}`).addEventListener("click",function(){
                    agregarAlCarrito(vehiculo);
        })
        })
            })
        }
    renderizarVehiculos()

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
        let fila = ev.target.parentElement.parentElement;
        let id = fila.children[0].innerText;
        let indice = carrito.findIndex(vehiculo => vehiculo.id == id);
        //remueve el producto del carro
        carrito.splice(indice,1);
        //remueve la fila de la tabla
        fila.remove();
        //recalcular el total
        let Acumulados = carrito.reduce((acumulador,vehiculo)=>acumulador+vehiculo.precio,0);
        total.innerText="Total a pagar $: "+Acumulados;
        //storage
        localStorage.setItem("carrito",JSON.stringify(carrito));
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
            document.getElementById("tablaBody").innerHTML="";
            let infoTotal = document.getElementById("total");
            infoTotal.innerText="Total a pagar $: ";
            Toastify({
                text: "Aguarde y recibirá un email para confirmar la compra",
                duration: 3000,
                gravity: 'bottom',
                position: 'left',
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
    
