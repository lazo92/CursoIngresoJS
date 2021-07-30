function mostrar()
{
  let repeticiones = parseInt(prompt("ingrese el numero de repeticiones"));

  while(isNaN(repeticiones)|| repeticiones < 0){
      repeticiones= parseInt(prompt("ingrese numero valido"));
	  
  }
  for(let contador =0; contador< repeticiones; contador++){
	  console.log("Hola UTN FRA")
  }


}//FIN DE LA FUNCIÓN