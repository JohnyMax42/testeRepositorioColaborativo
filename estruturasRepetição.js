// //1. determine e mostre os cinco primeiros multiplos de 3, maiores que 0

// let multiploLimite = 3
// let vezes = 5
// for(let i=1; i<=(multiploLimite*vezes); i++){  
//     if(i%multiploLimite==0){
//         console.log(i)
//     }
// }

// //2. com while, uma contagem regressiva de 10 a 0 com mensagem "FIM!" após finalizar

// regreTop = 10
// regreBot = 0
// regreTax = 1
// while (regreTop>regreBot){
//     console.log(regreTop)
//     regreTop-=regreTax
// }
// console.log('Fim!')

// //3. declare um inteiro, inicialize com 0, incremente de 1000 em 1000 imprimindo o valor na tela até que o valor seja 100000(cem mil)

// num1 = 0
// while (num1<100000) {
//     num1+=1000    
//     console.log(num1)
// }

// //4. usuario deve digitar 10 valores e o programa deve soma-los

// let valor = 0
// let soma = 0
// for(i=1; i<=10; i++){
//     valor = Number(prompt(`Digite o ${i}º valor:`))
//     soma += valor
// }
// console.log(`a soma final é de ${soma}`)

// //5. um programa que leia 10 números e escreva o menor e o maior valor lido

// let numA = Number(prompt(`Digite o 1º numero:`))
// let menor = numA
// let maior = numA
// for(i=2; i<=10; i++){
//     numA = Number(prompt(`Digite o ${i}º numero:`))
//     if(menor>numA){
//         menor = numA
//     }
//     if(maior<numA){
//         maior = numA
//     }
// }
// console.log(`o menor valor é ${menor} e o maior valor é ${maior}`)

// //6. um programa que leia um numero inteiro N e que depois imprima os N primeiros números naturais ímpares

// let n = Number(prompt(`qual o valor de N?`))
// let contagem = 0
// for(i=1; contagem<n; i++){
//     if (i%2!=0) {
//         console.log(i) 
//         contagem += 1  
//     }
// }

// //7. faça um programa que calcule e mostre a soma dos 50 primeiros numeros pares

// let nPares = 50
// let contagem = 0
// let soma = 0
// for(i=1; contagem<nPares; i++){
//     if (i%2==0) {
//         contagem += 1
//         soma +=i
//         console.log(soma)
//     }
// }

// //8. programa que leia um inteiro N e imprima todos os naturais de 0 a N em ordem decrescente

// let n = Number(prompt(`digite o numero`))

// for(let i=n; i>=0; i--){
//     console.log(i)
// }

//9. leia um inteiro positivo impar N e imprima todos impares de 1 a N em ordem crescente

// let n = Number(prompt(`digite o numero impar`))

// for(let i=n; i>=0; i--){
//     console.log(i)
// }

//10. leia um inteiro positivo N e some os N primeiros naturais

//11. leia certa quantidade de numeros e imprima o maoir deles e quantas vezes o maior foi lido, a quantidade a serem lidos deve