Proceso pago_empleados_heladeria
Definir idEmpleado, diasTrabajados Como Entero
Dimension salarios(4)
Definir salarioSemanal Como Real

salarios(1) = 56
salarios(2) = 64
salarios(3) = 80
salarios(4) = 48

Escribir "Ingrese el n�mero identificador del empleado: "
Leer idEmpleado

Si (idEmpleado >= 1) y (idEmpleado <= 4) Entonces
	Escribir "Ingrese la cantidad de d�as trabajados en la semana: "
	Leer diasTrabajados
	
	salarioSemanal = diasTrabajados * salarios(idEmpleado)
	
	Escribir "El empleado con el n�mero de identificaci�n ", idEmpleado, " trabaj� ", diasTrabajados, " d�as en la semana y se le debe pagar $", salarioSemanal, " por su salario semanal."
Sino
	Escribir "El n�mero de identificaci�n ingresado no es v�lido."
FinSi

	
FinProceso
