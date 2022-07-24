function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

const pessoa = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'pug',
};

console.log(calculaIdade.call(pessoa, 30));
console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 30));
