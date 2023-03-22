# PREGUNTAS:
## 1.	¿Qué es un control de versiones?

Es un sistema que registra los cambios realizados sobre un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones especificas más adelante.

>“Un S.C.V. es como una máquina del tiempo de tu trabajo.”

Cualquier tipo de archivo que encuentres en un ordenador (PC) puede ponerse bajo control de versiones.


## 2.	¿Cuáles son los problemas al no usar un control de versiones?

-	Al compartir un proyecto, tendríamos que usar un almacenamiento externo (usb, Google drive, etc) y el problema de saber quien modificaría tal archivo o carpetas se multiplicaría por la cantidad de personas dentro del proyecto.
-	Proyectos difíciles de manejar y liderar.
-	Riesgo a sobrescribir con mi código el avance formal del equipo.
-	La centralización y poca probabilidad de trabajar remotamente. 

## 3.	¿Cuáles son los beneficios?

-	Puedes mantener las versiones de tus cambios.
-	Puedes revertir el estado del proyecto hasta el primero del registro  de  tus cambios.
-	Si pierdes archivos o haces cambios accidentalmente puedes recuperarlos en una versión anterior.
-	Creación de flujo de trabajo.
-	Trabajo con versiones.
-	Código juntos (asegurarse de que los cambios no entren en conflicto con los cambios de otros usuarios).
-	Automatización de tareas. 

## 4.	¿Qué tipos de control de versiones existen?

**TIPOS DE S.C.V.**
-	Sistema de control de versiones *LOCALES*: 
En vez de mantener las versiones como archivos independientes, los almacenaban en una base de datos. Cuando era necesario revisar una versión anterior del proyecto se usaba el sistema de control de versiones en vez de acceder directamente al archivo, de esta manera en cualquier momento solo se tenia una copia del proyecto, eliminando la posibilidad de confundir o eliminar versiones.

-	Sistemas de control de versiones *CENTRALIZADA*:
Para facilitar la colaboración de múltiples desabolladores en un solo proyecto los sistemas de control de versiones evolucionaron: en vez de almacenar los cambios y versiones en el disco duro de los desarrolladores, estos se almacenaban en un servidor. 

-	Sistema de control de versiones *DISTRIBUIDOS*:
Este sistema de control de versiones optó por darle a cada desarrollador una copia local de todo el proyecto, de esta manera se construyó una  red distribuida de repositorios, en la que cada desarrollador podía trabajar de manera aislada pero teniendo un mecanismo de resolución de conflictos mucho mas elegante.
