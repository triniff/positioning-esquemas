/*PRIMER CUADRADITO*/
// crear un div caja-abuelo que contendra una caja-padre centrada que tendra una caja-hijo en la esquina superior izquierda

function cajaUno (){
	//CREANDO ELEMENTOS
	var cajaAbuelo = document.createElement("div");
	var cajaPadre = document.createElement("div");
	var cajaHijo = document.createElement("div");

	//ASIGNANDO ATRIBUTOS
	cajaAbuelo.classList.add("abuelo", "uno");
	cajaPadre.classList.add("padre", "uno");
	cajaHijo.classList.add("hijo", "uno")


	//ASIGNANDO PADRES
	var body =  document.getElementsByTagName("body")[0];
	cajaPadre.appendChild(cajaHijo)
	cajaAbuelo.appendChild(cajaPadre);
	body.appendChild(cajaAbuelo);

}
cajaUno();

function cajaDos(){
	//CREANDO ELEMENTOS
	var cajaAbuelo = document.createElement("div");
	var cajaPadre = document.createElement("div");
	var cajaHijo = document.createElement("div");

	//ASIGNANDO ATRIBUTOS
	cajaAbuelo.classList.add("abuelo", "dos");
	cajaPadre.classList.add("padre", "dos");
	cajaHijo.classList.add("hijo", "dos")


	//ASIGNANDO PADRES
	var body =  document.getElementsByTagName("body")[0];
	cajaPadre.appendChild(cajaHijo)
	cajaAbuelo.appendChild(cajaPadre);
	body.appendChild(cajaAbuelo);
}
cajaDos();