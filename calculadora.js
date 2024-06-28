let num1 = Number(prompt('primeiro número'))
let operacao = prompt(`Selecione a operação: \n adição: + \n subtração: - \n multiplicação: * \n divisão: /`)
let num2 = Number(prompt('segundo número'))

function calculadora(num1, num2, operacao){
switch (operacao) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1+num2}`)
       break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1-num2}`)
       break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1*num2}`)
       break;
    case '/':
        if(num2 != 0){
        console.log(`${num1} / ${num2} = ${num1/num2}`)
        }
        else{
        console.log(`não é possivel dividir por 0`)
        }
        break;
    default:
        console.log(`opção invalida`)
       break;
}
}