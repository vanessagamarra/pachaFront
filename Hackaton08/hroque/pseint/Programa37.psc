Proceso Programa37
	Escribir "Ingrese el primer n�mero:"
	Leer a
	Escribir "Ingrese el segundo n�mero:"
	Leer b
	
	// Calcular el MCD utilizando el algoritmo de Euclides
	Mientras b > 0 Hacer
		resto = a % b
		a = b
		b = resto
	FinMientras
	
	// Mostrar el resultado
	Escribir "El MCD es: " + ConvertirATexto(a)

FinProceso
