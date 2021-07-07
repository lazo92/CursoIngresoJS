/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	//declaracion de variable
	let numero1;
	let numero2;
	let suma;

	//levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	//realizo la operacion
	suma = numero1 + numero2;

	//muestro el resultado
	alert("la suma es " + suma);


}

function restar() {
	//declaracion de variable
	let numero1;
	let numero2;
	let resta;

	//levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	//realizo la operacion
	resta = numero1 - numero2;

	//muestro el resultado
	alert("la resta es " + resta);


}

function multiplicar() {
	//declaracion de variable
	let numero1;
	let numero2;
	let producto;

	//levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	//realizo la operacion
	producto = numero1 * numero2;

	//muestro el resultado
	alert("el productoa es " + producto);

}

function dividir() {
	//declaracion de variable
	let numero1;
	let numero2;
	let division;

	//levanto los datos de las cajas de texto
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	//realizo la operacion
	division = numero1 / numero2;

	//muestro el resultado
	alert("la division es " + division);

}

