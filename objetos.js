//Aqui van los objetos con los que se trabaja en el proyecto, en este caso los empleados.
const empleadoUno = {   
    id:01,
    nombre: "Juan Ramon Perez",
    puesto: "Asesor Comercial.",
    telefono: 1588234567,
    descripcion: "Años de experiencia en el rubro automotor al servicio de la gente.",
    imagen:"../imagenes/JuanRamonPerez.jpg"
};
const empleadoDos = {
    id:02,
    nombre: "Jorgelina Minuzzi",
    puesto: "Asesora Comercial",
    telefono: 1533445213,
    descripcion: "Aseguro calidad en el servicio y buena atencion. Mi reputacion en el rubro automotor es intachable.",
    imagen:"../imagenes/jorMinuzzi.jpg"
};
//Aqui se crea un array de objetos con una constante llamada vehiculosEnVenta y alli dentro van cada uno de los objetos separados por llaves.
const vehiculosEnVenta = [{
                id:2233, 
                marca: "Volvo", 
                imagen:"../imagenes/volvoBlanco.jpg",
                modelo: "C30", 
                color: "Blanco", 
                precio: 60000, 
                anio: 2010
},
{
                id:1155, 
                marca: "Porsche", 
                imagen: "../imagenes/porschecayenne.jpg",
                modelo: "Cayenne", 
                color: "Gris Metalico", 
                precio: 80000, 
                anio: 2016
},
{
                id:5555, 
                marca: "Ford",
                imagen: "../imagenes/fordmustang.jpg", 
                modelo: "Mustang", 
                color: "Azul Metalico", 
                precio: 100000, 
                anio: 2005
},
{
                id:2678, 
                marca: "Mazda", 
                imagen: "../imagenes/mazdarx7.jpg",
                modelo: "rx7", 
                color: "Negro", 
                precio: 30000, 
                anio: 1998
}
]
//Aqui se utiliza el JSON para convertir el objeto a string con el stringify y luego se trae ese elemento de vuelta y se lo transforma en un objeto a traves del JSON.parse. Ademas se hace uso de los almacenamientos (local storage).
const objetoAjson = JSON.stringify(empleadoUno);
localStorage.setItem("empleado", objetoAjson);

const traidoDelStorage = localStorage.getItem("empleado");
const parsearObjeto = JSON.parse(traidoDelStorage);

const objetoDosAjson = JSON.stringify(empleadoDos);
localStorage.setItem("empleada", objetoDosAjson);

const traidoDelStorageDos = localStorage.getItem("empleada");
const parsearObjetoDos = JSON.parse(traidoDelStorageDos);

const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor)};
guardarLocal("lista vehiculos", JSON.stringify(vehiculosEnVenta));



