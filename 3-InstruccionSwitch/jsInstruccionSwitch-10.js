function mostrar()
{
	let estacion;
	let destino;
	let resultado


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
		   if(destino == "Bariloche"){
		   resultado ="Se viaja";
		   }else{
			resultado = "no se viaja";
		   }
		break;
		
		case"Verano":
		   if(destino == "Mar del plata"|| destino == "Cataratas"){
			resultado = "se viaja";
		   }else{
			resultado = "No se viaja";
		}
		break;

		case "Primavera":
		   if(destino == "Bariloche"){
			resultado = "NO se viaja";
		  }else{
			  resultado = "se viaja";
		  }
		
		break;

		case "Otoño":
			resultado = "se viaja";
	    break;	
	}
	alert(resultado)
	

}//FIN DE LA FUNCIÓN