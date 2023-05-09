"use strict"

var str = "HELLO WORLD";
console.log(str.charAt(4));       

var str = "HELLO WORLD";
console.log(str[6]);  

var str ="Hello \
Dolly!";
console.log(str);

var obj = {name: "John", new: "yes"}
console.log(obj);

var str = "       Hello World!        ";
console.log(str.trim());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits = 3.1416;
console.log( Array.isArray(fruits));

var numbers = [45, 4, 9, 16, 25];
numbers.forEach(mostrarNumero);
function mostrarNumero(value){
    console.log(value);
}


var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
console.log(numbers2)

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(over18);

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum);

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(allOver18);
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(allOver18);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");
console.log(a);

var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj.name);

var obj = {name:"John", age:30, city:"New York"};
var myJSON = JSON.stringify(obj);
console.log(myJSON)

var timInMSs = Date.now();
console.log(timInMSs);

const d = new Date();
console.log( d.toISOString());
console.log( d.toJSON());

var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO",
    get lang() {
      return this.language;
    },
    set lang(value) {
      this.language = value;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object using a getter:
  console.log( person.lang);
