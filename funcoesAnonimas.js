// function nomeFuncao(){
//     console.log('fiz algo')
// }

// function nomeOutraFuncao(x = '1', y){
//     console.log()
// }

// //funções de seta
// console.log(()=>'fiz algo')

// //callback
// function calculadora(n1, n2, funcao){
//     return funcao(n1, n2)
// }

// function imprimir(algo){
//     console.log(algo)
// }

// function somar(n1, n2, funcao){
//     return n1 + n2
// }

// let soma = calculadora(2, 2, somar)

// calculadora(10, 3, imprimir)

function dizerOiRecife(nome){
    console.log(`${nome}, eiii boy!`)
}

function dizerOiFortaleza(nome){
    console.log(`${nome}, eiii mahhh!`)
}

function dizerOiSalvador(nome){
    console.log(`${nome}, eiii pivete!`)
}

function falarCidade(nome, funcao){
    funcao(nome)
}

falarCidade('Cleito', dizerOiRecife)
falarCidade('Cleito', dizerOiFortaleza)
falarCidade('Cleito', dizerOiSalvador)


//exemplo artista

// function calculadora(num1, num2, operacao){
//     num1 = Number(prompt(`primeiro numero`))
//     num2 = Number(prompt(`segundo numero`))
//     operacao = prompt(`tipo de operação`)
//     if(operacao == '+'){
//         return alert(num1+num2)
//     }
//     else if(operacao== '-'){
//         return alert(num1-num2)
//     }
//     else if(operacao=='*'){
//         return alert(num1*num2)
//     }
//     else if(operacao=='/'){
//         return alert(num1/num2)
//     }
//     else{
//         return alert('Operação invalida')
//     }
// }

// calculadora()

function artista(nome, tipo){
    tipo(nome)
}

function pintor(nome){
    console.log(`${nome} é um pintor`)
}

function musico(nome){
    console.log(`${nome} é um `)
}

function escritor(nome){
    console.log(`${nome} é um `)
}

artista('Rafaello', pintor)

//função que retorne a soma do numero inicial até um numero final recebido

function somaConta(vI=0, vF=0){
    let somaTotal = 0
    for(i=vI; i<=vF; i++){
    somaTotal += i
}
return somaTotal
}

let escolhaNumeros = somaConta(Number(prompt(`Primeiro numero`)), Number(prompt(`Segundo numero`)))

console.log(escolhaNumeros)

console.log(somaConta(1,100))

console.log(somaConta())