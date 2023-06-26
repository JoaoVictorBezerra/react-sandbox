const pessoa = {
	nome: "João Victor",
	idade: 22,
	telefone: ["13 99999-9999", "13 98888-8888"],
	endereco: {
		rua: "Rua Joao Ramalho",
		numero: 130,
		cidade: "São Vicente"
	}
}

const { rua, numero } = pessoa.endereco
// Ou também podemos utilizar da forma abaixo
// const { endereco : { rua, numero = 0 } } = pessoa

export function destructuring() {
    console.log(`${rua}, ${numero}`)
}