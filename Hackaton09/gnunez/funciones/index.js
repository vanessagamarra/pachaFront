function ejercicio01(numero1, numero2){
    return `La suma de ${numero1} con ${numero2} es ${numero1 + numero2}`;
}

function ejercicio02(nota, nota2, nota3, nota4){
    const promedio = (nota+nota2+nota3+nota4)/4;
    return `El promedio de las notas ${nota}, ${nota2}, ${nota3} y ${nota4} es ${promedio}`;
}

function ejercicio03(base, altura) {
    const area = base * altura;
    return `El area del rectangulo con base: ${base} y altura ${altura} es: ${area}`;
}

function ejercicio04(base, altura) {
    const area = (base * altura)/2;
    return `El area del triangulo con base: ${base} y altura ${altura} es: ${area}`;
}

function ejercicio05(radio) {
    const area = 3.141516*radio*radio
    return `El area de la circunferencia con radio: ${radio} es: ${area}`;
}

function ejercicio06(horasSemanales, sueldoPorHora) {
    const SueldoSemanal = horasSemanales*sueldoPorHora
    return `El sueldo semanal de : ${horasSemanales} por ${sueldoPorHora} es: ${SueldoSemanal}`;
}

export default {ejercicio01, ejercicio02, ejercicio03, ejercicio04, ejercicio05, ejercicio06}
