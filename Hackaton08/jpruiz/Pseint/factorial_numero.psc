Proceso factorial_numero
	// Declaraci�n de variables
	Definir num, factorial Como Entero
	
	// Lectura del n�mero
	Escribir "Ingrese un n�mero entero positivo: "
	Leer num
	
	// C�lculo del factorial
	factorial <- 1
	Para i <- 1 Hasta num Con Paso 1 Hacer
		factorial <- factorial * i
	FinPara
	
	// Impresi�n del resultado
	Escribir "El factorial de ", num, " es: ", factorial
FinProceso
