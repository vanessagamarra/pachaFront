Proceso NumeroMayorYMenor
	Definir i Como Entero
	Definir max,min,num Como Real
	Leer num
	max <- num
	min <- num
	Para i<-1 Hasta 20 Hacer
		Leer num
		Si (num>max) Entonces
			max <- num
		FinSi
		Si (num<min) Entonces
			min <- num
		FinSi
	FinPara
	Escribir "El n�mero menor es: ",min
	Escribir "El n�mero mayor es: ",max
FinProceso
