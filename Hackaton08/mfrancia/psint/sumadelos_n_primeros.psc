Proceso sumadelos_n_primeros
	// Declaraci�n de variables
	Definir n, suma Como Entero
	
	// Lectura del n�mero
	Escribir "Ingrese un n�mero entero positivo: "
	Leer n
	
	// C�lculo de la suma
	suma <- 0
	Para i <- 1 Hasta n Con Paso 1 Hacer
		suma <- suma + i
	FinPara
	
	// Impresi�n del resultado
	Escribir "La suma de los ", n, " primeros n�meros es: ", suma
FinProceso
