"use strict";
const Constants = require("./Constants");

var Ejercicios = {
    ejercicio01: (primerArgumento, segundoArgumento) => primerArgumento + segundoArgumento,
    ejercicio02: (primeraNota, segundaNota, terceraNota, cuartaNota) =>  (primeraNota + segundaNota + terceraNota + cuartaNota) / 4,
    ejercicio03: (base, altura) => base * altura,
    ejercicio04: (base, altura) => (base * altura) / 2,
    ejercicio05: (radio) => Constants.VALOR_PI * radio,
    ejercicio06: (horasTrabajadas, salarioPorHora) => ""
}

module.exports = Ejercicios;