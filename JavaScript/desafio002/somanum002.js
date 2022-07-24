let button = document.getElementById("button1");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function somanum(num1, num2){
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    } else{
        return Number(num1) + Number(num2)
    }
    
}

button1.addEventListener('click', () =>{
    console.log(somanum(input1.value, input2.value ));
})

function chamar(){
    document.getElementById('digito').innerHTML = somanum(input1.value, input2.value);
}