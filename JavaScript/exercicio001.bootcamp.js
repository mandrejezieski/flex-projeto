const input = '6 6 6 6';
let lines = input.split('\n');

const soma = lines.shift().split(' ').map(Number).reduce((n1,n2)=>n1+n2);
console.log(soma -3);