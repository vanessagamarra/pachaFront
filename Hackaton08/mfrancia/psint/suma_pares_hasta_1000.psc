Proceso suma_pares_hasta_1000
	// Declaraci�n de variables
	Definir num, suma Como Entero
	
	// Inicializaci�n de variables
	suma <- 0
	
	// C�lculo de la suma
	Para num <- 1 Hasta 1000 Con Paso 1 Hacer
		Si num % 2 = 0 Entonces
			suma <- suma + num
		FinSi
	FinPara
	
	// Impresi�n del resultado
	Escribir "La suma de todos los n�meros pares hasta el 1000 es: ", suma
FinProceso
