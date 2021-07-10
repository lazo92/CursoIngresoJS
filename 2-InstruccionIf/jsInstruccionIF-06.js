function mostrar() {
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert("mayor de edad");
	}

	if (edad >= 13 && edad <= 17) {

		alert(" es adolecente");
	}

	if (edad <= 12) {


		alert("es un niño");
	}


}//FIN DE LA FUNCIÓN