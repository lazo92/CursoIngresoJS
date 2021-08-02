/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
-------------------------------------------------------------------
estrategia de resolucion
1- declaracion de variables
cosas q le pedimos al usuario--> tipo / cantidad / bolsas / precio / seguir / descuento / importeBruto / importeNeto / 
acumBolsas / mayorPrecio / mayorTipo / acumuladorBC / acumuladorBA / acumuladorBCal / tipoMasBolsas / cantBolsas

2- genero un bucle del tipo mientras el usuario quiera (do-while)

3- dentro del bucle (cosas que se repiten por cada producto comprado)

3.1- pido y valido el tipo
3.2- pido y valido la cantidad (numero positivo)
3.3- pido y valido el precio (numero positivo)

3.4- acumular cantidad de bolsas
3.5- acumular importeBruto

3.6- me fijo el tipo de producto y acumulo la cantidad de bolsas segun corresponda

3.7- para el primer producto guardo tipo y precio (es mi unico producto por ende es elmas caro)
para los siguientes productos voy a comparar sus precios con el producto caro y si es mas caro actualizo precio y tipo
--------------------------------------------------------

despues del bucle
me fijo q descuento corresponde ( de acuerso al acumulador de bolsas)

calculo el importe neto

me fijo cual es el mayor acumulador de bolsas para informar eltipo de producto que se compraron  
*/


function mostrar()
{
 let tipo;
 let cantidad;
 let precio;
 let seguir;
 let descuento=0;
 let importeBruto=0;
 let importe;
 let importeNeto;
 let acumBolsas=0;
 let mayorPrecio;
 let mayorTipo;
 let flag=1;
 let acumC=0;
 let acumA=0;
 let acumCal=0;
 let tipoMaxBolsas;
 let cantMaxBolsas;


 do{
    
  tipo=prompt("ingrese producto: Arena / cemento / cal").toLowerCase();
  
  //TIPO
  while(!(tipo== "arena" ||tipo == "cemento"|| tipo == "cal")){
  //while(tipo!="arena" && tipo!="cemento" && tipo != "cal"){	 
    tipo=prompt("producto invalido. ingrese producto").toLowerCase();
  }
    //CANTIDAD
    cantidad=parseInt(prompt("ingrese cantidad"));
    while(isNaN(cantidad) || cantidad<=0){ //O while(!(cantidad > 0))
      cantidad=parseInt(prompt("cantidad invalida. ingrese cantidad"));
    }

    //PRECIO
    precio=parseInt(prompt("ingrese precio"));
    while(isNaN(precio) ||precio<=0){ //O while(!(precio > 0))
      precio=parseInt(prompt("precio invalido. ingrese precio"));
    }

    acumBolsas= acumBolsas + cantidad;

    importe = precio * cantidad;
    
    importeBruto+=importe;


     if(tipo== "cemento"){
       acumC+= cantidad;
       
     }else if(tipo== "arena"){
       acumA+= cantidad;
      
     }else{
       acumCal+= cantidad;
     }

     /* switch(tipo){
        case "arena":
          acumA+=cantidad;
          break; 

          case "cemento":
          acumC+=cantidad;
          break;

          case "cal":
          acumCal+=cantidad;
          break;
      }  // todo es igual a lo de arriba!!!
     
     
      if(flag){
        mayorPrecio= precio;
        mayorTipo = tipo;
        falg = 0;
      }else{
        if(precio > mayorPrecio){
          mayorPrecio=precio;
          mayorTipo= tipo;
        }
      } //todo esto es igual alo de abajo
      */
      if(flag || precio> mayorPrecio){
        mayorPrecio= precio;
        mayorTipo=tipo;
        flag = 0;
      }

   seguir=prompt("ingresar mas productos s / n");
 }while(seguir == 's');
 

 if(acumBolsas > 30){

  descuento= importeBruto * .25;


  }else if(acumBolsas > 10 ){

    descuento= importeBruto * .15;
  }

  importeNeto = importeBruto - descuento;



  if(acumA > acumC && acumA > acumCal){
    tipoMaxBolsas ="arena";
    cantMaxBolsas = acumCal;


  }else if( acumC > acumA && acumC > acumCal){
    tipoMaxBolsas= "cemento";
    cantMaxBolsas= acumC;


  }else{
    tipoMaxBolsas="cal";
    cantMaxBolsas = acumCal;
  }
  
  document.write("A) el importe total a pagar es " + importeBruto + "<br>");
  if(descuento>0){
  document.write("B) el importe con descuento a pagar es " + importeNeto + "<br>");
  }

  document.write("C) tipo con mas cantidad de bolsas " + tipoMaxBolsas + "con " + cantMaxBolsas "bolsas <br>");

  document.write("D) tipo mas caro " + mayorTipo + "precio: " + mayorPrecio + "<br>");




  
  



 
}
