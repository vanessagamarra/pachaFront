Proceso Programa32
	Definir ciudadMasPoblada Como Caracter
	Definir provincia, ciudad, poblacion, poblacionMaxima Como Entero

	// Pedir al usuario que ingrese la poblaci�n de cada ciudad
	Para provincia = 1 Hasta 3 Con Paso 1 Hacer
		Para ciudad = 1 Hasta 11 Con Paso 1 Hacer
			Escribir "Ingrese la poblaci�n de la ciudad ", ciudad, " de la provincia ", provincia
			Leer poblacion
			
			// Verificar si la poblaci�n es mayor que la poblaci�n m�xima encontrada hasta ahora
			Si poblacion > poblacionMaxima Entonces
				poblacionMaxima = poblacion
				ciudadMasPoblada = "Provincia " +  provincia + ", Ciudad " + ciudad
			FinSi
		FinPara
	FinPara
	
	// Mostrar la ciudad con la mayor poblaci�n al usuario
	Escribir "La ciudad con la mayor poblaci�n es: ", ciudadMasPoblada, " con una poblaci�n de ", poblacionMaxima

FinProceso
