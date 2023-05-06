import fs from 'fs';
import { createServer } from 'http';
import path from 'path';
import {fileURLToPath} from 'url';
import funciones from './funciones/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let titulo = "Hackaton 09, hoy";
let parrafo = "Respuestas de la hackaton 09";
let answ = "";
const miServidor = createServer((peticion, respuesta) => {
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    switch (peticion.url) {
        case "/":
            var html = fs
                .readFileSync(__dirname + "/templates/inicio.html", 'utf-8')
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo);
            respuesta.end(html);
            break;
        case "/ejercicio/1":
            titulo = "Ejercicio 01"
            parrafo = "1.	Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla"
            answ = funciones.ejercicio01(20,144)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/2":
            titulo = "Ejercicio 02"
            parrafo = "Un estudiante realiza 4 exámenes, calcular el promedio de estos"
            answ = funciones.ejercicio02(20,14,12,15)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/3":
            titulo = "Ejercicio 03"
            parrafo = "Calcular el área de un rectángulo"
            answ = funciones.ejercicio03(20, 3) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/4":
            titulo = "Ejercicio 04"
            parrafo = "Calcular el área de un triángulo"
            answ = funciones.ejercicio04(20, 3) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/5":
            titulo = "Ejercicio 05"
            parrafo = "Calcular el área de una circunferencia"
            answ = funciones.ejercicio05(10) 
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/6":
            titulo = "Ejercicio 06"
            parrafo = "Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre"
            answ = funciones.ejercicio06(80, 5)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/7":
            titulo = "Ejercicio 07"
            parrafo = "Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)."
            answ = funciones.ejercicio07(80, 5)
            var html = fs.readFileSync(__dirname + "/templates/ejercicio.html")
                .toString()
                .replace("%titulo%", titulo)
                .replace("%parrafo%", parrafo)
                .replace("%respuesta%", answ);
            respuesta.end(html)
            break;
        case "/ejercicio/8":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/9":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/10":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/11":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/12":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/13":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/14":
            respuesta.end("Inicio")
            break;
        case "/ejercicio/15":
            respuesta.end("Inicio")
            break;
        default:
            respuesta.writeHead(404, { "Content-Type": "text/html" });
            respuesta.end("404 not found")
            break;
    }
});

// inicializar el servidor
miServidor.listen(1111);

