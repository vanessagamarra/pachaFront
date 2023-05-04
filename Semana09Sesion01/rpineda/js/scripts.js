// Hacer un algoritmo en Pseint y JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

function ej01(){
    data = document.getElementById("imp01");
    res = document.getElementById("res01");
    if(data.value.length == 3){
        res.innerHTML = "Si tiene 3 digitos"
    }
    else{
        res.innerHTML = "No tiene 3 digitos"
    }
}

function ej02(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número entero por el teclado y determinar si es negativo.
    data = document.getElementById("imp02");
    res = document.getElementById("res02");

    try {
        numero = parseInt(data.value);
        let result = Number.isNaN( numero ); 
        if(!result){
            if(numero < 0){
                res.innerHTML = "es un numero negativo"
            }
            else {
                res.innerHTML = "es un numero positivo"
            }
        }
        else{
            res.innerHTML = "Los datos ingresados no son numericos"
        }
    } catch (error) {
        throw "No se puede comvertir a numero"
    }
    
}
function ej03(){
    //Hacer un algoritmo en Pseint y JavaScript que lea un número y determinar si termina en 4.
    data = document.getElementById("imp03");
    res = document.getElementById("res03");

    try {
        numero = data.value
        intArr = numero.split('');
        ultimo = intArr[(intArr.length -1)]
        if(ultimo == 4){
            res.innerHTML = "Si ttermina en 4"
        }
        else{
            res.innerHTML = "No termina en 4"
        }


    } catch (error) {
        throw error
    }
    
}
button01 = document.getElementById("ej01");
button01.addEventListener("click", ej01);
button02 = document.getElementById("ej02");
button02.addEventListener("click", ej02);
button03 = document.getElementById("ej03");
button03.addEventListener("click", ej03);