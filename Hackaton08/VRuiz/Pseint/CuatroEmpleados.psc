Proceso CuatroEmpleados
	Definir tipo,diaTrabajado,salario Como Entero;
	salario <- 0;
	
	Escribir 'Ingrese el identificador del empleado';
	Leer tipo;
	Escribir 'Ingrese los d�as trabajados';
	Leer diaTrabajado;
	
	Segun (tipo)  Hacer
		1:
			salario <- diaTrabajado*56;
		2:
			salario <- diaTrabajado*64;
		3:
			salario <- diaTrabajado*80;
		4:
			salario <- diaTrabajado*48;
		De Otro Modo:
			Escribir 'Tipo no v�lido';
	FinSegun
	
	Escribir 'La cantidad a pagar es: ',salario;
FinProceso
