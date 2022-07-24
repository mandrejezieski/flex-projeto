function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}


const meuArray = [1,22,55,67,30,2,4,7];


console.log(filtraPares(meuArray));