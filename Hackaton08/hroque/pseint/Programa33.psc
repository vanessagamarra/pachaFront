Proceso Programa33
	continuar = "S"
	
	// Ejecutar el ciclo mientras el usuario quiera continuar
	Mientras continuar = "S" Hacer
		// Aqu� ir�a el c�digo que se ejecutar� en cada ciclo
		
		// Preguntar al usuario si quiere continuar
		Escribir "�Desea continuar con el programa? (S/N)"
		Leer continuar
		
		// Verificar que la respuesta del usuario sea v�lida
		Mientras continuar <> "S" Y continuar <> "N" Hacer
			Escribir "Respuesta inv�lida. Por favor ingrese S o N."
			Leer continuar
		FinMientras
	FinMientras
	
	Escribir "Programa finalizado."
FinProceso
