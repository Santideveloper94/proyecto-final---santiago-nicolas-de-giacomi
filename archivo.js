//carrito para comprar cuatro autos.
class autos{
    constructor(id, marca, imagen, modelo, color, precio, año){
        this.id = id;
        this.marca = marca;
        this.imagen = imagen;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
        this.año = año;
    }
    restaStock(){
        this.stock = this.stock - 1;
    }
}
const volvoC30 = new producto(2233, "Volvo", "volvoBlanco.jpg", "C30", "Blanco", 60000, 2010);
const porscheCayenne = new producto(1155, "Porsche", "porschecayenne.jpg", "Cayenne", "gris metalico", 80000, 2016);
const fordMustang = new producto(5555, "Ford", "fordmustang.jpg", "Mustang","azul", 100000, 2005);
const mazdaRx7 = new producto(2678,"Mazda", "mazdarx7.jpg", "rx7", "negro", 30000, 1998);

const vehiculosAltaGama = [volvoC30, porscheCayenne, fordMustang, mazdaRx7];

function renderBase(){
for(vehiculo of vehiculosAltaGama){
    let card = document.createElement("div")

    card.innerHTML = `
                    <h2> Comprá ${vehiculo.marca}</h2>
                    <input type="button" value="comprar" onClick="vehiculo.restaStock()">
    `;
    document.body.append(card)
}
}
function renderBootstrap(){
    for(vehiculo of vehiculosAltaGama){
        let card = document.createElement("div")
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `;
    }
}
    