console.log("sincronizado")
//1-Utilizando función arrow, crear una función que reciba como parámetros un
// nombre, apellido y edad y los retorne en un string concatenado 
//“Hola mi nombre es sebastián yabiku y mi edad 33”
const datos=(nombre,apellido,edad)=> console.log(`Hola mi nombre es ${nombre} ${ apellido} y mi edad ${edad}`)

datos("sebastian","yabiku" ,33)
//2-Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const sumOfCubes=(num1,num2,num3)=> Math.pow(num1,3)+Math.pow(num2,3)+Math.pow(num3,3)
console.log(sumOfCubes(1, 5, 9))

//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js


//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

//Crear una función que reciba un array de valores y filtre los valores que no son string

//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMax = (numeros) => [Math.min(...numeros), Math.max(...numeros)];
let numeros=[1,2,3,4,5]

console.log(minMax(numeros))


//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de
// teléfono. formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

let formatPhoneNumber = (numeros) 
numeros =[1,2,3,4,5,6,7,8,9,0]
console.log(`(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`)

//Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número
// de cada uno. findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

let numbers= [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
console.log (`${Math.max(...numbers[0])}, ${Math.max(...numbers[1] ) }, ${Math.max(...numbers[2] )} ` )

//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3] .  The first "l" has index 2, the last "l" has index 3.
const charIndex=(palabra)=> word=palabra.split("")

console.log (charIndex("hello"))
console.log (word[2],word[3])

//Escriba una función que convierta un objeto en una matriz, donde
// cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

const toArray = obj => Object.entries(obj);

let objeto = { a: 1, b: 2 };
let resultado = toArray(objeto);
console.log(resultado);
//Cree la función que toma una matriz con objetos y devuelve la suma 
//de los presupuestos de las personas.
//getBudgets([
  //{ name: "John", age: 21, budget: 23000 },
  //{ name: "Steve",  age: 32, budget: 40000 },
 // { name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700
function getBudgets(name,age, budget){
    this.name=name;
    this.age=age;
    this.budget=budget;
}
let persona1 = new getBudgets("john", 21,23000)
console.log(persona1)
let persona2 = new getBudgets("steve", 32,40000)
console.log(persona2)
let persona3 = new getBudgets("Martin", 16,2700)
console.log(persona3)
console.log (persona1.budget+persona2.budget+persona3.budget )


//Cree una función que tome una matriz de estudiantes y devuelva una 
//matriz de nombres de estudiantes.
//getStudentNames([
 // { name: "Steve" },
  //{ name: "Mike" },
  //{ name: "John" }
//]) ➞ ["Becky", "John", "Steve"]
function getStudentNames(name){
    this.name=name;
}
let student1 =new getStudentNames("Steve")
let student2 =new getStudentNames("Mike")
let student3 =new getStudentNames("John")
console.log (student1.name,student2.name,student3.name)

//Escriba una función que convierta un objeto en una matriz de claves
// y valores.
//objectToArray({
  //likes: 2,
 // dislikes: 3,
 // followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
let objectToArray={
    likes: 2,
  dislikes: 3,
  followers: 10
};
console.log(Object.entries(objectToArray))
//Cree una función donde, dado el número n, devuelva la suma de todos 
//los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
const numero=(valor){
 
}
console.log(numero(3))




