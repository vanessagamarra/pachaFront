Proceso Programa11
	Escribir 'Ingrese primer n�mero';
	Leer Num1
	Escribir 'Ingrese segundo  n�mero';
	Leer Num2
	Escribir 'Ingrese tercer n�mero';
	Leer Num3
	Si (Num1 > Num2 y Num1 > Num3) Entonces
		Escribir 'El mayor es: ',Num1;
	SiNo
		Si (Num2 > Num3) Entonces
			Escribir 'El mayor es: ', Num2;
		sino 
			Escribir 'El mayor es: ', Num3;
		FinSi
		
	FinSi
FinProceso
