// let enderecoArray = ['rua', 'bairro', 'cidade', 'estado', 'cep']

// for (let i = 0; i < enderecoArray.length; i++) {
//     console.log(enderecoArray[i])
// }

// // for (const key in object) {
// //     if (Object.hasOwnProperty.call(object, key)) {
// //         const element = object[key];
        
// //     }
// // }

// let endereco = {rua: 'rua', bairro: 'bairro', cidade: 'cidade', estado: 'estado', cep: 'cep'}

// console.log(enderecoArray[0])
// console.log(endereco.rua)

// //crie um objeto chamado pessoa coma as propriedades nome, idade, altura e peso

// let pessoa = {
//     nome: 'nome',
//     idade: 'idade',
//     altura: 1.7,
//     peso: 60,
//     calcularIMC: function(){ return pessoa.peso/(pessoa.altura**2)},
//     // chaves: pessoa.keys,
//     // tamanhoObjeto: pessoa.length
// }

// for(let chave of pessoa){
//     console.log(chave)
// }

// console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Altura: ${pessoa.altura}, Peso: ${pessoa.peso}`)

// console.log(pessoa)

// pessoa.corFavorita = 'Azul'

// delete pessoa.idade

// console.log(pessoa.keys)

// let produto = {nome: 'camiseta', preco: 39.90, cor: 'azul', tamanho: 'M', disponibilidade: true, calcularDesconto: function(desconto){produto.preco*(1-desconto/100)}}

// let produto2 = ['camiseta', 39.90, 'azul', 'm', true]
// let produtoComDesconto = produto.calcularDesconto(0)

//crie um array com cinco produtos
//cada produto deve ser um objeto com as propriedade nomes, preco, cor, tamanho e disponibilidade
//crie um metodo calcular desconto que recebe um numero e retorna o preço com desconto
//crie um metodo alterar disponibilidade. se a disponibilidade estiver true, altere para false e vice-versa

// let atributo = []
// for (let i = 0; i < 5; i++) {
//     atributo[i] = prompt(`${i+1}º atributo`)
// }
// console.log(atributo)

let produtos = []
for (let i = 1; i <=2; i++) {
    let produto = {
        nome: prompt(`nome do ${i}º produto`),
        preco: prompt(`preço do ${i}º produto`),
        cor: prompt(`cor do ${i}º produto`),
        tamanho: prompt(`tamanho do ${i}º produto`),
        disponibilidade: Boolean(prompt(`disponibilidade do ${i}º produto`)),
        calcularDesconto: function(desconto=0){
            return atribuicao.preco*(1-desconto/100)
        },
        alterarDisponibilidade: function(){
            if(produto.disponibilidade){
                produto.disponibilidade = false
            }else{
                produto.disponibilidade = true
            }
        }
    }
    console.log(produto)
    produtos.push(produto)
}
console.log(produtos)
let produto2 = JSON.stringify(produtos[1])
console.log(produto2)


// conta bancaria
// atributos: senha, agencia, numero da conta, saldo, titular e tipo
// metodos: sacar, depositar, consultarSaldo, fazerEmprestimo

