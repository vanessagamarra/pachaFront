const titleEjercicio = document.getElementById("title_ejercicio");
const problemEjercicio = document.getElementById("content_ejeercicio");

const contentEjercicio = document.getElementById("form-ejercicio");
const rptaEjercicio = document.getElementById("resultado");

const ejecutar = document.getElementById('ejecutar');

function repeatText(text, count) {
    let resultado = "";
    for (let i = 1; i <= count; i++) {
        resultado += text.replace(/_i/g, `${i}`);
    }
    return resultado;
}

function createContentEjercicio(numberEjer = "",problem = "",etiquetas = "", cantidad = 2) {
    titleEjercicio.textContent = numberEjer;
    problemEjercicio.textContent = problem;
    etiquetas = repeatText(etiquetas, cantidad);
    contentEjercicio.innerHTML = etiquetas;
}

function ejercicio_1() {
    let dato1 = parseInt(document.getElementById('dato1').value);
    let dato2 = parseInt(document.getElementById('dato2').value);
    let rpta = dato1 + dato2;
    rptaEjercicio.innerText = `La suma de los dos numeros es ${rpta}.`;
}

function ejercicio_2() {
    let dato1 = parseInt(document.getElementById('dato1').value);
    let dato2 = parseInt(document.getElementById('dato2').value);
    let rpta = dato1**dato2;
    rptaEjercicio.innerText = `La potencia al ${dato2} de ${dato1} es ${rpta}.`;
}

function ejercicio_3() {
    let dato1 = parseInt(document.getElementById('dato1').value);
    let dato2 = parseInt(document.getElementById('dato2').value);
    let rpta = dato1**dato2;
    rptaEjercicio.innerText = `La potencia al ${dato2} de ${dato1} es ${rpta}.`;
}

const etiquetas = '<label for="dato_i">Datos _i</label><input id="dato_i" type="text" class="form-control">'

const params = new URLSearchParams(window.location.search);
const nombreEjercicio = params.get('ejercicio');

switch (nombreEjercicio) {
    case 'ejercicio1':        
        console.log("Estamos en el ejercicio 1");
        problem = "Crea una función que retorne la suma de dos números.";
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,etiquetas,2);
        ejecutar.addEventListener('click', ejercicio_1);
        break;
    case 'ejercicio2':
        console.log("Estamos en el ejercicio 2");
        problem = "Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.";
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,etiquetas,2);
        ejecutar.addEventListener('click', ejercicio_2);
        break;
    case 'ejercicio3':
        console.log("Estamos en el ejercicio 3");
        problem = "Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855";
        createContentEjercicio(nombreEjercicio.toUpperCase(), problem,etiquetas,2);
        ejecutar.addEventListener('click', ejercicio_3);
        break;
    case 'ejercicio4':
        console.log("Estamos en el ejercicio 4");
        break;
    case 'ejercicio5':
        console.log("Estamos en el ejercicio 5");
        break;
    default:
        console.log('Ejercicio no reconocido');
        break;
}