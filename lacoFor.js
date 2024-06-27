//escreva todos os pares de 1 até 100

// for(let i=0; i<=100; i+=2){
//     console.log(i)
// }

//calcule a media de 4 notas de forma aritimetica

// let notas
// let media
// for(let i=1; i<=4; i++){
//     notas+= Number(prompt(`digite a nota ${i}`))
// }

// media = notas / (i-1)
// console.log(media)

let notas = 0
let media = 0
let pesos = 0
for(let i=0; i<=12; i++){
    if (i == 2 || i == 4) {
        notas += (Number(prompt(`digite a nota ${i}`))*2)
        pesos += 2
    }
    else if(i==3){
        notas += (Number(prompt(`digite a nota ${i}`))*3)
        pesos += 3
    }
    else {
        notas+= Number(prompt(`digite a nota ${i}`))
        pesos += 1
    }
}
media = notas / pesos
console.log(media)