function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	if( edad >= 18 ){
		//si es mator de edad
		alert("es mayor de edad");
	}

	else{
	alert("es menor de edad");
    }
	/* if (edad < 18) {//si es menor de edad
		alert("es menosr de edad");
	} 
	    else {
			alert("esmator de edad");
		}*/
}//FIN DE LA FUNCIÓN