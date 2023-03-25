TÍTULO: Maquetación Web ¿Por qué validar formularios? EL PROBLEMA E INSUMOS: Los formularios son Interfaces (capa de comunicación entre el usuario y la computadora) que permiten enviar información del usuario al sistema. Pudiéndose enviar, por ejemplo, un nombre, un apellido, una fecha de nacimiento, un número de cuenta, etc. Cuando se envían los datos, el sistema que los recibe espera los formatos correspondientes por cada tipo de dato. Si enviamos un nombre esperará un string, si enviamos una fecha esperará un formato de fecha, si enviamos un número esperará un número. El error se genera cuando enviemos información incorrecta en los campos, o sea, si en un campo que tienes que enviar un dato tipo string envías un número. También evitaremos las inyecciones SQL (SQL Injection es una falla en la codificación de una aplicación cualquiera (web o local) que posibilita por medio de un input cualquiera, la manipulación de una consulta SQL.). 

PREGUNTAS: 

• ¿Para qué sirve la validación de formularios? 
La validación de formularios sirve para garantizar la integridad de los datos que se envían a través de la interfaz. Al validar los datos, se comprueba que los datos que se reciben en cada campo corresponden al formato esperado, evitando que se envíen datos incorrectos.

• ¿Cuáles son los problemas al no validar un formulario? 
Los problemas al no validar un formulario son que se pueden enviar datos incorrectos en los campos, lo que puede causar errores en la aplicación o en el sistema que los recibe. Además, se puede permitir la inyección de código malicioso como la inyección SQL, que puede poner en riesgo la seguridad de la aplicación o del sistema.

• ¿Cuáles son los beneficios?
Los beneficios de la validación de formularios son que se puede mejorar la calidad de los datos que se envían, evitando errores y garantizando la fiabilidad de la información. Además, se puede mejorar la seguridad de la aplicación o del sistema, reduciendo el riesgo de ataques de inyección de código malicioso como la inyección SQL.