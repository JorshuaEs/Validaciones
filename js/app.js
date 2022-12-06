import {valida} from "./validaciones.js";

const inputs = document.querySelectorAll("input");//seleccionar todos los input

inputs.forEach( input =>{
    input.addEventListener('blur', (input) =>{
        valida(input.target);
    })
})//agregar el addevenlistener de blur cuando salga de foco y llamar la funcion de valida