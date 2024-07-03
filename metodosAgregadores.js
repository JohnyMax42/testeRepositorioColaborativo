let frutas = ['maça', 'uva', 'banana']

let numeros = [2,4,6,8]

//sem necessidade de armazenar retorno
frutas.forEach((FRUTA)=>console.log(FRUTA.toUpperCase()))
console.log(frutas)

let numerosDobro = numeros.map((num)=>{console.log(num)
    return num*2})

let somaNumeros = numeros.reduce((soma, num)=> soma+=num)

console.log(somaNumeros)

//construir um array de 4 objetos. cada objeto terá as seguintes chaves: nome, nota. Sendo a nota entre 0 e 10.

let alunos = [
    {
        nome: 'Ana',
        nota: 8
    },
    {
        nome: 'Bianca',
        nota: 6
    },
    {
        nome: 'Carlos',
        nota: 9
    },
    {
        nome: 'Daniel',
        nota: 3
    }
]

//montar um array de objetos contendo apenas os aprovados, nota maior que sete

let aprovados = alunos.filter((aluno)=>{
    if(aluno.nota>=7){
        return aluno
    }
})

console.log(aprovados)

let nomeAprovados = aprovados.map((elemento)=> elemento.nome)

console.log(nomeAprovados)

let notaAprovados = aprovados.map((elemento)=> elemento.nota)

console.log(notaAprovados)

let somaNotasAprovados = notaAprovados.reduce((soma, num)=> soma+=num)

console.log(somaNotasAprovados)