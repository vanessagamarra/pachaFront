Proceso dia_de_semana
	Escribir "Ingrese un n�mero del 1 al 7 para indicar el d�a de la semana:"
	Leer numero
	Segun numero Hacer
		Caso 1:
			Escribir "El n�mero ", numero, " corresponde al d�a Lunes"
		Caso 2:
			Escribir "El n�mero ", numero, " corresponde al d�a Martes"
		Caso 3:
			Escribir "El n�mero ", numero, " corresponde al d�a Mi�rcoles"
		Caso 4:
			Escribir "El n�mero ", numero, " corresponde al d�a Jueves"
		Caso 5:
			Escribir "El n�mero ", numero, " corresponde al d�a Viernes"
		Caso 6:
			Escribir "El n�mero ", numero, " corresponde al d�a S�bado"
		Caso 7:
			Escribir "El n�mero ", numero, " corresponde al d�a Domingo"
			
		Si numero > 7 Entonces
			Escribir "El n�mero ingresado no es v�lido. Por favor, ingrese un n�mero del 1 al 7."
		FinSi			
	
	FinSegun
	
FinProceso
