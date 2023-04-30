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

function ejercicio13(){
    let letra='';

    letra=prompt("Por favor ingrese una letra")

    if (letra=='a'|letra=='A'|letra=='e'|letra=='E'|letra=='i'|letra=='I'|letra=='o'|letra=='O'|letra=='u'|letra=='U'){
        alert("La letra es una vocal");
    }
    else{
        alert("La letra no es una vocal");
    }
}

function ejercicio14(){
    let num=0;
    let bandera=0;
    let i=0;

    num=parseInt(prompt("Ingresar un numero del 1 al 10"))

    while(num<1 | num>10){
      num=parseInt(prompt("Numero incorrecto, ingresar numero valido del 1 al 10"))
    }

    i=num-1;
    bandera=1

    while (bandera!=0 && i>1){
        bandera=num%i;
        i=i-1;
    }

    if (bandera==0){
        alert("El numero no es primo");
    }
    else{
        alert("El numero es primo");
    }
}

function ejercicio15(){
    let cm=0;
    let lb=0;
    let pulg=0;
    let kg=0;
    let bandera=0;

    bandera=parseInt(prompt("Indicar que valor desea convertira. Escribir 1 si son centimetros o 2 si son libras"));

    switch (bandera){
        case 1 : 
            cm=parseInt(prompt("Ingresar cantidad de centimetros"));
            pulg=cm*0.393701;
            alert(cm+" centimetros es equivalente a "+pulg+" pulgadas");
            break;
        
        case 2 :
            lb=parseInt(prompt("Ingresar cantidad de libras"))
            kg=lb*0.45454
            alert(lb+" libras es equivalente a "+kg+" kilogramos")
            break;
        default:
            alert("Valor incorrecto")
            break;
    }
}

function ejercicio16(){
    let num=0;

    num=parseInt(prompt("Ingrese un numero del 1 al 7"));

    switch(num){
        case 1:
            alert("El dia es Lunes");
            break;
        case 2:
            alert("El dia es Martes");
            break;
        case 3:
            alert("El dia es Miercoles");
            break;
        case 4:
            alert("El dia es Jueves");
            break;
        case 5:
            alert("El dia es Viernes");
            break;
        case 6:
            alert("El dia es Sabado");
            break;
        case 7:
            alert("El dia es Domingo");
            break;
        default:
            alert("Numero no es correcto");
    }

}

function ejercicio17(){
    let hh=0;
    let mm=0;
    let ss=0;

    hh=parseInt(prompt("Ingresa hora (hh)"));
    mm=parseInt(prompt("Ingresa minuto (mm)"));
    ss=parseInt(prompt("Ingresa segundo (ss)"));

    if (hh < 24 && mm < 60 && ss < 60) {
        ss=ss+1;
        if(ss==60){
            ss=0;
            mm=mm+1;
            if(mm==60){
                mm=0;
                hh=hh+1;
                if(hh==24){
                    hh=0;
                }
            }
        }
       
        alert(hh+" : "+mm+" : "+ss);
    }

    else {
        alert("Dar valores validos")
    }
}

function ejercicio18(){
    let discos=0;
    let factor=0.0825;
    let precio=0;
    let ganancia=0;
    let prec1=8;
    let prec2=7;
    let prec3=6;

    discos=parseInt(prompt("Ingresar cantidad de CDs"));

    if (discos>0 && discos<10){
        precio = discos*prec1;
    }
    else if (discos>=10 && discos <=99){
        precio=discos*prec2;
    }
    else if (discos>=100 && discos<=499){
        precio=discos*prec3
    }

    ganancia=precio*factor;

    alert("El precio total de la venta es de "+precio+" y la ganancia es de "+ganancia);

}

function ejercicio19(){
    let cod=0;
    let dias=0;
    let sueldo=0;

    cod=parseInt(prompt("Ingresar codigo de empleado (1:cajero, 2:servidor, 3:preparador, 4:mantenimiento)"));
    dias=parseInt(prompt("Ingresar cantidad de dias laborados"));

    if (dias>6) {
        alert("La cantidad de dias no es correcta")
    }

    else {
        switch (cod){
            case 1:
                sueldo=dias*56;
                break;
            case 2:
                sueldo=dias*64;
                break;
            case 3:
                sueldo=dias*80;
                break;
            case 4:
                sueldo=dias*48;
                break;
            default:
                alert("Codigo de trabajadoir es incorrecto");
        }

        alert("Se le debe pagar al trabajador la cantidad de "+sueldo+" soles");
    }
}

function ejercicio20(){
    let num = new Array();
    let auxarr = new Array();
    let i=0;
    let k=0;
    let menor;
    let aux=0;
    let contador =0;
    let sqr=0;
    let media=0;
    let suma=0;
  
    
    for (i=0; i<=3; i++) {
        num[i]=parseInt(prompt("Escriba el numero "+(i+1)));
        auxarr[i]=num[i];
    }

    for (i=0; i<=3;i++){
        if (num[i]%2==0){
            contador=contador+1;
        }
    }

    alert("Hay "+contador+" numeros pares");

    for(i=0; i<=2; i++){
        menor=i;

        for(k=0; k<=2; k++){
            if (auxarr[menor]>auxarr[k+1]){
                aux=auxarr[menor];
                auxarr[menor]=auxarr[k+1];
                auxarr[k+1]=aux;
            }
        }
    }
    alert("El numero mayor es " + auxarr[3] );

    if(num[2]%2==0){
        sqr=num[2]**2;
        alert("El cuadrado del segundo numero es "+sqr);
    }
    else{
        alert("No cumple la primera condicion")
    }

    if(num[0]<num[3]){
        media = (num[0]+num[1]+num[2]+num[3])/4;
        alert("La media de los 4 numeros es de "+ media);
    }
    else{
        alert("No cumple la segunda condicion")
    }

    if(num[1]>num[2]){
        if (num[2]>=50 && num[2]<=700){
            suma = (num[0]+num[1]+num[2]+num[3]);
            alert("La suma de los 4 numeros es de "+suma);
        }
    }
    else{
        alert("No cumple la tercera condicion");
    }

}