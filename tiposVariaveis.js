let variavelTipoLet = 'coisa'

var variavelTipoVar = 'coisa2'

const variavelTipoConst = 'Johny'

variavelTipoLet = 1

var variavelTipoVar = 25

let = variavelTipoVar = 'coisa3'

//declaração e atribuição de valor
let nome = prompt('digite o nome:')

let idade = prompt('digite a idade:')

idade = Number(idade)

let endereco = prompt('digite o endereço:')

//exibição de informações no console
//"fulano tem 19 anos e mora em fortaleza"
console.log(nome + ' tem ' + idade + ' anos e mora em ' + endereco)
console.log(`${nome} tem ${idade} anos e mora em ${endereco}`)

//"Daqui a 10 anos fulano terá 29 anos"
console.log("daqui a 10 anos " + nome + " terá " + (idade+10) + " anos")
console.log(`daqui a 10 anos ${nome} terá ${idade+10} anos`)

let saldo = 2500.50

let deposito = prompt('valor do deposito')
deposito = Number(deposito)
saldo += deposito

console.log(`${nome} depositou ${deposito} reais e seu saldo é de ${saldo} reais`)

