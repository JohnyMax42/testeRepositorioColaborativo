function dizerOi(){
    console.log('Oi!')
}

function media(n1, n2, n3=0){
    let media1 = (n1+n2+n3)/3
    console.log(media1)
    return 'retorno da função'
}

media(4, 5, 9)
media(4, 5, 9, 10)
media(10, 10)

let mediaFinal = media(5,5,5)
console.log(mediaFinal)

// function dadosPessoa(nome, idade){
//     nome = prompt('diga o nome')
//     idade = prompt('diga a idade')
//     return nome
// }

// let pessoa = dadosPessoa()
// console.log(pessoa)

