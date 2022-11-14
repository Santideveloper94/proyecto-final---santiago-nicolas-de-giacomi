//Cargo datos desde un JSON local (cotizacion.json) y uso metodo GET.
function obtenerCotizacion(){
    const URLCOTI = "/cotizacion.json"
    fetch(URLCOTI)
    .then(resultadoCotizacion => resultadoCotizacion.json())
    .then(datosObtenidos => {
        const cotizaciones = datosObtenidos.cotizaciones
        cotizaciones.forEach(cotizacion => {
            document.getElementById("tablaCotizacion").innerHTML += `
            <tr>
        <th scope="row">${cotizacion.Modelo}</th>
        <td>${cotizacion.Origen}</td>
        <td>${cotizacion.Tipo}</td>
        <td>$ ${cotizacion.Valuacion}</td>
            </tr>
        `;
        })
    })
}
obtenerCotizacion();

//Manejo de promesas con fetch. Traigo del html una card con DOM.
const cotizar = document.getElementById("Cotizar");
const botonTiempo = document.getElementById("btnTiempo");
//Utilizo el evento del mouse onclick, luego creo el elemento con createElement y utilizo el setTimeOut para remover la imagen luego de 3 segundos.
botonTiempo.onclick = () =>{
    let imagen= document.createElement("img");
    imagen.setAttribute("src","../imagenes/cotizaconnosotros.png");
    botonTiempo.append(imagen);
    setTimeout(() => {
        botonTiempo.removeChild(imagen);
    },3000)
}


