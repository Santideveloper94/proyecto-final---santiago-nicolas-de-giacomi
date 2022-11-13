// Cargo datos desde un JSON local (clientes.json) y uso metodo GET. Manejo de promesas con fetch.
function obtenerDatosJson(){
    const URLJSON = "/clientes.json"
    fetch(URLJSON)
    .then(reciboDatos => reciboDatos.json())
    .then(datosRecibidos =>{
        const misClientes = datosRecibidos.clientes
        misClientes.forEach(cliente => {
        document.getElementById("tablaClientes").innerHTML += `
        <tr>
        <th scope="row">${cliente.Id}</th>
        <td>${cliente.Nombre}</td>
        <td>${cliente.Apellido}</td>
        <td>${cliente.Edad} Años</td>
        <td>${cliente.Antiguedad} Años</td>
        <td>${cliente.Auto}</td>
    </tr>
`;
        })
})
}
obtenerDatosJson();
