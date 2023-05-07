var fs = require('fs');
var http = require("http");
var url = require('url');

//usamos express()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//inicializando variables
let html="";
var titulo = "Hackaton 09";
var parrafo = "Respuestas de la hackaton 09";
let answ = 0;
let marcador = 0;

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

//pagina inicio
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

//PAGINAS FORMULARIOS
//pagina ejercicio 1, formulario
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

//pagina ejercicio 2, formulario
app.get("/ejercicio/2", function (req, res) {
    marcador=1;
    res.sendFile(__dirname +"/formu/formu2.html");

    titulo = "Ejercicio 02"
    parrafo = "2.	Un estudiante realiza 4 exámenes, calcular el promedio de estos"
    html=fs.readFileSync(__dirname + "/formu/formu2.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 3, formulario
app.get("/ejercicio/3", function (req, res) {
    marcador=3;
    res.sendFile(__dirname +"/formu/formu3.html");

    titulo = "Ejercicio 03"
    parrafo = "3.	Calcular el área de un rectángulo"
    html=fs.readFileSync(__dirname + "/formu/formu3.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 4, formulario
app.get("/ejercicio/4", function (req, res) {
    marcador=4;
    res.sendFile(__dirname +"/formu/formu4.html");

    titulo = "Ejercicio 04"
    parrafo = "4.	Calcular el área de un triángulo"
    html=fs.readFileSync(__dirname + "/formu/formu4.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 5, formulario
app.get("/ejercicio/5", function (req, res) {
    marcador=5;
    res.sendFile(__dirname +"/formu/formu5.html");

    titulo = "Ejercicio 05"
    parrafo = "5.	Calcular el área de una circunferencia"
    html=fs.readFileSync(__dirname + "/formu/formu5.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 6, formulario
app.get("/ejercicio/6", function (req, res) {
    marcador=6;
    res.sendFile(__dirname +"/formu/formu6.html");

    titulo = "Ejercicio 06"
    parrafo = "6.	Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
    html=fs.readFileSync(__dirname + "/formu/formu6.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 7, formulario
app.get("/ejercicio/7", function (req, res) {
    marcador=7;
    res.sendFile(__dirname +"/formu/formu7.html");

    titulo = "Ejercicio 07"
    parrafo = "7.	Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).e"
    html=fs.readFileSync(__dirname + "/formu/formu7.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 8, formulario
app.get("/ejercicio/8", function (req, res) {
    marcador=8;
    res.sendFile(__dirname +"/formu/formu8.html");

    titulo = "Ejercicio 08"
    parrafo = "8.	Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano"
    html=fs.readFileSync(__dirname + "/formu/formu8.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 9, formulario
app.get("/ejercicio/9", function (req, res) {
    marcador=9;
    res.sendFile(__dirname +"/formu/formu9.html");

    titulo = "Ejercicio 09"
    parrafo = "9.	Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron"
    html=fs.readFileSync(__dirname + "/formu/formu9.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 10, formulario
app.get("/ejercicio/10", function (req, res) {
    marcador=10;
    res.sendFile(__dirname +"/formu/formu10.html");

    titulo = "Ejercicio 10"
    parrafo = "10.	Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad"
    html=fs.readFileSync(__dirname + "/formu/formu10.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 11, formulario
app.get("/ejercicio/11", function (req, res) {
    marcador=11;
    res.sendFile(__dirname +"/formu/formu11.html");

    titulo = "Ejercicio 11"
    parrafo = "11.	Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador"
    html=fs.readFileSync(__dirname + "/formu/formu11.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 12, formulario
app.get("/ejercicio/12", function (req, res) {
    marcador=12;
    res.sendFile(__dirname +"/formu/formu12.html");

    titulo = "Ejercicio 12"
    parrafo = "12.	Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado"
    html=fs.readFileSync(__dirname + "/formu/formu12.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 13, formulario
app.get("/ejercicio/13", function (req, res) {
    marcador=13;
    res.sendFile(__dirname +"/formu/formu13.html");

    titulo = "Ejercicio 13"
    parrafo = "13.	Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados"
    html=fs.readFileSync(__dirname + "/formu/formu13.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 14, formulario
app.get("/ejercicio/14", function (req, res) {
    marcador=14;
    res.sendFile(__dirname +"/formu/formu14.html");

    titulo = "Ejercicio 14"
    parrafo = "14.	Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia"
    html=fs.readFileSync(__dirname + "/formu/formu14.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});

//pagina ejercicio 15, formulario
app.get("/ejercicio/15", function (req, res) {
    marcador=15;
    res.sendFile(__dirname +"/formu/formu15.html");

    titulo = "Ejercicio 15"
    parrafo = "15.	Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones"
    html=fs.readFileSync(__dirname + "/formu/formu15.html")
                    .toString()
                    .replace("%titulo%", titulo)
                    .replace("%parrafo%", parrafo)
    res.end(html)
});


//PAGINAS MOSTRAR RESPUESTAS EJERCICIOS (IF-ELSE)
app.post("/ejercicio/1/rpta", (req, res) => {

    //mostrar respuesta ejercicio1
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

    //mostrar respuesta ejercicio2
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

//funciones solucion de ejercicios
//funcion ejercicio1
function ejercicio01(num1, num2){

    let respuesta = num1+num2;

    return respuesta;
}

//funcion ejercicio2


