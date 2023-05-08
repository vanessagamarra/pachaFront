"use strict";

var fs = require("fs");
var http = require("http");
var url = require('url');

var Utils = require("./components/Utils");
const Constants = require("./components/Constants");
var Ejercicios = require("./components/Ejercicios");

var miServidor = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    let queryParams = url.parse(request.url, true).query;
    let urlParsed = new URL(`http://${request.headers.host}${request.url}`);

    let templateUrl = Constants.ROOT.TEMPLATES.EJERCICIO;
    let respuestaEjercicio;
    let ejercicioObject;

    switch (urlParsed.pathname) {
        case Constants.ROOT.INIT.PATH:
            templateUrl = Constants.ROOT.TEMPLATES.INICIO;
            ejercicioObject = Constants.ROOT.INIT;
            break;
        case Constants.ROOT.EJERCICIO_01.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_01;

            let primerArgumento = queryParams.n1;
            let segundoArgumento = queryParams.n2;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio01(primerArgumento, segundoArgumento)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_02.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_02;

            let primeraNota = queryParams.n1;
            let segundaNota = queryParams.n2;
            let terceraNota = queryParams.n3;
            let cuartaNota = queryParams.n4;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio02(primeraNota, segundaNota, terceraNota, cuartaNota)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_03.PATH:
            ejercicioObject = Constants.ROOT.EJERCICIO_03;

            let base = queryParams.n1;
            let altura = queryParams.n2;
            respuestaEjercicio = Utils.isCorrectLenghtParameters(queryParams, ejercicioObject.CANTIDAD_PARAMETROS)
                ? Ejercicios.ejercicio03(base, altura)
                : Constants.MENSAJES.PARAMETROS_VACIOS;
            break;
        case Constants.ROOT.EJERCICIO_04.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_05.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_06.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_07.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_08.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_09.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_10.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_11.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_12.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_13.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_14.PATH:
            response.end("Inicio")
            break;
        case Constants.ROOT.EJERCICIO_15.PATH:
            response.end("Inicio")
            break;
        default:
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("404 not found")
            break;
    }

    Utils.redireccionarRespuesta(
        fs,
        response,
        Utils.getUrlRedirection(__dirname, templateUrl),
        ejercicioObject.TITULO,
        ejercicioObject.PARRAFO,
        ejercicioObject.CANTIDAD_PARAMETROS,
        respuestaEjercicio
    );


});

// inicializar el servidor
miServidor.listen(1111, "127.0.0.1");
