Proceso Programa35
	mayor = -999999
	menor = 999999
	Para i = 1 Hasta 20 Hacer
		Escribir "Ingrese el n�mero " + ConvertirATexto(i) + ":"
		Leer numero
		
		// Verificar si el n�mero ingresado es mayor o menor que los n�meros previos
		Si numero > mayor Entonces
			mayor = numero
		FinSi
		Si numero < menor Entonces
			menor = numero
		FinSi
	FinPara
	
	// Mostrar el n�mero mayor y el n�mero menor
	Escribir "El n�mero mayor es: " + ConvertirATexto(mayor)
	Escribir "El n�mero menor es: " + ConvertirATexto(menor)
FinProceso
