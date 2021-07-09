function mostrar() {
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	//con un operador relacional
	/*if (edad >= 13 && edad <= 17) {
		alert("es adolecente");
	}*/

	 //otro ejemplo
	 if (!( edad < 13 || edad > 17 )) {
		alert("es adolecente");
	 }

	//de forma larga
	/*if( edad >= 13 ){
		if( edad <= 17)
	  {
		 alert("Es adolecente");
	  }
	}*/



}//FIN DE LA FUNCIÓN