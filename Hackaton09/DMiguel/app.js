var fs = require("fs");
// llamamos a la librería http
var http = require("http");
var url = require('url');

var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
let answ = "";
var miServidor = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    switch (peticion.url) {
        case "/":
            var html = fs
                .readFileSync(__dirname + "/templates/inicio.html")
            respuesta.end(html);
            break;
        case "/ejercicio/1":
            titulo = "Ejercicio 01"
            parrafo = "1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
            rpta = ejercicio01(20,144)
            new_inputs = '<label for="dato">Datos</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/2":
            titulo = "Ejercicio 02"
            parrafo = "2. Un estudiante realiza 4 exámenes, calcular el promedio de estos"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Nota</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,4,rpta)
            break;
        case "/ejercicio/3":
            titulo = "Ejercicio 03"
            parrafo = "3. Calcular el área de un rectángulo"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/4":
            titulo = "Ejercicio 04"
            parrafo = "4. Calcular el área de un triángulo"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/5":
            titulo = "Ejercicio 05"
            parrafo = "5. Calcular el área de una circunferencia"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/6":
            titulo = "Ejercicio 06"
            parrafo = "6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/7":
            titulo = "Ejercicio 07"
            parrafo = "7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)."
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,3,rpta)
            break;
        case "/ejercicio/8":
            titulo = "Ejercicio 08"
            parrafo = "8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,4,rpta)
            break;
        case "/ejercicio/9":
            titulo = "Ejercicio 09"
            parrafo = "9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,3,rpta)
            break;
        case "/ejercicio/10":
            titulo = "Ejercicio 10"
            parrafo = "10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/11":
            titulo = "Ejercicio 11"
            parrafo = "11. Calcular el área de una circunferencia"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,11,rpta)
            break;
        case "/ejercicio/12":
            titulo = "Ejercicio 05"
            parrafo = "5. Calcular el área de una circunferencia"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/13":
            titulo = "Ejercicio 05"
            parrafo = "5. Calcular el área de una circunferencia"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/14":
            titulo = "Ejercicio 05"
            parrafo = "5. Calcular el área de una circunferencia"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        case "/ejercicio/15":
            titulo = "Ejercicio 05"
            parrafo = "5. Calcular el área de una circunferencia"
            rpta = ejercicio02(20,14,12,15)
            new_inputs = '<label for="dato">Dato</label><input id="dato" type="text" class="form-control">'
            generarEjercicio(respuesta,titulo,parrafo,new_inputs,2,rpta)
            break;
        default:
            respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.end("404 not found")
            break;
    }
});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");

function ejercicio01(numero1, numero2){
    let respuesta = numero1 + numero2
    return respuesta;
}

function ejercicio02(examen1,examen2, examen3,examen4,){
    let respuesta = (examen1+examen2+examen3+examen4)/4
    return respuesta;
}

function repeatText(text, count) {
    return text.repeat(count);
}

function generarEjercicio(respuesta,titulo, parrafo, new_inputs, cant_inp, rpta) {
    new_inputs = repeatText(new_inputs,cant_inp)
    var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%inputs%",new_inputs)
        .replace("%respuesta%", rpta);
    respuesta.end(html)
}