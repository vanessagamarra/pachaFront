document.querySelectorAll('input')
    .forEach(element => element.addEventListener('click', () => {
        const inputResultado = document.getElementById('inputResultado');
        const elementValueSeleccionado = element.value;

        switch (elementValueSeleccionado) {
            case '=':
                const resultado = realizarCalculo(inputResultado.value);
                console.log(resultado);

                if (isNaN(resultado)) {
                    break;
                }
                inputResultado.value = resultado;
                break;
            case 'C':
                inputResultado.value = '0';
                break;
            default:
                if (inputResultado.value === '0') {
                    inputResultado.value = elementValueSeleccionado;
                } else {
                    inputResultado.value = `${inputResultado.value} ${elementValueSeleccionado}`;
                }
        }
    }));

function realizarCalculo(cadena) {
  const operadores = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };

  const expresiones = cadena.split(' ');
  const pila = [];

  expresiones.forEach(expresion => {
    if (operadores.hasOwnProperty(expresion)) {
      const b = pila.pop();
      const a = pila.pop();
      const resultado = operadores[expresion](a, b);
      pila.push(resultado);
    } else {
      pila.push(parseFloat(expresion));
    }
  });

  return pila.pop();
}