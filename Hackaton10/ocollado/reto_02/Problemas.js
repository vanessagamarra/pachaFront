function ejercicio01() {
    try {
        const nombre = Utils.ejecutarPromptYObtenerCadena("Ingrese nombre: ");
        const apellido = Utils.ejecutarPromptYObtenerCadena("Ingrese apellido: ");
        const edad = Utils.ejecutarPromptYParsearAEntero("Ingrese la edad: ");

        alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`)

    } catch (error) {
        alert(error);
    }
}

function ejercicio02() {

    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        const arrayNumerosPotenciadosATres = arrayNumeros.flatMap(numero => Math.pow(numero, 3));
        const resultadoSumaPotencias = arrayNumerosPotenciadosATres.reduce((a, b) => a + b);

        alert(`Los números ingresados a la potencia de 3 es: ${arrayNumerosPotenciadosATres.toString()} y la suma de estos es: ${resultadoSumaPotencias}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio03() {

    try {
        const valorASerEvaluado = prompt("Ingrese el valor a ser evaluado: ");
        const tipoDato = Utils.detectarTipoDato(valorASerEvaluado);

        alert(`El tipo de valor entregado para: '${valorASerEvaluado}' es: ${tipoDato}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio04() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        const resultado = arrayNumeros.reduce((a, b) => a + b)

        alert(`La suma de los valores ${arrayNumeros.toString()} es: ${resultado}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio05() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de valores que registrará: ");
        let arrayValores = Utils.ejecutarPromptYObtenerCadenas(cantidadDatos);

        const arrayResultado = arrayValores.filter((valor) => !isNaN(valor));

        alert(`Los valores ingresados fueron [${arrayValores.toString()}], de los cuales los valores que NO son string son: ${arrayResultado.length === 0 ? 'ninguno' : '[' + arrayResultado.toString() + ']'}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio06() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadDatos);

        let minimo = Math.min(...arrayNumeros);
        let maximo = Math.max(...arrayNumeros);

        let arrayMinMax = [];
        arrayMinMax.push(minimo, maximo);

        alert(`[${arrayMinMax}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio07() {
    try {
        const cantidadDatos = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de números que registrará: ");
        if (cantidadDatos > 10) {
            throw new Error("Solo se permite 10 enteros");
        }

        let arrayNumeros = Utils.ejecutarPromptYObtenerEnterosDel0Al9(cantidadDatos);

        let formato = `(${arrayNumeros.slice(0, 3).join('')}) ${arrayNumeros.slice(3, 6).join('')}-${arrayNumeros.slice(6).join('')}`;

        alert(`${formato}`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio08() {
    try {
        const cantidadMatrices = Utils.ejecutarPromptYParsearAEntero("Ingrese la cantidad de matrices que registrará: ");
        let matrices = [];

        for (let i = 0; i < cantidadMatrices; i++) {
            let cantidadArreglo = Utils.ejecutarPromptYParsearAEntero(`Ingrese el tamaño del arreglo ${i + 1}: `);
            let arrayNumeros = Utils.ejecutarPromptYObtenerEnteros(cantidadArreglo);
            matrices.push(arrayNumeros);
        }

        let arregloConNumerosMayores = matrices.map((arreglo) => Math.max(...arreglo));

        alert(`[${arregloConNumerosMayores}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio09() {
    try {
        const cadena = Utils.ejecutarPromptYObtenerCadena("Ingrese la cadena completa: ");
        const cadenaABuscar = Utils.ejecutarPromptYObtenerCadena("Ingrese la cadena a evaluar: ");

        const firstIndex = cadena.indexOf(cadenaABuscar);
        const lastIndex = cadena.lastIndexOf(cadenaABuscar);

        alert(`The first ${cadenaABuscar} has index ${firstIndex}, the last ${cadenaABuscar} has index ${lastIndex}.`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio10() {
    try {
        const stringObject = Utils.ejecutarPromptYObtenerCadena("Ingrese un objeto en formato string: ");
        const object = JSON.parse(stringObject);

        let resultado = Object.entries(object)
        .map(([key, value]) => `["${key}": ${value}]`)
        .join(', ');

        alert(`[${resultado}]`);

    } catch (error) {
        alert(error);
    }
}

function ejercicio11() {
    try {
        
    } catch (error) {
        alert(error);
    }
}