Proceso Programa36
	Escribir "Ingrese el n�mero de t�rminos de la serie de Fibonacci:"
	Leer n
	
	// Inicializar variables
	a = 0
	b = 1
	
	// Mostrar los dos primeros t�rminos
	Escribir "0"
	Si n >= 2 Entonces
		Escribir "1"
	FinSi
	
	// Calcular los t�rminos restantes y mostrarlos
	Para i = 3 Hasta n Hacer
		c = a + b
		a = b
		b = c
		Escribir ConvertirATexto(c)
	FinPara

FinProceso
