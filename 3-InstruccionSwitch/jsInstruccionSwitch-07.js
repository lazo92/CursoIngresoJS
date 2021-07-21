function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;
	/*
	switch (destino){
		case "Bariloche":
			alert("Esta al oeste");
			break;
		case "Cataratas":
			alert(" Esta al norte");
			break;
		case "Mar del plata":
		    alert(" Esta al este");
		    break;
		case "Ushuaia":
			alert("Esta al sur");
			break;		
	}*/

	if(destino == "Bariloche"){
		alert("Esta al oeste");
	}else if(destino == "Cataratas"){
		alert(" Esta al norte");
	}else if( destino == "Mar del plata"){
		alert("Esta al este");
	}else{
		alert("Esta al sur");
	}

}//FIN DE LA FUNCIÓN