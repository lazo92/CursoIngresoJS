function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Cataratas":
		case "Mar del plata":	
			alert("CALOR");
			break;
	    default:
			alert("FRIO");

	}

}//FIN DE LA FUNCIÓN