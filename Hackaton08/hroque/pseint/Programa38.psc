Proceso Programa38
	// Pedir al usuario que ingrese el n�mero
	Escribir "Ingrese un n�mero:"
	Leer numero
	
	// Inicializar la suma en cero
	suma = 0
	
	// Calcular la suma de los divisores propios del n�mero
	Para divisor = 1 Hasta numero/2 Hacer
		Si numero % divisor = 0 Entonces
			suma = suma + divisor
		FinSi
	FinPara
	
	// Comprobar si el n�mero es un n�mero perfecto
	Si suma = numero Entonces
		Escribir "El n�mero es un n�mero perfecto"
	Sino
		Escribir "El n�mero no es un n�mero perfecto"
  FinSi
FinProceso
