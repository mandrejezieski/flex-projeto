let button = document.getElementById("button1");
let input1 = document.getElementById("input1");//as HTMLInputElement;
let input2 = document.getElementById("input2"); //as HTMLInputElement;

let devPrint= true;
let frase= 'O valor é: '

function adicionarNumero(numero1, numero2, devPrint, frase){
    let resultado = numero1 + numero2;
    if(devPrint){
        console.log(frase + resultado);
    }
    return numero1 + numero2
}

if(button){
    button.addEventListener('click', () =>{
        if(input1 && input2){
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devPrint, frase));
        }
    })
}

function chamar(){
    document.getElementById('digito').innerHTML = adicionarNumero(Number(input1.value), Number(input2.value), devPrint, frase);
}
     