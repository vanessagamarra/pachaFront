Proceso suma_impares_menoresoigual_n
	// Declaraci�n de variables
	Definir n, suma Como Entero
	
	// Lectura del n�mero
	Escribir "Ingrese un n�mero entero positivo: "
	Leer n
	
	// C�lculo de la suma
	suma <- 0
	Para i <- 1 Hasta n Con Paso 1 Hacer
		Si i % 2 <> 0 Entonces
			suma <- suma + i
		FinSi
	FinPara
	
	// Impresi�n del resultado
	Escribir "La suma de los n�meros impares menores o iguales a ", n, " es: ", suma

FinProceso
