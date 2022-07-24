const btnIncrementar$ = document.getElementById("Incrementar");
const btnDecrementar$ = document.getElementById("Decrementar");
const btnZerar$ = document.getElementById("Zerar");
const p$ = document.getElementById("contador");

let contador = 0;

p$.innerHTML = contador;

btnIncrementar$.addEventListener("click", function(){
    p$.innerHTML= ++contador;
});

btnDecrementar$.addEventListener("click", function(){
    p$.innerHTML= --contador;
});

btnZerar$.addEventListener("click", function(){
    p$.innerHTML= contador = 0;
});



console.log("btnIncrementar$");
console.log("p$");
