
//ejercicio 1
const ejercicio1 = () => {

    let ej1var1 = document.getElementById('ej1var1').value;
    let ej1var2 = document.getElementById('ej1var2').value;
    let ej1var3 = document.getElementById('ej1var3').value;
    
    let ej1rpta = `Hola mi nombre es ${ej1var1} ${ej1var2} y mi edad es ${ej1var3}.`
    
    document.getElementById("ej1rpta").innerHTML = ej1rpta;
    
    }

//ejercicio 2
let ej2numbers=[];

function ejercicio2(){
    let pow3 = ej2numbers.reduce(pow3_reducer,0);
    document.getElementById("ej2rpta").innerHTML = "La suma de cubo de los numeros es: "+pow3;
}

//ejercicio2  adicionales
function ejercicio2ingresar(){
    ej2numbers.push(parseInt(document.getElementById('ej2num1').value));
    document.getElementById("ej2numeros").innerHTML = "Los numeros ingresados son: "+(ej2numbers.join(", "));
}

function ejercicio2reset(){
    ej2numbers=[];
    document.getElementById("ej2numeros").innerHTML = "Se han borrado todos los numeros";
    document.getElementById("ej2rpta").innerHTML = "";
}

function pow3_reducer(accumulator, currentValue){
    return (accumulator + Math.pow(currentValue, 3));
}

//EJERCICIO 03
function ejercicio3(){

    let ej3var1 = document.getElementById('ej3var1').value;
    let dataType

    if (isNaN(ej3var1)) {
        dataType = "string";
      } else {
        dataType = "number";
      }

    document.getElementById("ej3rpta").innerHTML = "El tipo de dato es: "+dataType+". Para otro tipo de dato usar la consola";
}

//EJERCICIO O4
let ej4numbers=[];

function ejercicio4(...args){
    args=ej4numbers;
    let sum = args.reduce(sum_reducer, 0);
    document.getElementById("ej4rpta").innerHTML = "La suma de los numeros es: "+sum;
}

//ejercicio4  adicionales
function ejercicio4ingresar(){
    ej4numbers.push(parseInt(document.getElementById('ej4num1').value));
    document.getElementById("ej4numeros").innerHTML = "Los numeros ingresados son: "+(ej4numbers.join(", "));
}

function ejercicio4reset(){
    ej4numbers=[];
    document.getElementById("ej4numeros").innerHTML = "Se han borrado todos los numeros";
    document.getElementById("ej4rpta").innerHTML = "";
}

function sum_reducer(accumulator, currentValue){
    return (accumulator + currentValue);
}


//EJERCICIO 05

let letras=[];
let numeros=[];

function ejercicio5(){
    console.log(letras);
    console.log(numeros);
    document.getElementById("ej5rpta").innerHTML = "Los numeros son: "+(numeros.join(", "))+"<br>Los string son: "+(letras.join(", "));
    letras=[];
    numeros=[];
}

//ejercicio5  adicionales
function ejercicio5ingresar(){

    let ej5var1 = document.getElementById('ej5var1').value;

    if (isNaN(ej5var1)) {
        letras.push(ej5var1);
      } 
    
     else {
        numeros.push(ej5var1);
      }
      document.getElementById('ej5var1').value='';
}

function ejercicio5reset(){
    letras=[];
    numeros=[];
    document.getElementById("ej5rpta").innerHTML = "";
}


//EJERCICIO O6
let ej6numeros=[];

function ejercicio6(...args){
    args=ej6numeros;
    console.log(args);
    let ej6min=Math.min(...args);
    let ej6max=Math.max(...args);
    console.log(ej6min)

    document.getElementById("ej6rpta").innerHTML = "el numero menor del arreglo es "+ej6min+" y el numero mayor del arreglo es "+ej6max
    ej6numeros=[];
    document.getElementById('ej6var1').value="";
}

//ejercicio6  adicionales
function ejercicio6ingresar(){

    let ej6var1 = document.getElementById('ej6var1').value;

    if (isNaN(ej6var1)) {
        document.getElementById("ej6rpta").innerHTML = "No es un numero. Ingrese numeros";
      } 
    
     else {
        ej6numeros.push(parseInt(ej6var1));
      }

    document.getElementById('ej6var1').value='';
}

function ejercicio6reset(){
    ej6numeros=[];
    document.getElementById("ej6rpta").innerHTML = "";
}


//EJERCICIO O7
let ej7numeros=[];

function ejercicio7(...args){
    args=ej7numeros;
    console.log(args);

    document.getElementById("ej7rpta").innerHTML = `(${ej7numeros.slice(0, 3).join("")}) ${ej7numeros.slice(3, 6).join("")}-${ej7numeros.slice(6).join("")}`;


}
//ejercicio7  adicionales
function ejercicio7ingresar(){    
        let ej7var1 = document.getElementById('ej7var1').value;

        if (isNaN(ej7var1)) {
            document.getElementById("ej7rpta").innerHTML = "No es un numero. Ingrese numeros";
        } 
        
        else {
            ej7var1=parseInt(ej7var1)

            if (ej7var1<0 || ej7var1>9) 
            {
                document.getElementById("ej7rpta").innerHTML = "El numero no esta en el rango";
            }  
            else {
                ej7numeros.push(ej7var1);
            }
        }
    
        document.getElementById('ej7var1').value='';    

        if ((Object.keys(ej7numeros).length)==10){ 
            ejercicio7();
            ej7numeros=[];
        }        
}

//EJERCICIO 8

let ej8arrayofarrays=[];
let ej8array=[];

function ejercicio8(...args){
    args=ej8arrayofarrays;
    let maxValues = args.map(function(item) {
        return Math.max.apply(null, item);
      });

    document.getElementById("ej8rpta").innerHTML = "Los numeros mayores "+maxValues
    ej8array=[];
    ej8arrayofarrays=[];
    document.getElementById('ej8var1').value="";
}

//ejercicio8  adicionales
function ejercicio8ingresar(){

    let ej8var1 = document.getElementById('ej8var1').value;

    if (isNaN(ej8var1)) {
        document.getElementById("ej8rpta").innerHTML = "No es un numero. Ingrese numeros";
      } 
    
     else {
        ej8array.push(parseInt(ej8var1));
      }

    document.getElementById('ej8var1').value='';
}

function ejercicio8newarray(){
    document.getElementById("ej8arr").innerHTML = document.getElementById("ej8arr").value + "<br>"+ej8array 
    ej8arrayofarrays.push(ej8array);
    ej8array=[];
    document.getElementById("ej8arr").innerHTML = ej8arrayofarrays.join("<br>") 
}

function ejercicio8reset(){
    ej8arrayofarrays=[];
    ej8array=[]
    document.getElementById("ej8rpta").innerHTML = "";
    document.getElementById("ej8arr").innerHTML = "";
}

//EJERCICIO 9

function ejercicio9() {

    let inputString = document.getElementById("ej9var1").value.trim();
	let inputChar = document.getElementById("ej9var2").value.trim();

	// Validar la entrada del usuario
	if (!inputString.match(/^[a-zA-Z]+$/) || inputChar.length !== 1) {
		document.getElementById("ej9rpta").innerHTML = "Ingrese datos validos"
		return;
	}

	// Calcular los índices del carácter en la palabra
	let result = firstLastIndex(inputString, inputChar);

	document.getElementById("ej9rpta").innerHTML = "La letra '"+inputChar+"' se ubica primero en el index "+result[0]+" y ultimo en el index "+result[1];
}

function firstLastIndex(str, char) {
    var firstIndex = str.indexOf(char);
    var lastIndex = str.lastIndexOf(char);
    
    if (firstIndex === -1 || lastIndex === -1) {
      // El carácter no se encuentra en la cadena
      return null;
    } else {
      // El carácter se encuentra en la cadena
      return [firstIndex, lastIndex];
    }
  }

function ejercicio10(){
      const key = document.getElementById("key").value;
      const value = document.getElementById("value").value;
      obj[key] = value;
      document.getElementById("key").value = "";
      document.getElementById("value").value = "";
      const item = document.createElement("li");
      item.textContent = `${key}: ${value}`;
      document.getElementById("list").appendChild(item);
}

function convertir() {
    const arr = toArray(obj);
    console.log(arr);
  }

  function toArray(obj) {
    return Object.entries(obj);
  }