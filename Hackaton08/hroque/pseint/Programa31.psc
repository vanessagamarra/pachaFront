Proceso Programa31
	contador = 1
	sumaPares = 0
	sumaImpares = 0
	cantPares = 0
	cantImpares = 0
	
	// Pedir al usuario que ingrese los diez n�meros
	Repetir
		Escribir "Ingrese el n�mero ", contador
		Leer numero
		
		// Verificar si el n�mero es par o impar
		Si numero % 2 = 0 Entonces
			sumaPares = sumaPares + numero
			cantPares = cantPares + 1
		Sino
			sumaImpares = sumaImpares + numero
			cantImpares = cantImpares + 1
		FinSi
		
		contador = contador + 1
	Hasta Que  contador > 10
		
	// Calcular la media de los n�meros pares e impares
	Si cantPares > 0 Entonces
		mediaPares = sumaPares / cantPares
		Escribir "La media de los n�meros pares es: ", mediaPares
	Sino
		Escribir "No se ingresaron n�meros pares."
	FinSi
	
	Si cantImpares > 0 Entonces
		mediaImpares = sumaImpares / cantImpares
		Escribir "La media de los n�meros impares es: ", mediaImpares
	Sino
		Escribir "No se ingresaron n�meros impares."
	FinSi
FinProceso
