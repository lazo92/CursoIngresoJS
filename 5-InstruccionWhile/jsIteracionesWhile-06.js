function mostrar()
{
    /*
let n1;
let n2;
let n3;
let n4;
let n5;
let suma;
let promedio;

n1 = parseInt(prompt("ingrese numero"));
n2 = parseInt(prompt("ingrese numero"));
n3 = parseInt(prompt("ingrese numero"));
n4 = parseInt(prompt("ingrese numero"));
n5 = parseInt(prompt("ingrese numero"));

suma = n1 + n2 + n3 + n4 + n5;
promedio = suma / 5;

document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio;
*/


    let numero;
	let contador = 0;
	let acumulador = 0;
	let promedio;

    while(contador<5){
        numero = parseInt(prompt("ingrese el primer numero"));
        acumulador = acumulador + numero;
        contador++;
    }
    promedio = acumulador / 5;

    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = promedio;



}//FIN DE LA FUNCIÓN