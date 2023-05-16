var fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

var new_inputs = '<label for="dato_i">Datos _i</label><input id="dato_i" name="dato_i" type="text" class="form-control">';

const app = express();
var puerto = process.env.PUERTO || 3000;
var urlencodedParser = bodyParser.urlencoded({
    extended: false,
});

app.get("/", function (peticion, respuesta) {
    let titulo = "Hackaton 10";
    let parrafo = "Alumno: Dominguez Valentin Miguel";
    var html = fs
        .readFileSync(__dirname + '/templates/inicio.html')
        .toString()
        .replace('%titulo%', titulo)
        .replace('%parrafo%', parrafo);
    respuesta.end(html);
});

app.get("/ejercicio/1/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 01';
    parrafo = '1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla';
    console.log(peticion.query.dato1);
    console.log(peticion.query.dato2);
    let param1 = parseInt(peticion.query.dato1);
    let param2 = parseInt(peticion.query.dato2);

    let answ = ejercicio01(param1, param2);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 2)
});

app.get("/ejercicio/2/", urlencodedParser, function (peticion, respuesta) {
    titulo = 'Ejercicio 02';
    parrafo = 'Cree una función que tome números y devuelva la suma de sus cubos.sumOfCubes(1, 5, 9) ➞ 855// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855';
    let answ = 0;
    let datos = peticion.query;
    console.log(datos)
    for (let clave in datos){
        answ += datos[clave]**3;
    }
    console.log(answ);
    generarEjercicio(respuesta, titulo, parrafo, new_inputs, answ, 5)
});

app.listen(puerto);

function repeatText(text, count) {
    let resultado = "";
    for (let i = 1; i <= count; i++) {
        resultado += text.replace(/_i/g, `${i}`);
    }
    return resultado;
}

function generarEjercicio(respuesta, titulo, parrafo, new_inputs,answ, cant_inp) {
    new_inputs = repeatText(new_inputs, cant_inp);
    let html = fs
        .readFileSync(__dirname + "/templates/ejercicio.html")
        .toString()
        .replace("%titulo%", titulo)
        .replace("%parrafo%", parrafo)
        .replace("%inputs%", new_inputs)
        .replace('%respuesta%',answ);
    respuesta.end(html);
}

function ejercicio01(numero1, numero2) {
    let respuesta = numero1 + numero2;
    return respuesta;
}

function ejercicio02(examen1, examen2, examen3, examen4) {
    let respuesta = (examen1 + examen2 + examen3 + examen4) / 4;
    return respuesta;
}