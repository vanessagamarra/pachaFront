let num = parseInt(prompt("Ingrese un número"));
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(`El factorial de ${num} es: ${factorial}`);
