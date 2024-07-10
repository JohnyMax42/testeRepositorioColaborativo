async function buscarProduto(id) {

    let resposta = await fetch(`https://fakestoreapi.com/products${id}`)

    let produto = await resposta.json()//JSON.parse(produtos)

    return produto
}

async function mostrarNoConsole(funcaoAssicrona, id){
    console.log(await funcaoAssicrona(id))
}
console.log(buscarProduto(1))
mostrarNoConsole(buscarProduto, 1)