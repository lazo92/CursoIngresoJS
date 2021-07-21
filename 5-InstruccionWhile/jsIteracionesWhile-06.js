function mostrar()
{
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
}//FIN DE LA FUNCIÓN