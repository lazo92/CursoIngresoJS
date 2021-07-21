function mostrar()
{
	//tomo la hora
	
	let hora;
	
	hora = parseFloat(document.getElementById("txtIdHora").value);
   
	
	/*// con switch
	switch(hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:			
			alert("Es de mañana");
			break;

	}*/

	// con if
	if(hora>=7 && hora<=11){
		alert(" es de mañana");
	}



}//FIN DE LA FUNCIÓN