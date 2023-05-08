"use strict";
const Constants = require("./Constants");
const Utils = require("./Utils");

const DIAS_EN_UNA_SEMANA = 7;
const VALOR_UNA_PULGADA_EN_METROS = 0.0254;
const VALOR_DOLAR_A_SOL_PERUANO = 3.71; 

var Ejercicios = {
    ejercicio01: (primerArgumento, segundoArgumento) => primerArgumento + segundoArgumento,
    ejercicio02: (primeraNota, segundaNota, terceraNota, cuartaNota) =>  (primeraNota + segundaNota + terceraNota + cuartaNota) / 4,
    ejercicio03: (base, altura) => base * altura,
    ejercicio04: (base, altura) => (base * altura) / 2,
    ejercicio05: (radio) => Constants.VALOR_PI * radio,
    ejercicio06: (horasTrabajadas, salarioPorHora) => (horasTrabajadas * salarioPorHora) * DIAS_EN_UNA_SEMANA,
    ejercicio07: (metros) =>  {
        let valorDeUnMetroEnPulgadas = 1 / VALOR_UNA_PULGADA_EN_METROS;
        return metros * valorDeUnMetroEnPulgadas;
    },
    ejercicio08: (cantidadSolesPeruanos) => {
        const valorDeUnSolADolar = 1 / VALOR_DOLAR_A_SOL_PERUANO;
        return Utils.redondearADosDecimales(cantidadSolesPeruanos * valorDeUnSolADolar);
    },
    ejercicio09: (anioNacimiento) =>  Utils.obtenerAnioActual() - anioNacimiento,
    ejercicio10: (arrayPersonas) => {
        let arraySorted = arrayPersonas.sort((r1, r2) => (r1.edad > r2.edad) ? 1 : (r1.edad < r2.edad) ? -1 : 0);
        let personaConMenorEdad = arraySorted[0]
        return `La persona con menor edad es: ${personaConMenorEdad.nombre} con ${personaConMenorEdad.edad} años`
    },
    ejercicio11: (anioAntiguedad) => {
        let bono = 0;
        if (anioAntiguedad === 1) {
            bono = 100;
        } else if (anioAntiguedad >= 2) {
            bono = 200;
        } else if (anioAntiguedad > 5) {
            bono = 1000;
        }
        return `El trabajador recibirá: $${bono} de bono`

    },
    ejercicio12: () => {
        let salarioInicialProfesor = 1500;
        const anioTope = 6;
        const porcentajeIncremento = 10;
        let detalleGananciaPorAnio = "";

        for (let i = 1; i <= anioTope; i++) {
            if (i == 1) {
                detalleGananciaPorAnio = "la ganancia por anio fue: ";
            }

            salarioInicialProfesor = salarioInicialProfesor + ((porcentajeIncremento * salarioInicialProfesor) / 100);
            detalleGananciaPorAnio = detalleGananciaPorAnio + `En el ${i} año su salario fue: ${salarioInicialProfesor}`;

            if (i < anioTope) {
                detalleGananciaPorAnio = detalleGananciaPorAnio + ",";
            }
        }

        return `El salario de los ultimos ${anioTope} años fue: ${salarioInicialProfesor}. Por otro lado, ${detalleGananciaPorAnio}`;
    },
    ejercicio13: (arrayNotaAlumnos) => {
        const notaMinimaAprobatoria = 11;
        let aprobados = arrayAlumnos.filter((notaAlumno) => notaAlumno >= notaMinimaAprobatoria).length;
        let desaprobados = arrayAlumnos.filter((notaAlumno) => notaAlumno < notaMinimaAprobatoria).length;

        return `La cantidad de aprobados fue: ${aprobados}. Y La cantidad de desaprobados: ${desaprobados}`;
    },
    ejercicio14: (arrayFocos) => {
        
    },
    ejercicio15: (edadPersona) => "",
}

module.exports = Ejercicios;