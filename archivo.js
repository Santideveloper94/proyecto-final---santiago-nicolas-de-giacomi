//Storage para almacenar los datos de nuestros empleados.

//Empleado uno
localStorage.setItem("Nombre", "Juan Ramon Perez");
localStorage.setItem("Puesto que ocupa", "Asesor Comercial");
localStorage.setItem("Telefono", 1588234567);
localStorage.setItem("Años en la empresa", 10);
localStorage.setItem("Realizo alguna venta este mes", true);

let nombreEmpleado1 = localStorage.getItem("Nombre");
let puestoQueOcupa1 = localStorage.getItem("Puesto que ocupa");
let telefono1 = parseInt(localStorage.getItem("Telefono"));
let añosEnEmpresa1 = parseInt(localStorage.getItem("Años en la empresa"));
let ventaMensual1 = localStorage.getItem("Realizo alguna venta este mes");

console.log(nombreEmpleado1);
console.log(puestoQueOcupa1);
console.log(telefono1);
console.log(añosEnEmpresa1);
console.log(ventaMensual1);


//Empleada dos
sessionStorage.setItem("Nombre", "Jorgelina Minuzzi");
sessionStorage.setItem("Puesto que ocupa", "Asesora Comercial");
sessionStorage.setItem("Telefono", 1533445213);
sessionStorage.setItem("Años en la empresa", 5);
sessionStorage.setItem("Realizo alguna venta este mes", true);

let nombreEmpleado2 = sessionStorage.getItem("Nombre");
let puestoQueOcupa2 = sessionStorage.getItem("Puesto que ocupa");
let telefono2 = parseInt(sessionStorage.getItem("Telefono"));
let añosEnEmpresa2 = parseInt(sessionStorage.getItem("Años en la empresa"));
let ventaMensual2 = sessionStorage.getItem("Realizo alguna venta este mes");

console.log(nombreEmpleado2);
console.log(puestoQueOcupa2);
console.log(telefono2);
console.log(añosEnEmpresa2);
console.log(ventaMensual2);

//Autos (objetos) en stock en la concesionaria

const auto1 = {id:2233, marca: "Volvo", modelo: "c30", color: "blanco", precio: 60000, año: 2010}
const auto1Ajson = JSON.stringify(auto1);
console.log(auto1Ajson);
localStorage.setItem("mi auto1",auto1Ajson);
const auto1AlStorage = localStorage.getItem("mi auto1");
const parsearAuto1 = JSON.parse(auto1AlStorage);
console.log(parsearAuto1);

const auto2 = {id:1155, marca: "Porsche", modelo: "Cayenne", color: "gris metalico", precio: 80000, año: 2016}
const auto2Ajson = JSON.stringify(auto2);
console.log(auto2Ajson);
localStorage.setItem("mi auto2", auto2Ajson);
const auto2AlStorage = localStorage.getItem("mi auto2");
const parsearAuto2 = JSON.parse(auto2AlStorage);
console.log(parsearAuto2);

const auto3 = {id:5555, marca: "Ford", modelo: "Mustang", color: "azul", precio: 100000, año: 2005}
const auto3Ajson = JSON.stringify(auto3);
console.log(auto3Ajson);
localStorage.setItem("mi auto3", auto3Ajson);
const auto3AlStorage = localStorage.getItem("mi auto3");
const parsearAuto3 = JSON.parse(auto3AlStorage);
console.log(parsearAuto3);

const auto4 = {id:2678, marca: "Mazda", modelo: "rx7", color: "negro", precio: 30000, año: 1998}
const auto4Ajson = JSON.stringify(auto4);
console.log(auto4Ajson);
localStorage.setItem("mi auto4",auto4Ajson);
const auto4AlStorage = localStorage.getItem("mi auto4");
const parsearAuto4 = JSON.parse(auto4AlStorage);
console.log(parsearAuto4);

//Incorporo 2 cards con informacion de los empleados

const empleadoUno = {   id:01,
                        nombre: "Juan Ramon Perez",
                        puesto: "Asesor Comercial.",
                        telefono: 1588234567,
                        descripcion: "Años de experiencia en el rubro automotor al servicio de la gente.",
                        imagen:"./imagenes/JuanRamonPerez.jpg"
}
let articuloTarjeta = document.getElementById("tarjetaUno");

articuloTarjeta.innerHTML = `
<div>
<div id="tarjetaUno" class="card" style="width: 18rem;">
<img src="${empleadoUno.imagen}" class="card-img-top" alt="${empleadoUno.puesto}">
<div class="card-body">
    <h5 class="card-title">${empleadoUno.nombre}</h5>
    <p class="card-text">${empleadoUno.descripcion}</p>
    <a button="miBoton" class="btn btn-primary">Contactar</a>
</div>
</div>
`
const empleadoDos = {   id:02,
                        nombre: "Jorgelina Minuzzi",
                        puesto: "Asesora Comercial",
                        telefono: 1533445213,
                        descripcion: "Aseguro calidad en el servicio y buena atencion. Mi reputacion en el rubro automotor es intachable",
                        imagen:"./imagenes/JorgelinaMinuzzi.jpg"
}
let otroArticuloTarjeta = document.getElementById("tarjetaDos");

otroArticuloTarjeta.innerHTML = `
<div id="tarjetaDos" class="card" style="width: 18rem;">
<img src="${empleadoDos.imagen}" class="card-img-top" alt="${empleadoDos.puesto}">
<div class="card-body">
    <h5 class="card-title">${empleadoDos.nombre}</h5>
    <p class="card-text">${empleadoDos.descripcion}</p>
    <a button="miBoton2" class="btn btn-primary">Contactar</a>
</div>
</div>
`;
let miBoton = getElementById("miBoton");
miBoton.addEventListener("click", contactarAsesor);
function contactarAsesor(){
alert("El telefono de Juan Ramon Perez es: 1588234567 ")
}

let miBoton2 = getElementById("miBoton2");
miBoton.addEventListener("click", contactarAsesora);
function contactarAsesora(){
alert("El telefono de Jorgelina Minuzzi es: 1533445213")
}

