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

button01 = document.getElementById("ej01");
button01.addEventListener("click", ej01);