let nome = prompt('Digite seu nome')
let salarioBase = 10000
let filhos = Number(prompt(`Quantos filhos menores de 7 anos possui?`))
let auxCreche
let tempoEmpresa = Number(prompt(`Qual o seu tempo de empresa em anos?`))
let benefioTempo
let VA = 1000
let VT = 200
let INSS = salarioBase*0.09
let FGTS = salarioBase*0.08

if(filhos >= 0){
    auxCreche = filhos*500
}
else{
    auxCreche = 0
    alert('Valor de filhos invalido')
}

if(tempoEmpresa<1){
    benefioTempo = 0
}
else if(tempoEmpresa>=1 && tempoEmpresa<2){
    benefioTempo = salarioBase*0.05
}
else if(tempoEmpresa>=2 && tempoEmpresa<5){
    benefioTempo = salarioBase*0.1
}
else if(tempoEmpresa>=5 && tempoEmpresa<10){
    benefioTempo = salarioBase*0.15
}
else if(tempoEmpresa>=10){
    benefioTempo = salarioBase*0.2
}
else{
    benefioTempo = 0
    alert('Valor de tempo invalido')
}

let total = salarioBase + auxCreche + benefioTempo + VA + VT - INSS - FGTS

document.write(`Folha de Pagamento <br><br> O salario base de ${nome} é ${salarioBase} <br><br> Beneficios: <br> Tempo de empresa: ${benefioTempo} <br> Beneficio por dependente: ${auxCreche} <br> Vale alimentação: ${VA} <br> Vale transporte: ${VT} <br><br> Descontos: <br> INSS: ${INSS} <br> FGTS: ${FGTS} <br><br> Total: ${total}`)