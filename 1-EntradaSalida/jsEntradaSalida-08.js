/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
//declaracion de variable
let dividendo;
let divisor;
let division;

//levanto los datos de las cajas de texto
dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);


//realizo la operacion
division = dividendo % divisor;

//muestro el resultado
alert("la division es " + division);

}
