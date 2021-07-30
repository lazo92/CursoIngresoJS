/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{/*
 	let lamparas;
    let precioDescuento;
    let marca;
    let precio = 35;
    let descuento;

    lamparas = parseInt(document.getElementById("txtIdCantidad")).value;
    marca = document.getElementById("Marca").value;

    if(lamparas == 5){
        if(marca== "ArgentinaLuz"){
            descuento = * .4;   
        }else{
            descuento = *.3;
        }
    }else if(lamparas == 4){
        if( marca=="ArgentinaLuz" || marca=="FelipeLamparas"){
            descuento = * .25;
        }else{
            descuento = * .2; 
        }
    }else if(lamparas == 3){
        if(marca =="ArgentinaLuz"){
            descuento = * .15;
        }else if(marca=="FelipeLamparas"){
            descuento = * .1;
        }else{
            descuento= * .05;
        }
    } else{(lamparas >= 6)
        descuento = * .5;
    }


    precioDescuento = descuento;
    document.getElementById("txtIdprecioDescuento").value = precioDescuento

   // ejercico mio por switch
   
    switch(lamparas){
        case 5:
            if(marca=="ArgentinaLuz"){
                descuento = precio * 1.4;
            }else{
                descuento = precio * 1.3;
            }
            break;
         
         case 4:
             if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                 descuento = precio * 1.25;
             }else{
                 descuento = precio * 1.2;
             }
             break;
         
         case 3:
             if(marca == "ArgentinaLuz"){
                 descuento = precio * 1.15;
             }else if(marca == "FelipeLamparas"){
                 descuento = precio * 1.1;   
             }else{
                 descuento = precio * 1.05;
             }
             break;

        default:
            descuento = precio * 1.5;
            break;
    }
    precioDescuento = lamparas * descuento;
    document.getElementById("txtIdprecioDescuento").value = precioDescuento
 */


 // switch / if else

 //console.log(la variable q quiero exponer)

 let precio = 35;
 let cantidad;
 let marca;
 let descuento;
 let precioDescuento;
 let importeTotal;
 let IIBB;


 cantidad = parseInt(document.getElementById("txtIdCantidad").value);
 marca = document.getElementById("Marca").value; 

 switch(cantidad){
   case 1:
   case 2:
        descuento = 0;
   break;
   
   case 3:
       if(marca == "ArgentinaLuz"){
          descuento = 0.15;
       }else if( marca == "FelipeLamparas"){
          descuento = 0.1;
       }else{
           descuento = .05;
       }  
       break;
   
   case 4:
       if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
       descuento =0.25;
      }else{
       descuento = 0.2;   
      }

       break;
    
   case 5:
       if(marca == "ArgentinaLuz"){
          descuento = 0.4;
       }else{
           desuento = 0.3;
       }

       break;
       
    default:
        descuento = 0.5;
    break;
 }   

 //calculo el   
 precioDescuento = precio - precio * descuento;

 //muestro el precio unitario con descuento en la caja de texto inferior
 document.getElementById("txtIdprecioDescuento").value = precioDescuento;
 
 // calculo el importe final
 importeTotal = cantidad * precioDescuento;

 // me fijo si corresponde calcular ingresos brutos y de ser asi lo hago

 if(importeTotal > 120){
    IIBB = importeTotal * 0.1;
    importeToltal = importeTotal + IIBB
    alert(" importe total $ " + importeTotal + " usted pago IIBB " + IIBB);
 }else{
    alert (" importe total $ " + importeTotal);
 }


}
