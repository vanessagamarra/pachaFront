// Crea una función que retorne la suma de dos números
let boton = document.getElementById('suma');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', hacerSuma);
console.log("sumando")
function hacerSuma (){
    let numero1=parseFloat(document.getElementById('numero1').value);
    let numero2=parseFloat(document.getElementById('numero2').value);
    
    let s=numero1+numero2;
    respuesta.innerHTML= `la suma es ${s}`; 
}

// Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar
let boto = document.getElementById('enviar');
let respuest = document.getElementById('resultado');
boto.addEventListener('click', hacerPotencia);

function hacerPotencia (base, exponente){
    let base=parseFloat(document.getElementById('base').value);
    let exponente=parseFloat(document.getElementById('exponente').value);
     r = base^exponente; 
    resultado.innerHTML= `la  es ${r}`;
}
















