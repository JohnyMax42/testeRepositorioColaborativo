// // repetir 3x São Longuinho
// // a cada vez que chamar são longuinho ganhará 100 reais
// let vezes = 3
// let i = 1
// let acumulador = 0

// while(i<=vezes){
// console.log('São Longuinho')
// console.log('Ganhou 100')
// acumulador += 100
// i+=1
// }

// console.log(`tem ${acumulador} reais`)

// //escreva de 0 a 10 de 2 em 2

// let numero = 0

// while(numero<=10){
//     console.log(numero)
//     numero += 2
// }

// //soma dos numeros pares de 0 a 100

// let pares = 0
// let soma = 0

// while(pares<=100){
//     console.log(soma)
//     pares += 2
//     soma += pares
// }

// //soma dos numeros pares ou do divisiveis por 5 de 0 a 100

// let j = 0
// let soma2 = 0

// while(j<=100){
//     if(j%2==0 || j%5==0){
//         soma2 += j
//     }
//     console.log(soma2)
//     j+=1
// }

let senha = 'zoio'
let user = prompt('digite sua senha:')
let contagem = 1
let limite = 3

while(senha != user && contagem<limite){
     user = prompt(`senha incorreta, restam ${limite - contagem} tentativas, tente novamente:`)
     contagem += 1
}

if(senha == user){
    console.log('caminho feliz')
}
else{
    console.log('errou a senha três vezes')
}




