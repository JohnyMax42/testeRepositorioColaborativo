let btnVermelho = document.getElementsByTagName('button')[0]
let btnVerde = document.getElementsByTagName('button')[1]
let btnAzul = document.getElementsByTagName('button')[2]

let quadro = document.querySelector('.quadro')

function mudarCor(cor){
    quadro.style.background = cor
}

let elementoFilho = document.createElement('p')

elementoFilho.innerHTML = 'texto inserido no inner html de um paragrafo criado com o createElement do objeto document'

let elementoPai = document.querySelector('body')

elementoPai.appendChild(elementoFilho)

let elementoFilho2 = document.createElement('h1')

elementoFilho2.innerHTML = 'Titulo criado com JS'

elementoPai.appendChild(elementoFilho2)

