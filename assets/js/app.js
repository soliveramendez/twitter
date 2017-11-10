 function add(){ /*almacenando valores*/
 var comments = document.getElementById("comment").value;/*rescatando el valor del id tengo q almacenar y luego rescatar el valor*/
 if (comments == null || comments.length==0 || comments.length >140){
 alert ("Ingrese un comentario válido");
 return false;
 }
 document.getElementById("comment").value =""; /*agrega el valor y despues lo limpia lo deja vacio*/
 var paragraph = document.createElement("p");/*creando solo la etiqueta p, no el contenido*/
 var nodoText =document.createTextNode(comments);/*creando el nodo de texto le traspaso lo que el usuario escribe*/
 paragraph.appendChild(nodoText); /*se llama al padre y traspasa la informacion al p*/
 var text = document.getElementById("text"); /*llamando contenedor para rescatar informacion*/
 text.appendChild(paragraph);
 var num = document.getElementById("counter")
 num.innerHTML=140;
 paragraph.oppenChild(d);
 }

  /*contador*/
 function contar(){
 var counter = document.getElementById("counter");/*llamando al id counter*/
 var maxlenght =140;
 var comments = document.getElementById("comment").value;
 var commentsText = comments.length;
 counter.innerHTML = maxlenght-commentsText;
 var total = maxlenght-commentsText;

  if (total <=20 && total > 10){
  btn.disabled = false;
  comment.style.color ="yellow";
  }
  if (total <= 10){
  comment.style.color ="red";
  btn.disabled = false;
}
}
/*alto textarea*/
 comment.addEventListener('keydown', function autosize(){
 var el = this;
 setTimeout(function(){
 el.style.cssText = 'height:auto; padding:0';
 // for box-sizing other than "content-box" use:
 // el.style.cssText = '-moz-box-sizing:content-box';
 el.style.cssText = 'height:' + el.scrollHeight + 'px';
 },0);
})

/*fecha y hora*/
 var fecha = new Date();
 var date = fech.getDate();
 var month = fecha.getMonth();
 var year = fecha.getFullYear();
 var hours = fecha.getHours();
 var minutes = fecha.getMinutes();
 var fullDate = date +'/'+ month +'/'+ year +' '+ hours +':'+ minutes;
