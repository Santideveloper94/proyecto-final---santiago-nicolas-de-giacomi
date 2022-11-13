//Manejo de promesas con fetch. Cargo datos desde un JSON local (cotizacion.json) y uso metodo GET.
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