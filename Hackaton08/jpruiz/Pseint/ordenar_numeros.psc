Proceso ordenar_numeros
	
	Definir num1, num2, num3 como Entero
    
    Escribir "Ingrese el primer n�mero: "
    Leer num1
    Escribir "Ingrese el segundo n�mero: "
    Leer num2
    Escribir "Ingrese el tercer n�mero: "
    Leer num3
    
    Si num1 < num2 Entonces
        Si num2 < num3 Entonces
            Escribir num1, ", ", num2, ", ", num3
        Sino
            Si num1 < num3 Entonces
                Escribir num1, ", ", num3, ", ", num2
            Sino
                Escribir num3, ", ", num1, ", ", num2
            FinSi
        FinSi
    Sino
        Si num1 < num3 Entonces
            Escribir num2, ", ", num1, ", ", num3
        Sino
            Si num2 < num3 Entonces
                Escribir num2, ", ", num3, ", ", num1
            Sino
                Escribir num3, ", ", num2, ", ", num1
            FinSi
        FinSi
    FinSi
FinProceso
