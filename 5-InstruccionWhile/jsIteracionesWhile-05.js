/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

    // usar toLowerCase() para comvertir las letras en minusculas   y toUpperCase() para comvertirla ne mayusculas
    sexo=prompt("ingrese sexo m o f").toLowerCase();

    // no utilisar OR "//" ya que produce un bucle, usar mejor "&&"
	/* a menos que se utilice la negacion  
	while(!(sexo == "f" || sexo == "m"))*/

    while(sexo!= 'm' && sexo!='f'){

        sexo=prompt("sexo incorrecto. ingrese sexo").toLowerCase();
    } 
    alert("sexo correcto");

    document.getElementById("txtIdSexo").value= sexo;



	
} //FIN DE LA FUNCIÓN