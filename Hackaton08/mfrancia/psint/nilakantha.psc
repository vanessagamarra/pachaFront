Proceso nilakantha
	Definir n como Entero
    Definir pi_aprox como Real
    
    Escribir "Ingrese el n�mero de t�rminos a utilizar para aproximar Pi: "
    Leer n
    
    pi_aprox <- 3
    
    Para i <- 1 Hasta n Con Paso 1 Hacer
        termino <- 4 / ((2*i + 2) * (2*i + 3) * (2*i + 4))
        
        Si i % 2 = 1 Entonces
            pi_aprox <- pi_aprox + termino
        Sino
            pi_aprox <- pi_aprox - termino
        Fin Si
    Fin Para
    
    Escribir "La aproximaci�n de Pi con la serie de Nilakantha utilizando " n " t�rminos es: " pi_aprox
    
FinProceso
