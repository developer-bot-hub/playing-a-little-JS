const saludar = (nombre)=>{
    document.write("Hola" + nombre)
}
saludar("pedro")
let free = false;
const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
        if (edad > 18) {
            if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis porque sos la primer persona despues de las 2");
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar`);
        }
        } else {
        alert("no podes pasar");
}
}
validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);