//nome do titular
//saldo

//3 operações básicas

//depósito

//saque
//saldo superior ao valor de saque
//saldo inferior ao valor de saque

//extrato

const titular = 'Johny' //prompt('nome do titular')
let saldo = 2000 //Number(prompt('valor do saldo'))
console.log(titular)
let senha = 'quintamarcha'
if(prompt('sua senha')==senha){
let operacao = Number(prompt(`Escolha uma operação: \nDepósito: 1 \nSaque: 2 \nExtrato: 3`))

switch (operacao) {
    case 1:
        saldo += Number(prompt('Informe o valor a ser depositado:'))
        console.log(`depositou`)
        break;
    case 2:
        let saque = Number(prompt(`informe o valor a ser sacado`))
        if(saque<=saldo){
            saldo -= saque
            console.log(`sacou ${saque} reais`)
        }
        else{
            console.log('saldo insuficiente')
        }
        break;
    case 3:
        console.log(`O saldo é de ${saldo} reais`)
        break;
    default:
        console.log(`Operação invalida`)
        break;
}
}
else{
    console.log('senha incorreta')
}