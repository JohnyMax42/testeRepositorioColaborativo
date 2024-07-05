let div = document.querySelector('div')

let divH1 = document.createElement('h1')
divH1.innerHTML = 'Raggazino'

let divUl = document.createElement('ul')

let idade = document.createElement('li')
idade.innerHTML = '15 anos'

let endereco = document.createElement('li')
endereco.innerHTML = 'Sardenha'

div.appendChild(divH1)
div.appendChild(divUl)

divUl.appendChild(idade)
divUl.appendChild(endereco)

let numeros = [1,2,3,4,5,6,7,8,9, 10]

function montarTitulo(item, pai){
    let titulo = document.createElement('h1')
    titulo.innerHTML = item
    pai.appendChild(titulo)
}

numeros.forEach((num)=>montarTitulo(num, div))