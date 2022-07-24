class contBanc{
    constructor(agencia, num, tipo){
        this.agencia = agencia;
        this.num = num;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
        return this._saldo;
    }

    sacar( valor){
        if(valor > this._saldo){
            console.log("Saque negado. Saldo insuficiente.");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar( valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    set saldo( valor){
        this._saldo= valor;
    }

    get saldo(){
        return this._saldo;
    }
}

class contaCorrente extends contBanc{
    constructor(agencia, num, cartaoCredito);
    suoer(agencia, num);
    this.tipo = 'conta corrente';
    this._cartaoCredito = cartaoCredito;

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupança extends contBanc{
    constructor(agencia, num);
    suoer(agencia, num);
    this.tipo = 'conta poupança';
}

class contaUniversitaria extends contBanc{
    constructor(agencia, num);
    suoer(agencia, num);
    this.tipo = 'conta universitária';
    
    sacar(valor){
        if(valor> 500){
            return 'operaçãp negada. Seu valor máximo de saque é de R$ 500,00.'
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaconta = new contaCorrente(1, 211, true);
const contaUni = new contaUniversitaria(2, 323);