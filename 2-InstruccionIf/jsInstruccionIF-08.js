function mostrar()
{
	
	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if ( edad >= 18 && estado == "Soltero"){
		alert(" ES soltero y no es menor");
	}


}
//FIN DE LA FUNCIÓN