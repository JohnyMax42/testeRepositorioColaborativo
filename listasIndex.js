// let endereço = [69408983, 'Cambeario', 616, 'Caines', 'Lisunia']

// console.log(endereço)

// cep = prompt(`informe o Cep`)

// nomeRua = prompt(`informe o nome da rua`)

// nCasa = prompt(`numero da casa`)

// bairro = prompt(`informe o bairro`)

// cidade = prompt(`informe a cidade`)

// let endereço = [cep, nomeRua, nCasa, bairro, cidade]

// console.log(endereço)

// let tamanho = endereço.length

// console.log(tamanho)

// let cliente = [endereço, idade, sexo]

// idade = 42

// sexo = 'M'

//leia 3 notas armazene em um array e calcule suas medias, a media deve ser o ultimo elemento do array
 
// let n1 = Number(prompt(`nota 1`))
// let n2 = Number(prompt(`nota 2`))
// let n3 = Number(prompt(`nota 3`))
// let media = (n1+n2+n3)/3

// let notas = [n1, n2, n3, media]

// alert(notas)

function media3notas(){
    let notas=[]
    for(let i = 1; i<=3; i++){
        notas[i-1]= Number(prompt(`digite a ${i}º nota`))
    }
    notas[notas.length]=(notas[0]+notas[1]+notas[2])/notas.length
    return notas
}

// alert(media3notas()[2])

let arrayNotas = [1,2,3]
console.log(arrayNotas)
arrayNotas[3]= 'A'
console.log(arrayNotas)
//adiciona ao final
arrayNotas.push('B')
console.log(arrayNotas)
//exclusão do ultimo elemento
let excluido = arrayNotas.pop()
console.log(arrayNotas)
console.log(excluido)
//adiciona ao inicio
arrayNotas.unshift('inicio')
console.log(arrayNotas)
//remove do inicio
console.log(arrayNotas.shift())
console.log(arrayNotas)

//fila de 10 em que 3 são atendidos ao primeiro dia e o restante no dia seguinte

// function fila(){
//     for(let i=1; i<=10; i++){
//      let nomes = prompt(`nome do ${i}º da fila`)
//     }
// }

// fila()

let fila = ['Arlo', 'Ben', 'Carmel', 'Dorothy', 'Erick', 'Harper', 'Katarina', 'Lynn', 'Meng', 'Namih']

let ultimosAtendidos = []
let atendimentoAmanha = []

//3 pessoas serão atendidas
for(let i = 1; i<=3; i++){
    let ultimo = fila.shift()//remove a primeira pessoa da fila
    ultimosAtendidos.unshift(ultimo)//adiciona a pessoa removida no inicio da fila de atendidos
}

let novoTamanhoFila = fila.length //os 7 restantes
//demais serão colocados na fila para o proximo dia

for(let i = 1; i<=novoTamanhoFila; i++){
    let proximo = fila.shift()
    atendimentoAmanha.push(proximo)
}

let numeros = [1,2,3]

function multiplicar(num){
    return num**2
}

let numerosAoQuadrado = numeros.map((item)=> multiplicar(item))

console.log(numeros)
console.log(numerosAoQuadrado)