/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {

	/*let importe;
	let resultado;


	//modo acotado que funciona con crome
	importe = txtIdImporte.value;

	//modo completo que funciona con todos los navegadores
	importe = parseInt(document.getElementById("txtIdImporte").value);

    resultado = importe - importe * .25; // es igual a "resultado = importe * .75;"


	document.getElementById("txtIdResultado").value = resultado;*/


// si en caso no te dan que porcentaje sumar o restar 
 
 let importe;
 let porcentaje;
 let descuento;
 let resultado;
 let mensaje;
 
 importe = parseFloat(document.getElementById("txtIdImporte").value);

 porcentaje =parseFloat(prompt("ingrese porcentaje"));
 //porcentaje = parseFloat(porcentaje);

 descuento = importe * porcentaje/100;

 resultado= importe - descuento;
 mensaje = "importe final:" + resultado  + " con " + descuento + " de descuento";

 document.getElementById("txtIdResultado").value = mensaje;

}
