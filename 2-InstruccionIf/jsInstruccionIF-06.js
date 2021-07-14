function mostrar() {
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

/*
	if (edad >= 13 && edad <= 17) {
	alert(" es adolecente");
	}

	else {
		if (edad >= 18) {
		alert("mayor de edad");
		}

		else {
		alert("es un niño");
		}
	}*/

	//con else if
	if( edad < 13){
		alert (" es niño");
	}else if( edad < 18){
		alert(" es adolecente");
	}else if ( edad <= 65){
		alert(" es adulto");
	}else{
		alert ("es adulto mayor");
	}




}//FIN DE LA FUNCIÓN