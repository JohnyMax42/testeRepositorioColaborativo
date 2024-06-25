let peso = Number(prompt('informe o peso:'))
let altura = Number(prompt('informe o altura:'))
let imc = (peso/(altura**2)).toFixed(2)

console.log(`o imc é de ${imc}`)


if(isNaN(imc)){
    console.log(`Algum valor foi informado como texto`)
}
else if(imc<18.5){
    console.log(`abaixo do peso`)
}
else if(imc>=18.5 && imc<25){
    console.log(`peso normal`)
}
else if(imc>=25 && imc<30){
    console.log(`acima do peso`)
}
else{
    console.log(`obeso`)
}