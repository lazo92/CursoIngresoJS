/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	/*var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
     */

	let numero;
	let salida;

	numero = parseInt(prompt(" ingrese numero entre 0 y 9"));
   
	// en este caso se puede usar tanto OR "||" u AND "&&"
	while(numero<0 || numero>9){
		alert(" numero incorrecto");
		numero = parseInt(prompt("ingrese numero correcto!"));

	}
	alert("numero correcto!!")

	document.getElementById("txtIdNumero").value = numero 

	
}//FIN DE LA FUNCIÓN