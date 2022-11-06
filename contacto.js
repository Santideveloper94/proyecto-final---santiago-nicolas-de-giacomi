let tarjetaUno = document.getElementById("primerTarjeta");
tarjetaUno.innerHTML = `
        <div id="primerTarjeta" class="card col-md-2" style="width: 18rem;">
                        <img src="${empleadoUno.imagen}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${empleadoUno.nombre}</h5>
                                <h5 class="card-title">${empleadoUno.puesto}</h5>
                                <p class="card-text">${empleadoUno.descripcion}</p>
                                <a id="primerBoton" class="btn btn-primary">Contactar</a>
                            </div>
                    </div>
`;
let botonUno = document.getElementById("primerBoton");
botonUno.addEventListener("click",contactarAsesor);
function contactarAsesor(){
    Swal.fire('El numero de telefono de Juan Ramon es: 1588234567')
}

let tarjetaDos = document.getElementById("segundaTarjeta");
tarjetaDos.innerHTML = `
            <div id="segundaTarjeta" class="card col-md-2" style="width: 18rem;">
                <img src="${empleadoDos.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${empleadoDos.nombre}</h5>
                        <h5 class="card-title">${empleadoDos.puesto}</h5>
                        <p class="card-text">${empleadoDos.descripcion}</p>
                        <a id="segundoBoton" class="btn btn-primary">Contactar</a>
                    </div>
            </div>
`;
let botonDos = document.getElementById("segundoBoton");
botonDos.addEventListener("click", contactarAsesora);
function contactarAsesora(){
    Swal.fire('El numero de telefono de Jorgelina es: 1533445213')
}