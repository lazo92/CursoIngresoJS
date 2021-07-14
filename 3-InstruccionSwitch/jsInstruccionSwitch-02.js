function mostrar()
{
	//tomo el mes
	let mes

	mes = document.getElementById("txtIdMes").value;

    /* utilizando if y else if

	if (mes == "Enero" ||  mes == "Febrero"||  mes == "Marzo"||  mes == "Abril"||  mes == "Mayo" ||  mes == "Junio"){
		alert(" falta para invierno");
	}else if (mes == "Julio" ||  mes == " Agosto"){
		alert(" abrigate que hace frio");
	}else{
		alert( " ya pasamos el frio, ahora calor!!");	
	}*/

	//utilizando switch
	switch(mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		default:
			alert("Ya pasamos el invierno");						

	}

}//FIN DE LA FUNCIÓN