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
}