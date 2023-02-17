/* PRE-ENTREGA 1 

let bebida = parseInt(prompt("¿Cuantos Gines Forajido?"));

function multiplicar(bebida){
    return bebida * 1400;
}
while (bebida != "ESC"){
    if (bebida <=25){
        let resultado=multiplicar(bebida)
        console.log(resultado)
        let mensaje = `Su carrito es $ ${resultado}`;
        alert(mensaje);
} else {
        alert ("No tenemos stock"); 
    }
    bebida = prompt("¿Cuantos Gines Forajido?");
} */

/*     PRE-ENTREGA 2     -  No se como unir lo anterior con lo nuevo */

/* function Botella (info){
    this.nombre = info.nombre;
    this.sabor = info.sabor;
    this.botanicos = info.botanicos;
}

const botella1 = new Botella ({
    nombre: "Forajido",
    sabor: "Floral",
    botanicos: 14
});

console.log(botella1.nombre);
console.log(botella1.sabor);
console.log(botella1.botanicos); */

let productos = [
    { id: 1, nombre: "Forajido", estilo: "Floral", botanicos: "14", precio: 1800 },
    { id: 2, nombre: "El bosque", estilo: "London dry", botanicos: "8", precio: 2000 },
    { id: 3, nombre: "Aconcagua", estilo: "London dry", botanicos: "7", precio: 1700},
    { id: 4, nombre: "Hilbing", estilo: "Malbec", botanicos: "8", precio: 2800 },
];

let precio = parseInt(prompt("Ingrese el precio mínimo que desea"));
let filtrados = productos.filter((botella) => botella.precio > precio);
let mensaje = "";

filtrados.forEach((botella) => {
    mensaje += `
    Nombre: ${botella.nombre}
    Estilo: ${botella.estilo}
    Botanicos: ${botella.botanicos}
    Precio: $${botella.precio}
`;
});
alert(mensaje);

console.log(productos.some(marca => marca.nombre === "Forajido"));
console.log(productos.some(marca => marca.nombre === "El bosque"));
console.log(productos.some(marca => marca.nombre === "Aconcagua"));
console.log(productos.some(marca => marca.nombre === "Hilbing"));

let bebida = parseInt(prompt("¿Que Gin le gustaria comprar?"));
let encontrado = productos.some((marca) => marca.nombre === gin);

if (encontrado){
    alert(`El gin ${gin} se encuentra en stock`)
}else {
    alert(`El Gin ${gin} no se encuentra en stock`)
}


