/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{ /*  let nombre;
	let edad;
	let sexo;
	let estado;
	let temp;  //35-40
	let nombreMaxTemp; 
	let maxTemp;
	let contJovatosViudos = 0;
	let contHombresFelices= 0;
	let contJovatosFiebre = 0;
	let contHSolteros =0;
	let acumEdadHSolteros=0;
	let flag = 1;
	let seguir;
	let promedio=0;


	do{
		nombre = prompt("ingrese nombre:");
		
		sexo=prompt("ingrese sexo M / F:").toLowerCase();
		while(sexo!='m'&&sexo!='f'){
			sexo=prompt("sexo invalido. ingrese sexo M / F").toLowerCase();
		}

		estado=prompt("ingrese estado: soltero / casado / viudo").toLowerCase();
		while(!(estado== "soltero"||estado=="casado"||estado=="viudo")){
			sexo=prompt("estado invalido. ingrese estado soltero / casado / viudo").toLowerCase;
		}

		edad=parseInt(prompt("ingrese edad"));
		while(!(edad>0)){
			edad=parseInt(prompt("edad invalida. ingrese edad"));
		} 

		temp=parseFloat(prompt("ingrese temperatura de 30° - 45°"));
		while(isNaN(temp)||temp<30||temp>45){
			temp=parseFloat(prompt("temperatura invalida. imgrese temperatura de  30° - 45°"));
		}

		if(flag || temp>maxTemp){
			maxTemp = temp;
			nombreMaxTemp = nombre;
			flag=0;
		}

		if(edad>=18 && estado=="viudo"){
			contJovatosViudos++;
		}

		if(sexo='m' && estado!="casado"){
			contHombresFelices++;
		}

		if(edad>60 && temp>38){
			contJovatosFiebre++;
		}

		if(sexo=='m'&&estado=="soltero"){
			acumEdadHSolteros+=edad;
			contHSolteros++;

		}

		seguir=prompt("quiere cargar mas pasajeros S/N").toLowerCase();
	}while(seguir=='s')
  

	document.write("A) la persona con mas temperatura se llama: " + nombreMaxTemp + "y tiene " + maxTemp + "grados <br>");
	document.write("b) mayores de edad viudos: "+ contJovatosViudos + "<br>");
	document.write("C) la cantidad de hombres solteros o viudos es: " + contHombresFelices +"<br>");
	document.write("D) personas de la tercera edad con mas de 38° es: " +contJovatosFiebre+ "<br>");
	
	if(contHSolteros==0){
	    document.write("E) No hay pasajeros hombres y solteros <br>");
    }else{
		promedio=acumEdadHSolteros/ contHSolteros;
	    document.write("E)promedio de edad de hombres solteros: " + promedio + "<br>");

	
	}

   */




















 
 let nombre;
 let edad;
 let genero; // F/M/NB 
 let vacuna; //sútnikV / AstraZeneca / otra
 let temp; // primera noche
 let maxTempPersona; //nombre y vacuna
 let maxtempvacuna;
 let contfem=0; //sputnikv
 let contNB=0; //astraZeneca u otra
 let contperFiebre=0;
 let contHombres=0;
 let acumEdHSanos=0;
 let promediofiebre;
 let promedioEdadH;
 let acumvacuna=0;
 let contEdad=0;
 let respuesta;
 let flag=1;
 let promEdadvacuna;
 let contA=0;
 let contS=0;
 let contOtros=0;
 let contador=0;

 

 do{

	nombre=prompt("ingrese nombre").toLowerCase();

	edad=parseInt(prompt("ingrese edad"));
	while(isNaN(edad)||edad<0){
		edad=parseInt(promp("edad invalida. ingrese edad;"));
		
	}

    genero=prompt("ingrese genero M / F / NB").toLowerCase();
	while(!(genero=='m'||genero=='f'||genero=='nb')){
		genero=prompt("genero invalido. ingrese genero M / F / NB").toLowerCase();
	}

	vacuna=prompt("ingrese vacuna aplicada: SputnikV / AstraZeneca / Otra").toLowerCase();
	while(vacuna=="sputnikv"&&vacuna=="astrazeneca"&&vacuna=="otra"){
	    vacuna= prompt("tipo no encontrada. ingrese vacuna aplicada: SputnikV / AstraZeneca / Otra").toLowerCase();
	}


	temp= parseFloat(prompt("ingrese su temperatura de la primera noche"));
	while(!(temp>=0)){
		temp=parseFloat(promp("temperatura invalida. ingrese temperatura"));
	}

	if(flag||temp>maxTempPersona){ //A
		maxTempPersona=temp;
		maxtempvacuna=vacuna;
		flag=0;
	}
	if(sexo="f" && vacuna=="sputnikv"){ //B
		contfem++;

	}
	
	if(sexo="nb" && vacuna!="sputnikv"){ //c
		contNB++;
	}

	if(vacuna=="astrazeneca"&&temp>38){ //D
		contperFiebre++;
	}
	
	if(sexo='m'&&temp<=37){              //E 
		acumEdHSanos+=edad
		contHombres++;
	}
	if(edad>0){
		contador++;
	}
	






	


    respuesta=prompt("ingresar mas datos S/N")
 }while( respuesta ==  's' );





 console.log(maxTempPersona);
 console.log(maxtempvacuna);
 console.log(contfem);
 console.log(contNB);
 console.log(contperFiebre);
 console.log(acumEdHSanos);
 console.log(contador);
 

} 
