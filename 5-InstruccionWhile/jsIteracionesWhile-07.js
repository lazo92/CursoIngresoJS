/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){

 let numero;
 let acumulador=0;
 let contador=0;
 let promedio;
 let respuesta;

  do{
      numero=parseInt(prompt("ingrese numero")); 
      acumulador = acumulador+ numero;
      contador++;

     respuesta=prompt("ingresar mas numeros? s / n ");
    
    }while( respuesta == 's');

   promedio= acumulador /contador;

   
   document.getElementById("txtIdSuma").value = "la suma es: " + acumulador;
   document.getElementById("txtIdPromedio").value = "el promedioes: " + promedio;

} //FIN DE LA FUNCIÓN