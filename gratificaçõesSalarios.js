let funcionarios = [
    {
    nome: 'Clarice',
	cargo: 'Aprendiz',
	salario: 2000.00,
	gratificacao: 100.00,
	idade: 20
    },
    {
    nome: 'Jean',
    cargo: 'Junior',
    salario: 4000.00,
    gratificacao: 200.00,
    idade: 25
    },
    {
    nome: 'Rachel',
	cargo: 'Analista',
	salario: 6000.00,
	gratificacao: 300.00,
	idade: 30
    },
    {
    nome: 'Bernardo',
	cargo: 'Supervisora',
	salario: 8000.00,
	gratificacao: 400.00,
	idade: 35
    },
    {
    nome: 'Marcilio',
    cargo: 'Chefe',
    salario: 10000.00,
    gratificacao: 500.00,
    idade: 40
    }
]

// 1) Mostre no console o nome da pessoa e quanto ela recebe em um texto formatado, para todos os itens do array, com uma string formatada.

funcionarios.forEach((item)=> console.log(`${item.nome} recebe ${item.salario + item.gratificacao} de salario e bonificação`))

// 2)Para o mesmo array de objetos pessoas, crie um novo array, com apenas os valores das gratificações

let gratificacoes = funcionarios.map((item)=> item.gratificacao)

console.log(gratificacoes)

// 3)Utilizando o map, crie uma função que retorna um array, com os valores dobrados do array de gratificações.

let gratificacoesDobro = gratificacoes.map((item)=> item*2)

console.log(gratificacoesDobro)

// 4) Crie um array com as pessoas (objeto) que recebem mais que 4mil reais de salario.

let salarioMaior4000 = funcionarios.filter((item)=>{
    if(item.salario>4000.00){
        return item
    }
})

console.log(salarioMaior4000)

// 5) Crie um array com as pessoas (objeto) que têm mais de 20 anos.

let idadeMaior20 = funcionarios.filter((item)=>{
    if(item.idade>20){
        return item
    }
})

console.log(idadeMaior20)

// 6) Exiba o valor total das gratificações. Utilize reduce.

let totalGratificacoes = gratificacoes.reduce((total, item)=> total+=item)

let totalGratificacoes2 = funcionarios.reduce((total, item)=> {
    total+=item.gratificacao
    return total
},0)

console.log(totalGratificacoes)
console.log(totalGratificacoes2)
