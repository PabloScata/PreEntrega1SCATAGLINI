let bebida = parseInt(prompt("¿Cuantos Gines Forajido?"));

    for(let i = 5; i<=25; i++){
    if (bebida <=5){
        let resultado;
        function multiplicar(bebida, valor=1400){
            resultado = bebida * valor;
        }
        console.log(resultado)
        let mensaje = `El costo total es $ ${resultado}`;
    alert(mensaje);
    } else if (bebida <= 25) {
            alert ("Tenemos disponibilidad"); 
    } else {
        alert ("No tenemos stock"); 
    }
        break;
}
