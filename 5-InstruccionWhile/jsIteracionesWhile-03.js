/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("ingrese el número clave.");
	
	while(clave != "utn750"){
		// cuando el dato sea invalido hace verdadera la condicion

		clave = prompt("clave invalida. Reingrese clave:");
	
	}

  alert("clave correcta!!!");	
	
}//FIN DE LA FUNCIÓN
