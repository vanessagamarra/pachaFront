Proceso suma_100_mientras
	Definir suma, i Como Entero
	
	// Inicializaci�n de variables
	suma <- 0
	i <- 1
	
	// Ciclo mientras para sumar los primeros cien n�meros
	Mientras i <= 100 Hacer
		suma <- suma + i
		i <- i + 1
	FinMientras
	
	// Impresi�n del resultado
	Escribir "La suma de los primeros cien n�meros es: ", suma
FinProceso
