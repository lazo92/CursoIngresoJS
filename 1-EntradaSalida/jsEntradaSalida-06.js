/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() 
{
	//declaracion de variable
	let numero1;
	let numero2;
	let suma;

	//levanto los datos de las cajas de texto
	//ejemplo 1
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	//ejemplo 2
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	//realizo la operacion
	suma = numero1 + numero2;

	//muestro el resultado
	alert("la suma es " + suma);



}

