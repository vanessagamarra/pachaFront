Proceso Programa23
	Escribir "Ingrese un n�mero entero positivo: "
	Leer n
	
	suma = 0
	
	Para i = 1 Hasta n Hacer
		Si i % 2 = 1 Entonces
			suma = suma + i
		FinSi
	FinPara
	
	Escribir "La suma de los n�meros impares menores o iguales a ", n, " es: ", suma
FinProceso
