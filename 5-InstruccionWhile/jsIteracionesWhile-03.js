/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

    clave= prompt("ingrese clave");
    
    while(clave != "utn750"){
        //console.log(clave) poniendo esto se puede mostrar las claves ingresadas menos la primera  
        // cuando el dato sea invalido hace verdadera la condicion
        clave= prompt("clave incorrecta. ingrese clave");
    }
    alert("clave correcta");
}//FIN DE LA FUNCIÓN
