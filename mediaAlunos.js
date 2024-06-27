let notas = 0
let media = 0
let n = 5
let nx = 0

for(let i=1; i<=n; i++){
    notas += Number(prompt(`digite a nota do aluno numero ${i}`))
    nx++
}

media = notas/nx
console.log(`a media das notas dos ${nx} alunos é ${media}`)