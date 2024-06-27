desconto = 0
margem = 500
valor = Number(prompt(`qual o valor da compra?`))

for(let i=0; i<=valor; i+=100){
   if (i>500 && desconto<25) {
    desconto++
   }  
}

console.log(`Valor da compra: ${valor} reais \nDesconto: ${desconto}% \nValor Final: ${valor - (valor*(desconto/100))} reais`)