Proceso numero_primo
	Escribir "Ingrese un n�mero entre 1 y 10 "
	Leer numero
	
	Si numero < 1 O numero > 10 Entonces
		Escribir "El n�mero ingresado no est� dentro del rango v�lido."
	FinSi
	
	EsPrimo <- Verdadero
	
	Si numero = 1 Entonces
		EsPrimo <- Falso
	FinSi
	
	Para i <- 2 Hasta (raiz(numero)) Con Paso 1 Hacer
		Si numero Mod i = 0 Entonces
			EsPrimo <- Falso
		FinSi
	FinPara
	
	Si EsPrimo Entonces
		Escribir "El n�mero ingresado es primo."
	Sino
		Escribir "El n�mero ingresado no es primo."
	FinSi
	
FinProceso
