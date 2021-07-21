function mostrar()
{
	//tomo el mes
	
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){

		case "Febrero":
			alert(" tiene 28 dias");
			break
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tienen 30 dias");
			break
		default:
			alert("Tienen 31 dias ")		

	}
	
	



}//FIN DE LA FUNCIÓN