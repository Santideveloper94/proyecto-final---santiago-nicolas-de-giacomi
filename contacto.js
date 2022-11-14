//Se traen cards del HTML con el uso del DOM (a traves del getElementById) en este caso del primer empleado para que el usuario pueda contactarse con el mismo. Luego se usan eventos, en este caso del mouse ("click") para darle funcionalidad al boton de contactar. Hay tambien uso de librerias, en este caso sweet alert, para darle otra estetica al boton.
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
//Se traen cards del HTML con el uso del DOM (a traves del getElementById) en este caso del segundo empleado para que el usuario pueda contactarse con el mismo. Luego se usan eventos, en este caso del mouse ("click") para darle funcionalidad al boton de contactar. Hay tambien uso de librerias, en este caso sweet alert, para darle otra estetica al boton.
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
//Validacion del formulario de la pagina contactos.
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("password");
const fila = document.getElementById("file");

function enviarFormulario(){
    if(nombre.value === null || nombre.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: 'Por favor ingrese su nombre!',
            footer: '<a href="">Que esta sucediendo?</a>'
        })
    }
    if(apellido.value === null || apellido.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: 'Por favor ingrese su nombre!',
            footer: '<a href="">Que esta sucediendo?</a>'
        })
    }
    if(telefono.value === null || telefono.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: 'Por favor ingrese su nombre!',
            footer: '<a href="">Que esta sucediendo?</a>'
        })
    }
    if(correo.value === null || correo.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: 'Por favor ingrese su nombre!',
            footer: '<a href="">Que esta sucediendo?</a>'
        })
    }
    if(password.value === null || password.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: 'Por favor ingrese su nombre!',
            footer: '<a href="">Que esta sucediendo?</a>'
        })
    }
    if(file.value === null || file.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal!',
            text: 'Por favor ingrese su nombre!',
            footer: '<a href="">Que esta sucediendo?</a>'
        })
    }
    
    
    return false;
}

