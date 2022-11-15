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
const validarFormulario = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("password").value;
    let fila = document.getElementById("fila").value;
    let areaTexto = document.getElementById("areaDeTexto").value;
    if(nombre == "" || !isNaN(nombre) || nombre == null || apellido == "" || !isNaN(apellido) || apellido == null || telefono == "" || telefono == "" || correo == "" || !isNaN(correo) || correo == null || contraseña == "" || contraseña == null || fila == "" || fila == null || areaTexto == "" || !isNaN(areaTexto) || areaTexto == null) {
        Swal.fire({
            icon: 'error',
            title: 'Algo salio mal',
            text: 'Debes completar todos los campos!',
            footer: '<a href="">Porque tengo este problema?</a>'
        })
    } else{
        let usuario = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            contraseña: contraseña,
            fila: fila,
            areaTexto: areaTexto,
        };
        const objetoUsuario = JSON.stringify(usuario);
        localStorage.setItem(objetoUsuario);
    }
}
