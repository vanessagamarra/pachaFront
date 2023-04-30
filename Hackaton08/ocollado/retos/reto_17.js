const MENSAJE_PROMPT_RETO_17 = {
    HORAS: 'Ingrese las hora',
    MINUTOS: 'Ingrese el minuto',
    SEGUNDOS: 'Ingrese el segundo'
};

function ejecutarReto17() {
    
    let horas = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_17.HORAS);
    let minutos = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_17.MINUTOS);
    let segundos = Utils.ejecutarPromptYParsearAEntero(MENSAJE_PROMPT_RETO_17.SEGUNDOS);
    let horaIngresada = `${horas}:${minutos}:${segundos}`

    if (horas > 24 || minutos > 60 || segundos > 60) {
        alert('Ingrese una hora/minuto/segundo válido');
        return;
    }

    segundos = segundos + 1;
 
    if (segundos > 60) {
        segundos = 0;
        minutos = minutos + 1;
    }

    if (minutos > 60) {
        minutos = 0;
        horas = horas + 1;
    }

    if (horas > 24) {
        horas = 0;
    }

    let nuevoHorario = `${horas}:${minutos}:${segundos}`;

    alert(`Usted ingresó: ${horaIngresada}. Y dentro de un segundo la hora será: ${nuevoHorario}`);
}