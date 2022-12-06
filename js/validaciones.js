export function validar(input){
    const tipoDeInput = input.dataset.tipo;//recive el input y verifica su tipo a traves de dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input)//se arma un objeto con los diferentes tipos de input que se tienen
}

inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
})

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if(!mayorDeEdad(fechaCliente)){
         mensaje = "Debes tener almenos 18 años de edad."
    };

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}
//creacion de RegExr y acomodar los input y adevenlistener