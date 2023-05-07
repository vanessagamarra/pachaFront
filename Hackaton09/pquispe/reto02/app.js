
let http = require("http");
let fs = require("fs");

let miServidor = http.createServer((solicitud, respuesta) => {
    respuesta.writeHead(200, {"Content-Type": "text/html"});
    let html = fs.readFileSync(__dirname + "/templates/inicio.html");
    respuesta.end(html);
});

miServidor.listen(1111, "127.0.0.1");
