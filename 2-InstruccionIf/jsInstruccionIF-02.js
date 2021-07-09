function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);
    //otra forma tambien seria if( edad > 17) funciona igual
	if( edad >= 18 )
	{
		alert( "mayor de edad" );
	}
	

}//FIN DE LA FUNCIÓN