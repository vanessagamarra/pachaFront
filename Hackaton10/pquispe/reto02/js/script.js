
// --- Funciones Arrow ---
const datosPersona = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}.`;
const sumOfCubes = (...nums) => nums.reduce((acumulador, num) => acumulador + Math.pow(num, 3), 0);
const tipoValor = (valor) => typeof valor;
const sumaNvalores = (...nums) => nums.reduce((acumulador, num) => acumulador + num, 0);
const filtrarStrings = (array) => array.filter((valor) => typeof valor === "string");
const minMax = (array) => [Math.min(...array), Math.max(...array)];
const formatPhoneNumber = (array) => {
    let telefono = "";
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            telefono += "(";
        } else if (i === 3) {
            telefono += ") ";
        } else if (i === 6) {
            telefono += "-";
        };
        telefono += array[i];
    }
    return telefono;
};
const findLargestNums = (array) => {
    let largestNums = [];
    for (let i = 0; i < array.length; i++) {
      largestNums.push(Math.max(...array[i]));
    };
    return largestNums;
};
const charIndex = (palabra, caracter) => {
    const indices = [];
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            indices.push(i);
        };
    };
    if (indices.length === 0) {
        return "El carácter no se encuentra en la palabra";
    } else {
        return [indices[0], indices[indices.length - 1]];
    };
};
const toArray = (objeto) => {
    const array = [];
    for (const key in objeto) {
        if (objeto.hasOwnProperty(key)) {
            array.push([key, objeto[key]]);
        };
    };
    return array;
}




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
            result01.innerHTML = 
                `
                <br><br>
                Resultado:<br><br>
                datosPersona(${nombreIngresado}, ${apellidoIngresado}, ${edadIngresada}) => ${resultado}
                `;
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
    let resultado = 
        `   
            <br><br>
            sumOfCubes(1, 5, 9) => ${sumOfCubes(1, 5, 9)}<br>
            sumOfCubes(8, 6, -2, 10) => ${sumOfCubes(8, 6, -2, 10)}<br>
            sumOfCubes(20, 5.5) => ${sumOfCubes(20, 5.5)}<br>
            sumOfCubes(9, 6, -5 ) => ${sumOfCubes(9, 6, -5)}
        `;

    result02.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 03 ---
btn03.addEventListener("click", () => {
    let tiposDeValores = ["Hola", 123, true, undefined, null, {}, [], function(){}, new Date(), /regex/];
    let resultado = `<br><br>`;

    tiposDeValores.forEach(valor => {
        resultado += `${tipoValor(valor)}<br>`;
    });

    result03.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 04 ---
btn04.addEventListener("click", () => {
    let resultado = 
        `   
            <br><br>
            sumaNvalores(...nums)<br>
            sumaNvalores(8, 6, 50) = ${sumaNvalores(8, 6, 50)}<br>
            sumaNvalores(30, 8, 15, 2, 18) = ${sumaNvalores(30, 8, 15, 2, 18)}<br>
            sumaNvalores(20, 2.3, -8) = ${sumaNvalores(20, 2.3, -8)}<br>
            sumaNvalores() = ${sumaNvalores()}
        `;

    result04.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 05 ---
btn05.addEventListener("click", () => {
    let resultado = 
        `   
            <br><br>
            filtrarStrings([1, "lunes", true, "martes", 5.4, "miércoles"]) => ${filtrarStrings([1, "lunes", true, "martes", 5.4, "miercoles"])}<br>
            filtrarStrings([function(){}, 99, 1.2, "Hola", false, "mundo"]) => ${filtrarStrings([function(){}, 99, 1.2, "Hola", false, "mundo"])}<br>
            filtrarStrings([4, "cuatro", 5, "cinco"]) => ${filtrarStrings([4, "cuatro", 5, "cinco"])}
        `;
    
    result05.innerHTML = `<br><br>Resultado: ${resultado}`;
});



// --- Algoritmo Ejercicio 06 ---
btn06.addEventListener("click", () => {
    let numeros = [];

    let solicitarCantidad = parseInt(prompt("Cantidad de números que desee ingresar:"));

    try {
        if (!isNaN(solicitarCantidad) && solicitarCantidad > 0) {
            for (let i = 1; i <= solicitarCantidad; i++) {
                numeros.push(parseFloat(prompt(`Ingrese el valor ${i}`)));

                let datosInvalidos = numeros.filter((valor) => isNaN(valor));

                if (datosInvalidos.length != 0) {
                    throw new Error("Los datos ingresados no son válidos.");
                };
            };

            let resultado = minMax(numeros);
            window.alert(resultado);
            result06.innerHTML = 
            `   
                <br><br>
                Resultado:<br><br>
                minMax([${numeros}]) => ${resultado}
            `;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 07 ---
btn07.addEventListener("click", () => {
    let numeros = [];

    try {
        for (let i = 0; i < 10; i++) {
            numeros.push(Math.abs(parseInt(prompt(`Ingrese el número ${i + 1} del teléfono:`))))

            let datosInvalidos = numeros.filter((valor) => isNaN(valor));

            if (datosInvalidos.length != 0) {
                throw new Error("Los datos ingresados no son válidos.");
            };
        };

        let resultado = formatPhoneNumber(numeros);

        window.alert(resultado);
        result07.innerHTML = 
            `   
                <br><br>
                Resultado:<br><br>
                formatPhoneNumber([${numeros}]) => ${resultado}
            `;
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 08 ---
btn08.addEventListener("click", () => {
    let arrays = [];
    let numeros = [];
    result08.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            findLargestNums([`;

    let solicitarCantidad = parseInt(prompt("Cantidad de matrices que desee ingresar"));

    try {
        if (!isNaN(solicitarCantidad)) {
            for (let i = 1; i <= solicitarCantidad; i++) {
                let cantidadNumeros = parseInt(prompt(`Ingrese la cantidad de números para la matriz ${i}`));

                if (!isNaN(cantidadNumeros)) {
                    for (let i = 1; i <= cantidadNumeros; i++) {
                        numeros.push(parseFloat(prompt(`Ingrese el valor ${i}`)));

                        let datosInvalidos = numeros.filter((valor) => isNaN(valor));

                        if(datosInvalidos.length != 0) {
                            throw new Error("Los datos ingresados no son válidos.");
                        };
                    };
                }
                else {
                    throw new Error("Los datos ingresados no son válidos.");
                };

                arrays.push(numeros);
                result08.innerHTML += `[${numeros}]`;
                numeros = [];
            };

            let resultado = findLargestNums(arrays);

            window.alert(resultado);
            result08.innerHTML += `]) => ${resultado}`;
        }
        else {
            throw new Error("Los datos ingresados no son válidos.");
        };
    }
    catch (error) {
        console.error(error);
    };
});



// --- Algoritmo Ejercicio 09 ---
btn09.addEventListener("click", () => {
    let palabraIngresada = prompt("Ingrese una palabra:");
    let buscarCaracter = prompt("Ingrese el caracter para buscar en la palabra:");

    let resultado = charIndex(palabraIngresada, buscarCaracter);

    window.alert(resultado);
    result09.innerHTML = 
        `
            <br><br>
            Resultado:<br><br>
            charIndex(${palabraIngresada}, ${buscarCaracter}) => ${resultado}
        `;
});



// --- Algoritmo Ejercicio 10 ---
btn10.addEventListener("click", () => {
    let resultado = 
        `
            <br><br>
            toArray({a: 1, b: 2}) => ${toArray({a: 1, b: 2})}<br>
            toArray({c: -7, d: 10}) => ${toArray({c: -7, d: 10})}<br>
            toArray({e: 80, f: 5.2}) => ${toArray({e: 80, f: 5.2})}<br>
            toArray({g: 2.1, h: 4}) => ${toArray({g: 2.1, h: 4})}
        `;

    result10.innerHTML = `<br><br>Resultado: ${resultado}`;
});
