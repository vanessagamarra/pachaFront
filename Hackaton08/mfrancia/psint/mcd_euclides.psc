Proceso mcd_euclides
	
    Definir num1 como Entero
    Definir num2 como Entero
    Definir resto como Entero
    
    Escribir "Ingrese el primer n�mero: "
    Leer num1
    
    Escribir "Ingrese el segundo n�mero: "
    Leer num2
    
    Mientras num2 > 0 Hacer
        resto <- num1 % num2
        num1 <- num2
        num2 <- resto
    Fin Mientras
    
    Escribir "El M�ximo Com�n Divisor es: " num1
FinProceso
