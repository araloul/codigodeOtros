var formulario = document.querySelector("#form"); //AGREGUÉ ;

formulario.onsubmit = function(e) {
  e.preventDefault();/* agregué Default*/ 
  
  var n = formulario.elements[0];/*PUNTO Y COMA*/
  var e = formulario.elements[1];}/*PUNTO Y COMA*/
  var na = formulario.elements[2];/*PUNTO Y COMA*/

  var nombre = n.value;/*PUNTO Y COMA*/
  var edad = e.value;/*PUNTO Y COMA*/

  var i = na.selectedIndex;/*PUNTO Y COMA*/
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  /*cambie de 120 a 100*/
  if (edad < 18 || edad > 100) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad >= 18 
    && edad <= 120) ) {
  agregarInvitadoLista(nombre, edad, nacionalidad);
    
  };/*PUNTO,coma, =*/






/*Agregre Lista a la funcion*/
function agregarInvitadoLista(nombre, edad, nacionalidad) {
  var lista = document.getElementById("lista-de-invitados");/*Agregué getElementById */

  var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);



var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"

elementoLista.appendChild(botonBorrar); 
botonBorrar.onclick = function (){
  elementoLista.remove();
};
}/*Cmbie el document.body modifique  la funcion*/ 
 /*Lo cambie de lugar */
 



  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


