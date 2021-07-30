/*
al presionar el botón 
pedir un número entre 0 y 10 inclusive.*/
function mostrar()
{
	let numero;

    numero= parseInt(prompt("ingrese numero entre 0 y 10"));
   
   // en este caso se puede usar tanto OR "||" u AND "&&"(si son mas de 3 diferencias mejor usar "OR")
    
   while(isNaN(numero) || numero<0 || numero>10){
        
        numero=parseInt(prompt("numero invalido. ingrese numero"));
        
    }
    alert("numero correcto");

    document.getElementById("txtIdNumero").value= numero




	
}//FIN DE LA FUNCIÓN