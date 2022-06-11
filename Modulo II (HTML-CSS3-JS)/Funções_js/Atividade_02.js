const pessoa = {
    nome: "Pedro",
    idade: 22,
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa, 10))
console.log(calculaIdade.apply(pessoa, [10]))