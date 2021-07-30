/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

------------------------------------------------------

estrategia de resolucion

1- declarar variables ( tipo/ cantidad / precio / marca / fabricante ) esto se lo pedimos al usuario
a) precioMinAl / contAlBarato / fabAlBarato /flagA
b) contadorB / contadorA / contadorJ / maxUnidades /acumB/ acumA / acumJ / promedio
c) (acumJ)ya lo tuve ne cuenta en el punto b

2- generar un bucle que se repita 5 veces (for) porque se las veces q se debe repetir
2.1- cosas q se tienen q hacer 5 veces (van dentro del bucle)
2.1.1- pido tipo y valido
2.1.2- pido precio y valido
2.1.3- pido cantidad y valido
2.1.4- pido marca y valido	
2.1.5- pido fabricante y valido
------------------------------------------------

a) me fijo si el producto es de tipo alcohol y si es asi la primera vez q ingresa alcohol guardo el
precio en precio barato y las siguientes veces q ingrese un alcohol q imgrese un alcohol lo comparo con el precio 
del alcohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricante)

b) me fijo de que tipo es el producto y actualizo acumulador y contador de de ese tipo
c) si es de tipo jabon acu,ulo la cantidad ( ya lo hice en el punto b)
------------------------------------------------------
3.1- cosas que hago una sola vez despues del for
3.1.1- para el punto b me tengo q fijar cual es el mayor acumulador y sacar el promedio para ese tipo 
3.2- muestro los resultados 

*/
function mostrar()
{
let tipo;
let cantidad;
let precio;
let marca;
let fabricante;
let precioMinA;
let contAlBarato;
let fabAlBarato;
let flagA=1;
let contadorB=0;
let contadorA=0;
let contadorJ=0;
let acumB=0;
let acumA=0;
let acumJ=0;
let promedio;
let maxUnidades;

 for(let i=0; i<5; i++){
	 tipo= prompt("ingrese producto(barbijo / alcohol / jabon):").toLowerCase();
	 while( tipo!="barbijo"&& tipo != "alcohol" && tipo!="jabon"){
		 
		 tipo=prompt("producto invalido. ingrese producto").toLowerCase();
		}
		


	precio=parseInt(prompt("ingrese precio (entre 100 y 300)"));
	
	while(isNaN(precio) || precio<100 || precio> 300){

	   precio=parseInt(prompt("precio invalido. ingrese precio (entre 100 y 300)"));
	}



	cantidad =parseInt(prompt("ingrese cantidad de 1 a 1000 como maximo"));
	
	//while(isNaN(cantidad) || cantidad<1 || cantidad>1000)
	while(!(cantidad >0 && cantidad<=1000)){

	   cantidad =parseInt(prompt("cantidad incorrecta. ingrese cantidad de 1 a 1000 como maximo"));
		
	}
   

	marca= prompt("ingrese marca:");

	while(marca.length==0){
		marca=prompt("ingrese marca:");
	}


	
	fabricante= prompt("ingrese fabricante:");

	while(fabricante.length==0){
		fabricante=prompt("ingrese fabricante:");
	}


  
    if(tipo=="barbijo"){
	 	
	 acumB = acumB + cantidad
	 contadorB++
	
	}else if( tipo== "alcohol"){
		
		acumA = acumA + cantidad;
		contadorA++;

		if(flagA || precio < precioMinA){

			precioMinA = precio;
			fabAlBarato = fabricante;
			contAlBarato = cantidad;
			flagA = 0;
		}
		
	
	}else{//jabon 

		acumJ+= cantidad; //acumj=acumj+ cantidad
		contadorJ++;
		
	}
  
 } 


  if(acumJ>acumA && acumJ>acumB){
	 maxUnidades= "jabon";
	 promedio = acumJ/ contadorJ;

 }else if(acumA>=acumJ && acumA>acumB){

	maxUnidades ="alcohol";
	promedio = acumA/contadorA;

 }else{
	 maxUnidades="barbijo";
	 promedio = acumB/ contadorB;
 }

if(flagA){ 
	document.weitw("a)no se registraron alcoholes")

}else{

	document.write(" a. precio alchol barato: " + precioMinA + " fab: " + fabAlBarato + " cantidad: "+ contAlBarato + "<br>");

}
document.write("b. tipo con mas unidades: "+ maxUnidades + " promedio de la compra: " + promedio + "<br>");

document.write("c. Unidades de jabon en total: " + acumJ);
 



}
