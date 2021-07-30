/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar(){

	let numero;
	let acPost=0;
	let acNeg=0;
	let contPost=0;
	let contNeg=0;
	let contCero=0;
	let contPares=0;
	let promPost;
	let promNeg;
	let promedio;
	let seguir;


	do{
		while(isNaN(numero)){
			numero = parseInt(prompt("esto no es un numero. Ingrese numero"));
		}

		if(numero>0){
			acPost= acPost + numero;
			contPost++;

		}else if(numero < 0 ){
			acNeg = acNeg + numero;
			contNeg++;
			
		}else{
			contCero++;
		}
		


		

		seguir = prompt("seguir ingresando numeros? (s/n)").toLowerCase();
	}while(seguir == 's');



}//FIN DE LA FUNCIÓN

// estrategia de resolucion
// 1- declarar valiables
// --numero / acumulador negativos / acumulador positivos / contador positivos / 
// contador negativos /contador de ceros / contador de pares / promedio positivo /
// promedio negativos / diferencia / respuesta

// 2- genero un bucle del tipo mientras el usuario quiera (do-while)
// ----cosas q se repiten (van adentro del bucle)
// 2.1- pido el numero
// 2.2- valido que sea un numero
// 2.3- identifico el signo del numero (positivo / negativo / cero)
// 2.3.1- positivo--> acumulo el numero y lo cuento
// 2.3.2- negatico--> acumulo el numero y lo cuento
// 2.3.3- cero--> lo cuento
// 3- me fijo si el numero es par
// 3.1- es par --> lo cuento
//------------------------------------------------
// cosas q ytengo q hacer despues del bucle
// 4- calculo el promedio de los positivos
// 4.1- calculo el promedio de los negativos
// 4.2 calculo la diferencia entre cantidad de positivos y cantidad de negativos
// 5- muestro los resultados