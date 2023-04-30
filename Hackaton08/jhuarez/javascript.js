function ejercicio1(){

    let num=0;

    num = parseInt(prompt("Escriba un numero"));

    if (num>=100 && num<=999) {
        alert("El numero es de 3 digitos");    
    }
    else {
        alert("El numero no es de 3 digitos");
    }
    

}

function ejercicio2(){
    let num=0;

    num=parseInt(prompt("Escriba un numero positivo o negativo"));

    if (num<0){
        alert("El numero es negativo")
    }
    else 
        alert("El numero es positivo")
}

function ejercicio3(){
    let num=0;
    num=parseInt(prompt("Escriba un numero"));

    if (num%10==4){
        alert("El numero termina en 4");
    }
    else {
        alert("El numero no termina en 4");
    }
}

function ejercicio4() {

    let num = new Array();
    let i=0;
    let k=0;
    let menor;
    let aux=0;
    let p='';
    
    for (i=0; i<=2; i++) {
        num[i]=parseInt(prompt("Escriba el numero "+(i+1)));
    }


    for(i=0; i<=1; i++){
        menor=i;

        for(k=0; k<=2; k++){
            if (num[menor]>num[k+1]){
                aux=num[menor];
                num[menor]=num[k+1];
                num[k+1]=aux;
            }
        }
    }

    for(i=0;i<=2;i++){
        p+= num[i] + '\n';
    }

    alert("La lista ordenada es" + '\n' + '\n'+p );

}

function ejercicio5(){

    let zpts=0;
    let precio=80;
    dscto1=0.9;
    dscto2=0.8;
    dscto3=0.6;

    zpts=parseInt(prompt("Escriba numero de zapatos"));

    if (zpts<10 && zpts>0){
        alert("El precio de su compra es de "+ zpts*precio+ " soles");
    }
    else if (zpts>=10 && zpts<=20){
        alert("Dscto 20%. El precio de su compra es de "+ zpts*precio*dscto1+ " soles");
    }
    else if (zpts>=20 && zpts<=30){
        alert("Dscto 20%. El precio de su compra es de "+ zpts*precio*dscto2+ " soles");
    }
    else if (zpts>30) {
        alert("Dscto 40%. El precio de su compra es de "+ zpts*precio*dscto3+ " soles");
    }
    else {
        alert("Ingrese valor valido");
    }
}

function ejercicio6(){
    let horas=0;
    let reg=20;
    let extra=25;
    let sueldo=0;

    horas=parseInt(prompt("Ingresar numero de horas laboradas"));

    if (horas<=40){
        sueldo = horas*reg;
    }
    else{
        sueldo = 40*reg + extra*(horas-40);
    }

    alert("Tu sueldo por horas trabajadas es de "+sueldo);
}

function ejercicio7(){
    let member="";
    member=prompt("Ingrese su tipo de membresia para averiguar su descuento")

    if (member=='a' | member=='A'){
        alert("Tiene 10% de descuento");
    }
    else if (member=='b' | member=='B'){
        alert("Tiene 15% de descuento");
    }
    else if (member=='c' | member=='C'){
        alert("Tiene 20% de descuento");
    }
    else
        alert("Ingrese valores correctos")

}

function ejercicio8(){
    let nota = new Array();
    let acumulado=0;
    let string="";
    let i=0;

    for (i=0; i<=2; i++) {
        nota[i]=parseInt(prompt("Escriba la nota "+(i+1)));

        while(nota[i]<0 | nota[i]>20){
            nota[i]=parseInt(prompt("Escriba un valor correcto"));
        }
    }

    for (i=0; i<=2; i++) {
        acumulado=acumulado+ nota[i];
        promedio = acumulado/(i+1);
    }

    if (promedio>=11){
        string = "Usted ha aprobado."
    }
    else{
        string = "Usted ha desaprobado."
    }

    alert("Su promedio es de "+promedio+". "+string);
}

function ejercicio9(){
    let sueldo=0;
    let aum1=1.05; //5%
    let aum2=1.10 //10%

    sueldo=parseInt(prompt("Por favor ingrese su sueldo actual"));

    if (sueldo>2000){
        sueldo = sueldo*aum1;
    }
    else{
        sueldo=sueldo*aum2;
    }

    alert("Su nuevo sueldo aumentado es de "+sueldo);
}

function ejercicio10(){
    let num=0;

    num=parseInt(prompt("Por favor ingrese un numero"));

    if (num%2==0){
        alert("El numero es par")
    }
    else {
        alert("El numero es impar")
    }
}

function ejercicio11(){
    let num = new Array();
    let i=0;
    let k=0;
    let menor;
    let aux=0;
  
    
    for (i=0; i<=2; i++) {
        num[i]=parseInt(prompt("Escriba el numero "+(i+1)));
    }


    for(i=0; i<=1; i++){
        menor=i;

        for(k=0; k<=2; k++){
            if (num[menor]>num[k+1]){
                aux=num[menor];
                num[menor]=num[k+1];
                num[k+1]=aux;
            }
        }
    }
    alert("El numero mayor es " + num[2] );
}

function ejercicio12(){
    let num1=0;
    let num2=0

    num1=parseInt(prompt("Por favor ingrese un numero 1"));
    num2=parseInt(prompt("Por favor ingrese un numero 2"));

    if (num1>num2){
        alert("El numero mayor es "+num1+" y el numero menor es "+num2);
    }
    else{
        alert("El numero mayor es "+num2+" y el numero menor es "+num1);
    }
}