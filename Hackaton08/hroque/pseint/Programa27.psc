Proceso Programa27
	contador = 0
	suma = 0
	media = 0
	
	// Pedir al usuario los n�meros y calcular la media
	Escribir "Ingrese un n�mero positivo (Ingrese un n�mero negativo para terminar):"
	Leer numero
	
	Mientras numero >= 0 Hacer
		suma = suma + numero
		contador = contador + 1
		
		Escribir "Ingrese otro n�mero positivo (Ingrese un n�mero negativo para terminar):"
		Leer numero
	FinMientras
	
	Si contador > 0 Entonces
		media = suma / contador
		Escribir "La media de los n�meros ingresados es: ", media
	SiNo
		Escribir "No se ingresaron n�meros positivos"
  FinSi
FinProceso
