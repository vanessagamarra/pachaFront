Proceso Programa20
	Escribir "Ingrese el primer n�mero:"
    Leer num1
    Escribir "Ingrese el segundo n�mero:"
    Leer num2
    Escribir "Ingrese el tercer n�mero:"
    Leer num3
    Escribir "Ingrese el cuarto n�mero:"
    Leer num4
	
	cant_pares <- 0
    
    Si num1 Mod 2 = 0 Entonces
        cant_pares <- cant_pares + 1
    FinSi
    Si num2 Mod 2 = 0 Entonces
        cant_pares <- cant_pares + 1
    FinSi
    Si num3 Mod 2 = 0 Entonces
        cant_pares <- cant_pares + 1
    FinSi
    Si num4 Mod 2 = 0 Entonces
        cant_pares <- cant_pares + 1
    FinSi
	
	Si num1 > num2 Y num1 > num3 Y num1 > num4 Entonces
        mayor <- num1
    Sino Si num2 > num3 Y num2 > num4 Entonces
			mayor <- num2
		Sino Si num3 > num4 Entonces
				mayor <- num3
			Sino
				mayor <- num4
			FinSi
			Si num3 Mod 2 = 0 Entonces
				cuadrado_segundo <- num2 ^ 2
			FinSi
			Si num1 < num4 Entonces
				media <- (num1 + num2 + num3 + num4) / 4
			FinSi
			Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
				suma <- num1 + num2 + num3 + num4
			FinSi
		FinSi
	FinSi
	
	Escribir "La cantidad de n�meros pares es: " cant_pares
    Escribir "El n�mero mayor es: " mayor
    Si cuadrado_segundo <> 0 Entonces
        Escribir "El cuadrado del segundo n�mero es: " cuadrado_segundo
    FinSi
    Si media <> 0 Entonces
        Escribir "La media de los cuatro n�meros es: " media
    FinSi
    Si suma <> 0 Entonces
        Escribir "La suma de los cuatro n�meros es: " suma
    FinSi
FinProceso
