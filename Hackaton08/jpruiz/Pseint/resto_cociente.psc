Proceso resto_cociente
	// Declaraci�n de variables
	Definir dividendo, divisor, cociente, resto Como Entero
	
	// Lectura de los n�meros
	Escribir "Ingrese el dividendo: "
	Leer dividendo
	Escribir "Ingrese el divisor: "
	Leer divisor
	
	// Inicializaci�n de variables
	cociente <- 0
	resto <- dividendo
	
	// C�lculo del cociente
	Mientras resto >= divisor Hacer
		cociente <- cociente + 1
		resto <- resto - divisor
	FinMientras
	
	// Impresi�n de resultados
	Escribir "El cociente es: ", cociente
	Escribir "El resto es: ", resto
FinProceso
