function mostrar()
{
	let num,
	pares=0;

	
	num = parseInt(prompt("Ingrese el numero."));
	while(isNaN(num)|| num<0){
	   num=parseInt(prompt("numero incorrecto. ingrese numero"));
	for (let i = 1; i <= num; i++) {
		if (i % 2) {
			continue;
		}
		console.log(i);
		pares++;
	}
	console.log("Cantidad de numero pares: " + pares);


}//FIN DE LA FUNCIÓN