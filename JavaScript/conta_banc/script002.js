class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return console.log('Seu saldo é de: R$ ' + this._saldo);
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
        return console.log('Seu saldo é de: R$ ' + this._saldo);
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
        return console.log('Seu saldo é de: R$ ' + this._saldo);
	}

	get cartaoCredito() {
		return this._cartaoCredito
	}

    sacarcartao(valor){
        if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return console.log('Seu saldo é de: R$ ' + this._saldo);
    }

    depositarcartao(valor) {
		this._saldo = this._saldo + valor;
        return console.log('Seu saldo é de: R$ ' + this._saldo);
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}
