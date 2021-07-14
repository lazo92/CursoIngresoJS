function mostrar()
{

	let mes

	mes = document.getElementById("txtIdMes").value;

    
	switch(mes){
		case "Enero":
			alert("que comiences bien el año");
			break;
		case "Marzo":
			alert(" A clases!!");
			break;	
		case "Julio":
			alert(" se viene las vacaciones!!");
			break;
		case "Diciembre":
			alert(" felices fiestas");
			break;

	}






/*
	if ( mes == "Enero" ){
	alert("que comiences bien el año");
    }else if( mes == "Marzo"){
		alert(" A clases");
	}else if ( mes =="Julio"){
			alert("Se viene las vacaciones");
	}else(mes == "Diciembre"){
			alert(" felices fiestas");
		}
	}
*/


}//FIN DE LA FUNCIÓN