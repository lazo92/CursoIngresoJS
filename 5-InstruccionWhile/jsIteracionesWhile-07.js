/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let contador = 0;
	let acumulador = 0;
	let promedio;
	let respuesta

	do{
		numero = parseInt(prompt("ingrese el primer numero"));
		acumulador  = acumulador + numero;
		contador++;

		respuesta = prompt("seguir ingresando numeros? (s/n)");
	}while(respuesta =="s");

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	





}//FIN DE LA FUNCIÓN