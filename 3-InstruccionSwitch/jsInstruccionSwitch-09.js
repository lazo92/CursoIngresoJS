function mostrar()
{
	let precio = 15000;
	let estacion;
	let destino;
	let precioFinal;
	let descuento = 0;
	let aumento = 0;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	/*
	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				alert("el precio es " + (precio * 1.2));
			}else if(destino == "Cataratas" || destino == "Cordoba"){
				alert("el precio es: " + (precio * 1.1));
			}else{
				alert(" El precio es: " + (precio * 1.2));
			}
		break;
		
		case "Verano":
			if(destino == "Bariloche"){
				alert("El precio es " + (precio * 1.2));
			}else if(destino =="Cataratas"|| destino=="Cordoba"){
				alert("El precio es " + (precio * 1.1));
			}else{
				alert("El precio es " + (precio + 1.2));
			}
		break;

		case "Otoño":
		case "Primavera":
			if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata"){
				alert(" El precio es" + (precio * 1.1));
			}
			else{
				alert("El precio es " + precio)
			}
		break;
	}	*/
	
	
	switch(estacion){

		case "Invierno":
			if(destino == "Bariloche"){
				aumento = precio * .2;
			}else if( destino == "Mar del plata"){
				descuento = precio * .2;
			}else{
				descuento = precio * .1;
			}
			break;
		
		case "Verano":
			if(destino == "Bariloche"){
				descuento = precio *  .2;

			}else if(destino == "Mar del plata"){
				aumento = precio * .2;
			}else{
				aumento = precio * .1;
			}
			break;
		
		case "Otoño":
		case "Primavera":
			if(destino!= "Cordoba"){
				aumento = precio * .1;
			}
			break;
	}		

	precioFinal = precio + aumento - descuento;

    alert("El precio a pagar es: " + precioFinal);
			
		 
	
}