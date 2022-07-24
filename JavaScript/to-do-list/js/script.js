function Adicionar(){
 let text = document.getElementById("texto").value;
 let list = document.getElementById("lista").innerHTML;

 list += "<li>" +text+ "</li>"
  
 document.getElementById("lista").innerHTML = list;

 document.getElementById("texto").value = null;
}

function Deletar(){
    let text = document.getElementById("texto").value;
 let list = document.getElementById("lista").innerHTML;

 list -= "<li>" +text+ "</li>"
  
 document.getElementById("lista").innerHTML = null;

 document.getElementById("texto").value = null;
}