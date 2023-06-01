Proceso media_delista_numeros
// Declaraci�n de variables
Definir numero, suma, contador Como Entero
Definir media Como Real

// Inicializaci�n de variables
suma <- 0
contador <- 0

// Lectura de n�meros
Escribir "Ingrese n�meros positivos para calcular su media. Ingrese un n�mero negativo para terminar."
Leer numero

Mientras numero >= 0 Hacer
	// Suma del n�mero ingresado a la suma acumulada
	suma <- suma + numero
	
	// Incremento del contador de n�meros ingresados
	contador <- contador + 1
	
	// Lectura del siguiente n�mero
	Escribir "Ingrese otro n�mero positivo o un n�mero negativo para terminar."
	Leer numero
FinMientras
	
// C�lculo de la media
Si contador > 0 Entonces
	media <- suma / contador
	Escribir "La media de los n�meros ingresados es: ", media
Sino
	Escribir "No se ingresaron n�meros v�lidos para calcular la media."
FinSi

FinProceso
