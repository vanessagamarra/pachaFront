
// --- Funciones Arrow ---
const datosPersona = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}.`;
const sumOfCubes = (...nums) => nums.reduce((acumulador, num) => acumulador + Math.pow(num, 3), 0);
const tipoValor = (valor) => typeof valor;


// --- Selección de elementos del DOM ---
const btn01 = document.querySelector('#btn01');
const btn02 = document.querySelector('#btn02');
const btn03 = document.querySelector('#btn03');
const btn04 = document.querySelector('#btn04');
const btn05 = document.querySelector('#btn05');
const btn06 = document.querySelector('#btn06');
const btn07 = document.querySelector('#btn07');
const btn08 = document.querySelector('#btn08');
const btn09 = document.querySelector('#btn09');
const btn10 = document.querySelector('#btn10');
const btn11 = document.querySelector('#btn11');
const btn12 = document.querySelector('#btn12');
const btn13 = document.querySelector('#btn13');
const btn14 = document.querySelector('#btn14');
const btn15 = document.querySelector('#btn15');
const btn16 = document.querySelector('#btn16');
const btn17 = document.querySelector('#btn17');
const btn18 = document.querySelector('#btn18');
const btn19 = document.querySelector('#btn19');
const btn20 = document.querySelector('#btn20');
const btn21 = document.querySelector('#btn21');
const btn22 = document.querySelector('#btn22');

const result01 = document.querySelector('#resultado01');
const result02 = document.querySelector('#resultado02');
const result03 = document.querySelector('#resultado03');
const result04 = document.querySelector('#resultado04');
const result05 = document.querySelector('#resultado05');
const result06 = document.querySelector('#resultado06');
const result07 = document.querySelector('#resultado07');
const result08 = document.querySelector('#resultado08');
const result09 = document.querySelector('#resultado09');
const result10 = document.querySelector('#resultado10');
const result11 = document.querySelector('#resultado11');
const result12 = document.querySelector('#resultado12');
const result13 = document.querySelector('#resultado13');
const result14 = document.querySelector('#resultado14');
const result15 = document.querySelector('#resultado15');
const result16 = document.querySelector('#resultado16');
const result17 = document.querySelector('#resultado17');
const result18 = document.querySelector('#resultado18');
const result19 = document.querySelector('#resultado19');
const result20 = document.querySelector('#resultado20');
const result21 = document.querySelector('#resultado21');
const result22 = document.querySelector('#resultado22');


// --- Algoritmo Ejercicio 01 ---
btn01.addEventListener("click", () => {
    let nombreIngresado = prompt("Ingrese su nombre:");
    let apellidoIngresado = prompt("Ingrese su apellido:");
    let edadIngresada = parseInt(prompt("Ingrese su edad:"));

    try {
        if (!isNaN(edadIngresada)) {
            let resultado = datosPersona(nombreIngresado, apellidoIngresado, edadIngresada);

            window.alert(resultado);
            result01.innerHTML = `Resultado: ${resultado}`;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});


// --- Algoritmo Ejercicio 02 ---
btn02.addEventListener("click", () => {
    let primerNumero = parseFloat(prompt("Ingrese el primer número:"));
    let segundoNumero = parseFloat(prompt("Ingrese el segundo número:"));
    let tercerNumero = parseFloat(prompt("Ingrese el tercer número:"));

    try {
        if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
            let resultado = sumOfCubes(primerNumero, segundoNumero, tercerNumero);

            window.alert(resultado);
            result02.innerHTML = `Resultado: ${resultado}`;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});


// --- Algoritmo Ejercicio 03 ---
btn03.addEventListener("click", () => {
    let tiposDeValores = ["Hola", 123, true, undefined, null, {}, [], function(){}, new Date(), /regex/];

    tiposDeValores.forEach(valor => {
        console.log(tipoValor(valor));
    });

    result03.innerHTML = "Mostrando los diferentes tipos de datos en la consola"
});
