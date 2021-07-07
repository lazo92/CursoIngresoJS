/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let aumento;
let nuevosueldo;

sueldo = parseInt(document.getElementById("txtIdSueldo").value);
aumento = sueldo * .1
nuevosueldo = sueldo + aumento;
document.getElementById("txtIdResultado").value=nuevosueldo;

}

//estrategia de resolucion
//declaracion de variables sueldo nuevosueldo aumento
//leer el sueldo
//calculo el aumento
//muestro el resultado