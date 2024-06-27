let inicio = 30
let final = 90
let repeticoes = 10
let numIntervalo = 0

for(let i=1; i<=repeticoes; i++){
    let numero = Number(prompt(`Informe o ${i}º numero:`))

    if (numero<90 && numero>30){
        numIntervalo += 1
    }
}
console.log(`${numIntervalo} numeros estão entre ${inicio} e ${final}`)