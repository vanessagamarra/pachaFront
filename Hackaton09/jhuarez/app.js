var fs = require('fs');
// llamamos a la librería http
var http = require("http");
var url = require('url');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let html="";
var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
let answ = 0;
let marcador = 0;

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.get("/", function (req, res) {
    marcador=0;
    res.sendFile(__dirname +"/templates/inicio.html");

    titulo = "Hackaton 09";
    parrafo = "Respuestas de la hackaton 09";
    html=fs.readFileSync(__dirname + "/templates/inicio.html")
    .toString()
    .replace("%titulo%", titulo)
    .replace("%parrafo%", parrafo)
    res.end(html)
});

app.get("/ejercicio/1", function (req, res) {
    marcador=1;
    res.sendFile(__dirname +"/formu/formu1.html");

    titulo = "Ejercicio 01"
    parrafo = "1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
    html=fs.readFileSync(__dirname + "/formu/formu1.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

app.post("/ejercicio/1/rpta", (req, res) => {

    if (marcador=1){
    
    let numero1 = req.body.num1;
    let numero2 = req.body.num2;
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    answ=ejercicio01(numero1,numero2);
   
    console.log(typeof numero1)

    res.sendFile(__dirname +"/templates/ejercicio.html");

    titulo = "Ejercicio 01"
    parrafo = "1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
    html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)                
                    .replace("%respuesta%", "La suma es: "+answ);
    res.end(html)
    }

    else if (marcador==2){
        let numero1 = req.body.num1;
        let numero2 = req.body.num2;
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        answ=ejercicio01(numero1,numero2);
        

        res.sendFile(__dirname +"/templates/ejercicio.html");

        titulo = "Ejercicio 02"
        parrafo = "2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos"
        html=fs.readFileSync(__dirname + "/templates/ejercicio.html")
                        .toString()
                        .replace("%titulo%", titulo)
                        .replace("%parrafo%", parrafo)                
                        .replace("%respuesta%", "La suma es: "+answ);
        res.end(html)

    }

});

// inicializar el servidor
app.listen(5555, "127.0.0.1");
console.log('Servidor web iniciado');

function ejercicio01(num1, num2){

    let respuesta = num1+num2;

    return respuesta;
}


