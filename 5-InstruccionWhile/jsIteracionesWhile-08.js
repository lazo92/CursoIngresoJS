/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
    let respuesta;
    let acPos=0;
    let acNeg=1;
    let flag =1;

    do{

        numero=parseInt(prompt("ingrese numero"));
        if(numero>=0){

            acPos += numero; //acPos=acPos + numero
            
        }else{
            acNeg= acNeg * numero; //acNeg*= numero
            flag=0;
        }

        respuesta=prompt("ingresar mas numeros s / n");


    }while(respuesta =='s');

    if(flag){
        acNeg = 0;

    }

    document.getElementById("txtIdSuma").value= "la suima es: " + acPos;
	document.getElementById("txtIdProducto").value= "el producto es : "+acNeg;


}//FIN DE LA FUNCIÓN


/*estrategia de resolucion
1- declaro variables (respuesta/numero/acumulador de positivo y acumulador denegativos)

2- generar un bucle del tipo mientras el usuario quiera ( do-while)
2.1- pido numero
2.2- analizar el signo del numero ( generar un scope para los positivos y otros para negativos)
2.3- sumo los positivos / multiplico los negativos

3- mostrar los resultados
*/
