# HACKATON 02

## Reto 01

### ¿Por qué utilizar un _CVS_?

_Git_, _Github_, _Gitlab_, _Bitbucket_.

### PROBLEMA:

Es muy probable que en algún momento de nuestras vidas antes de conocer el control de versiones hayamos hecho esto:

![Imagen](https://github.com/rpinedaec83/pachaFront/blob/main/Hackaton02/Imagen2.png?raw=true)

Creando copias de nuestro proyecto para controlar las versiones y usando nuestra creatividad para nombrar estas carpetas para saber cuál es el proyecto final.

Si tuviéramos que compartir el proyecto, tendríamos que usar un almacenamiento externo (USB, _Google Drive_, etc.) y el problema de saber quién modificó tal archivo o carpeta se multiplica por la cantidad de personas dentro del proyecto, un total caos.

Aquí es donde entra _Git_, permitiéndonos mantener un historial de cambios y basándose en ese historial poder regresar a cualquier versión de nuestros documentos.

### BENEFICIOS:

Permite revertir los archivos seleccionados a un estado anterior, revertir todo el proyecto a un estado anterior, comparar los cambios a lo largo del tiempo, ver quién modificó por última vez algo que podría estar causando un problema, quién presentó un problema y cuándo, y más. Usar un _VCS (Version Control System)_ también generalmente significa que, si arruinas las cosas o pierdes archivos, estos pueden recuperarse fácilmente.

Los desarrolladores de software que trabajan en equipos escriben continuamente nuevos códigos fuente y cambian el código fuente existente. El código para un proyecto, aplicación o componente de software generalmente se organiza en una estructura de carpetas o "árbol de archivos". Un desarrollador del equipo puede estar trabajando en una nueva característica, mientras que otro desarrollador corrige un error no relacionado al cambiar el código, cada desarrollador puede hacer sus cambios en varias partes del árbol de archivos.

Los equipos de software que no usan ninguna forma de control de versiones a menudo se encuentran con problemas como no saber qué cambios se han realizado para los usuarios o la creación de cambios incompatibles entre dos piezas de trabajo no relacionadas que luego deben ser minuciosamente desenredadas y re elaboradas.

Si usted es un desarrollador que nunca ha utilizado el control de versiones, es posible que haya agregado versiones a sus archivos, tal vez con sufijos como "final" o "último" y luego tuvo que lidiar con una nueva versión final. Quizás haya comentado los bloques de código porque desea deshabilitar cierta funcionalidad sin eliminar el código, por temor a que pueda ser utilizado más adelante. El control de versiones es una forma de salir de estos problemas.

---

## RESPUESTAS

### ¿Qué es un control de versiones?
El control de versiones o sistema de control de versiones, también conocido como _VCS (Version Control System)_, es una herramienta crucial para cualquier desarrollador de software, permitiéndoles mantener un registro completo de cambios en el código fuente. Los _VCS_ son sistemas especializados que permiten a los desarrolladores trabajar en equipo de manera eficiente, realizar cambios simultáneos en diferentes partes del proyecto, revertir cambios no deseados, comparar versiones de archivos y colaborar en línea en tiempo real (En sistemas centralizados y distribuidos). El el gestionar el control de versiones es esencial para quien desee trabajar de manera efectiva y asegurar la calidad del código fuente.

### ¿Cuáles son los problemas al no usar un control de versiones?
Al no utilizar un control de versiones, los desarrolladores suelen enfrentarse a problemas como la dificultad para saber qué cambios se han realizado en los archivos, la creación de cambios incompatibles entre dos piezas de trabajo no relacionadas y la necesidad de trabajar en varias copias de un proyecto para mantener distintas versiones. Además, si se produce un error o se pierden archivos importantes, la recuperación puede ser difícil o incluso imposible. En resumen, los problemas que surgen al no usar un control de versiones incluyen la falta de control sobre quién ha modificado el código, la imposibilidad de revertir cambios no deseados, errores causados por cambios incompatibles realizados por diferentes miembros del equipo y dificultad para colaborar con otros desarrolladores en el mismo proyecto.

### ¿Cuáles son los beneficios?
El uso de un sistema de control de versiones trae múltiples beneficios a los desarrolladores, como mantener un historial completo de cambios, revertir cambios no deseados, colaborar en equipo, reducir errores y conflictos, entre otros. Además, sistemas de control de versiones como Git permiten trabajar en ramas de forma simultánea, lo que aumenta la eficiencia y reduce el riesgo de errores. También permiten colaborar en línea a través de plataformas como GitHub o GitLab, lo que facilita la integración de nuevas funciones y la resolución de problemas de manera conjunta. En definitiva, su uso es esencial para cualquier equipo de desarrollo de software que busque trabajar de manera eficiente y mantener el control sobre las distintas versiones del código fuente.

### ¿Qué tipos de control de versiones existen?
Existen varios tipos de sistemas de control de versiones, como _Git_, _SVN_ (Subversion), _CVS (Concurrent Version System)_, _Mercurial_, _BitKeeper_ y _Bazaar_. _Git_ es uno de los más populares, ya que es un sistema de control de versiones distribuido y se utiliza ampliamente en el desarrollo de software y en proyectos de código abierto. Además, plataformas como _GitHub_ y _GitLab_ se han convertido en importantes comunidades de desarrollo que utilizan _Git_ como su sistema de control de versiones. Por otro lado, _SVN_ es un sistema de control de versiones centralizado que ha sido ampliamente utilizado en proyectos comerciales y empresariales. Cada tipo de sistema de control de versiones tiene sus propias características y beneficios, y la elección depende del tipo de proyecto y de las necesidades del equipo de desarrollo.