function mostrar()
{
	//tomo la hora
	 let hora;

	 hora = parseInt(document.getElementById("txtIdHora").value);

	 /* //con switch
	 switch(hora){
		 case 7:
		 case 8:
		 case 9:
		 case 10:
		 case 11:
			 alert("Es de mañana");
			 break;
		case 12:
	    case 13:
		case 14:
		case 15:
		case 16:					
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("ES de noche");
			break;
		default:
		    alert("No existe");
	 };*/

	
	//con if else
	
	if(hora >= 7 && hora <= 11){
		alert("es de mañana");	
	}
	else if(hora >= 12 && hora <= 19){
		alert("Es de tarde");
	}
	else if(hora >= 20 && hora <= 24 || hora >= 1 && hora <= 6){
		alert("Es de noche");
	}
	else{
		alert("La hora no existe");
	}

		 
	 

}//FIN DE LA FUNCIÓN