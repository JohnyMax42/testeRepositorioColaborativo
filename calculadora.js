// 4 operações basicas em função, com dois parametros obrigatorios

//função calculadora que recebe dois numeros e uma função como parametro e mostra o retorno da função no alert para o usuario

function calculadora(num1, num2, operacao){
    let funcao = eval(operacao)
    let resultado = operacao(num1, num2)
    alert(resultado)
}
let num1 = Number(prompt('primeiro número'))
let operacao = prompt(`Selecione a operação: \n adição: + \n subtração: - \n multiplicação: * \n divisão: /`)
let num2 = Number(prompt('segundo número'))

calculadora(num1, num2, operacao)

// function calculadora(num1, num2, operacao){
// switch (operacao) {
//     case "+":
//         console.log(`${num1} + ${num2} = ${num1+num2}`)
//        break;
//     case '-':
//         console.log(`${num1} - ${num2} = ${num1-num2}`)
//        break;
//     case '*':
//         console.log(`${num1} * ${num2} = ${num1*num2}`)
//        break;
//     case '/':
//         if(num2 != 0){
//         console.log(`${num1} / ${num2} = ${num1/num2}`)
//         }
//         else{
//         console.log(`não é possivel dividir por 0`)
//         }
//         break;
//     default:
//         console.log(`opção invalida`)
//        break;
// }
// }