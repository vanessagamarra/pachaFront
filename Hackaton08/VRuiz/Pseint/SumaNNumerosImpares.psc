Proceso SumaNNumerosImpares
	Definir i,n,suma Como Entero
	Escribir "Ingrese la cantidad de n�meros que quiere sumar"
	Leer n
	suma <- 0
	Para i<-1 Hasta n Con Paso 2 Hacer
		suma <- suma+i
	FinPara
	Escribir 'La suma total es: ',suma
FinProceso
