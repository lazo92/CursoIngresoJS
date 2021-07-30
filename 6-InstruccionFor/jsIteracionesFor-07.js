function mostrar()
{
	let num;
    let div =0;

	 num = parseInt(prompt("Ingrese el numero."));
	 while(isNaN(num)|| num<0){
		num=parseInt(prompt("numero incorrecto. ingrese numero"));
	}

	for (let i = 1; i <= num; i++) {
		if (num % i) {
			continue;
		}
		console.log(i);
		pares++;
	}
	console.log("Cantidad de numero pares: " + pares);

}//FIN DE LA FUNCIÓN