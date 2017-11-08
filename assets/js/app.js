
 function add(){ /*almacenando valores*/

  var cont = document.getElementById("cont"); /*llamando contenedor para rescatar informacion*/
  var comments = document.getElementById("comment");/*rescatando el valor del id tengo q almacenar y luego rescatar el valor*/
  //document.getElementById("comment").value =" "; /*agrega el valor y despues lo limpia lo deja vacio*/
  var newComments = document.createElement("div");/*crear contenedor comentario*/
  var paragraph = document.createElement("p");/*creando solo la etiqueta p, no el contenido*/
  paragraph.classList.add("color");/*creando clase del elemento p*/
  var nodoText =document.createTextNode(comments)/*creando el nodo de texto*/
  paragraph.appendChild(nodoText); /*se llama al padre y traspasa la informacion al p*/

  newComments.appendChild(paragraph);/*algo tiene que contener a parrafo*/
  cont.appendChild(newComments); /*algo tiene que contener a newComments*/



var commentsText = comments.value.length;
console.log(commentsText)
var maxlenght =140;
var charCount= document.getElementById("counter");
var resto = maxlenght - commentsText;
charCount.textContent =resto;
}

// function contador(){
//   if (text == ""){
//   boton.disabled = true;
// }else if (long > max){
//    boton.disabled = true;
//  }else if ( (long > 120){
//    valor.style.color = "green";
//  }else if ( (long > 130){
//    valor.style.color = "yellow";
//  }else if(long > 140)
//   console.log("mostrar el contador en negativo");

// }
