var fs = require("fs");
// llamamos a la librería http
var http = require("http");
var url = require('url');


var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
let answ = "";
var miServidor = http.createServer((peticion, respuesta) => { 
    respuesta.writeHead(200, { "Content-Type": "text/html" });

    const url = new URL(peticion.url, `http://${peticion.client.localAddress}:${peticion.client.localPort}`);

    switch (url.pathname) {

        case "/": 
                var html = fs 
                .readFileSync(__dirname + "/templates/inicio.html") 
                .toString() 
                .replace("%titulo%", titulo) 
                .replace("%parrafo%", parrafo); 
                respuesta.end(html);
            break;

        case "/ejercicio/1":
                titulo_inner = "Ejercicio 01" 
                parrafo_inner = "1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla" 
                answ = ejercicio01(+url.searchParams.get('param1'), +url.searchParams.get('param2')) 
                var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
                .toString() 
                .replace("%titulo%", titulo_inner) 
                .replace("%parrafo%", parrafo_inner) 
                .replace("%respuesta%", answ); 
                respuesta.end(html) 
        break;

        case "/ejercicio/2":
            titulo_inner = "Ejercicio 02" 
            parrafo_inner = "2. Cree una función que tome números y devuelva la suma de sus cubos." 
            answ = ejercicio02(+url.searchParams.get('param1'), +url.searchParams.get('param2'), +url.searchParams.get('param3')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/3":
            titulo_inner = "Ejercicio 03" 
            parrafo_inner = "3.Calcular el área de un rectángulo" 
            answ = ejercicio03(+url.searchParams.get('param1'), +url.searchParams.get('param2')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;
        
        case "/ejercicio/4":
            titulo_inner = "Ejercicio 04" 
            parrafo_inner = "4.Crear una función que reciba n cantidad de argumentos y los sume " 
            answ = ejercicio04(...url.searchParams.getAll('param'));
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/5":
            titulo_inner = "Ejercicio 05" 
            parrafo_inner = "5.Calcular el área de una circunferencia" 
            answ = ejercicio05(+url.searchParams.get('param1')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/6":
            titulo_inner = "Ejercicio 06" 
            parrafo_inner = "6.	Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden."
            answ = ejercicio06(+url.searchParams.get('param1'), +url.searchParams.get('param2'), +url.searchParams.get('param3'), +url.searchParams.get('param4'));
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;
                
        case "/ejercicio/7":
            titulo_inner = "Ejercicio 07" 
            parrafo_inner = "7.Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)." 
            answ = ejercicio07(+url.searchParams.get('param1')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;
        
        case "/ejercicio/8":
            titulo_inner = "Ejercicio 08";
            parrafo_inner = "8.	Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.";

            var matriz1 = [
                [+url.searchParams.get('param1'), +url.searchParams.get('param2'), +url.searchParams.get('param3')],
                [+url.searchParams.get('param4'), +url.searchParams.get('param5'), +url.searchParams.get('param6')],
                [+url.searchParams.get('param7'), +url.searchParams.get('param8'), +url.searchParams.get('param9')]
            ];
        
            var answ = ejercicio08(matriz1);
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;
        
        case "/ejercicio/9":
            titulo_inner = "Ejercicio 09" 
            parrafo_inner = "9.Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron" 
            answ = ejercicio09(+url.searchParams.get('param1')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;
        
        case "/ejercicio/10":
            titulo_inner = "Ejercicio 10";
            parrafo_inner = "10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.";
            answ = ejercicio10(url.searchParams.get('param1'), url.searchParams.get('param2'), url.searchParams.get('param3'));
            answString = JSON.stringify(answ);
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
            .toString()
            .replace("%titulo%", titulo_inner)
            .replace("%parrafo%", parrafo_inner)
            .replace("%respuesta%", answString);
            respuesta.end(html);
        break;
        
        case "/ejercicio/11":
            titulo_inner = "Ejercicio 11" 
            parrafo_inner = "11.Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador" 
            answ = ejercicio11(+url.searchParams.get('param1')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;
    
        case "/ejercicio/12":
            titulo_inner = "Ejercicio 12" 
            parrafo_inner = "12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes."
            answ = ejercicio12(url.searchParams.get('nom1'), url.searchParams.get('nom2'),url.searchParams.get('nom3'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/14":
            titulo_inner = "Ejercicio 14" 
            parrafo_inner = "14.Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados incluyendo n." 
            answ = ejercicio14(+url.searchParams.get('param1')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/15":
            titulo_inner = "Ejercicio 15" 
            parrafo_inner = "15.Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones" 
            answ = ejercicio15(+url.searchParams.get('param1')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/16":
            titulo_inner = "Ejercicio 16" 
            parrafo_inner = "16.Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero." 
            answ = ejercicio16(+url.searchParams.get('param1')) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/18":
            titulo_inner = "Ejercicio 18" 
            parrafo_inner = "18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros."
            answ = ejercicio18(+url.searchParams.get('param1'), +url.searchParams.get('param2'),+url.searchParams.get('param3'), +url.searchParams.get('param4'),+url.searchParams.get('param5'))
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html") 
            .toString() 
            .replace("%titulo%", titulo_inner) 
            .replace("%parrafo%", parrafo_inner) 
            .replace("%respuesta%", answ); 
            respuesta.end(html) 
        break;

        case "/ejercicio/20":
            titulo_inner = "Ejercicio 20";
            parrafo_inner = "20.Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.";
            answ = ejercicio20(url.searchParams.get('param1'));
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
            .toString()
            .replace("%titulo%", titulo_inner)
            .replace("%parrafo%", parrafo_inner)
            .replace("%respuesta%", answ);
            respuesta.end(html);
        break;

        case "/ejercicio/22":
            titulo_inner = "Ejercicio 22";
            parrafo_inner = "22.Cree una función que capitalice la última letra de cada palabra.";
            answ = ejercicio22(url.searchParams.get('param1'));
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
            .toString()
            .replace("%titulo%", titulo_inner)
            .replace("%parrafo%", parrafo_inner)
            .replace("%respuesta%", answ);
            respuesta.end(html);
        break;

        default: 
            respuesta.writeHead(404, { "Content-Type": "text/html" }); 
            respuesta.end("404 not found") 
        break;
    
    } 
});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");
console.log('Servidor Iniciado');

function ejercicio01(numero1, numero2){
    
}

function ejercicio02(num1,num2, num3,){

    let respuesta = Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
    return respuesta;
}

function ejercicio03(base,altura,){
  
}

function ejercicio04() {
 
}

function ejercicio05(radio,){

}

function ejercicio06(num1, num2, num3, num4 ){

    let min = num1;
    let max = num1;
    if (num2 < min) {
        min = num2;
    } else if (num2 > max) {
        max = num2;
    }
    if (num3 < min) {
        min = num3;
    } else if (num3 > max) {
        max = num3;
    }
    if (num4 < min) {
        min = num4;
    } else if (num4 > max) {
        max = num4;
    }
    return [`El número mínimo es: ${min}`,  `El número máximo es: ${max}`];
}

function ejercicio07(metros,){

}

function ejercicio08(matrizDeMatrices) {

    const maximos = [];
  
    for (const matriz of matrizDeMatrices) {
    
      const maximo = Math.max(...matriz);
  
      maximos.push(maximo);
    }
  
    return maximos;
}

function ejercicio09(nacimiento,){

}

function ejercicio10(nombre, edad, pais) {
    const obj = {
      nombre: nombre,
      edad: edad,
      pais: pais
    };
    return Object.keys(obj).map(function(key) {
      return [key, obj[key]];
    });
}


function ejercicio11(aniosEnTienda,){

}

function ejercicio12(nom1, nom2, nom3) {
    const students = [
        { name: nom1 },
        { name: nom2 },
        { name: nom3 }
    ];

    const names = students.map(student => `"${student.name}"`);

    const response = names.join(",");

    return response;
}

function ejercicio14(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}

function ejercicio15(edad,){

}


function ejercicio16(num) {

    let arr = [];
    for (let i = num; i >= 0; i--) {
      arr.push(i);
    }
    return arr;
}


function ejercicio18(param1, param2, param3, param4, param5) {

    const matriz = [param1, param2, param3, param4, param5];
    return matriz.filter((elemento) => Number.isInteger(elemento));

}


function ejercicio20(param1) {
   
    String.prototype.vreplace = function(vowel) {
     
      const regex = /[aeiou]/gi;
     
      return this.replace(regex, vowel);
    }
  
    const str = param1;
    const replacedStr = str.vreplace("u");
    return replacedStr;
}

function ejercicio22(param1) {
    
    let words = param1.split(" ");
    
    for(let i = 0; i < words.length; i++) {
      let word = words[i];
      let lastLetter = word.charAt(word.length - 1);
      
      words[i] = word.slice(0, -1) + lastLetter.toUpperCase();
    }
    
    return words.join(" ");
  }