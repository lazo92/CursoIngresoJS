/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo
    let ancho
    let rectanguloalambre

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    rectanguloalambre = largo * ancho * 3;

    alert(rectanguloalambre + " metros de alambre ");

}
function Circulo() {
    let radio
    let circuloalambre

    radio = parseFloat(document.getElementById("txtIdRadio").value);
    circuloalambre = (Math.pow(radio , 2 ) * Math.PI) * 3;

    alert(circuloalambre + " metros de alambre");

    
}
function Materiales() {

    let largo 
    let ancho 
    let cemento
    let cal

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    cemento = largo * ancho * 2;
    cal = largo * ancho * 3;

    alert( cemento + " bolsas de cemento y " + cal + " bolsas de cal");



}