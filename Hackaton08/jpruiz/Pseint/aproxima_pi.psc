Proceso aproxima_pi
	
    Definir n como Entero
    Definir pi_aprox como Real
    
    Escribir "Ingrese el n�mero de t�rminos a utilizar para aproximar Pi: "
    Leer n
    
    pi_aprox <- 0
    
    Para i <- 0 Hasta n - 1 Con Paso 1 Hacer
        pi_aprox <- pi_aprox + ((-1)^i) / (2 * i + 1)
    Fin Para
    
    pi_aprox <- 4 * pi_aprox
    
    Escribir "La aproximaci�n de Pi con la serie de Gregory-Leibniz utilizando " n " t�rminos es: " pi_aprox
    
FinProceso
