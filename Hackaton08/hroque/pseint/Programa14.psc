Proceso Programa14
	Escribir "Ingresa un n�mero del 1 al 10";
	Leer num;
	
	si (num < 11 y num > 0) Entonces
		Segun (num) hacer
			caso 2: Escribir "El n�mero es primo";
			caso 3: Escribir "El n�mero es primo";
			caso 5: Escribir "El n�mero es primo";
			caso 7: Escribir "El n�mero es primo";
			De Otro Modo:
				Escribir "El n�mero no es primo";
		FinSegun
	SiNo
		Escribir "No es un n�mero del 1 al 10";
FinProceso
