


let divAll = document.querySelector("#divAll");


let comprasCarrinho = JSON.parse(sessionStorage.produto);
console.log(comprasCarrinho);

for (let index = 0; index < comprasCarrinho.length; index++) {
    let imgProduto = document.createElement("img");
    imgProduto.id = "imgProduto";
    imgProduto.src = comprasCarrinho[index].produtoImg;

    let nomeProduto = document.createElement("h2");
    nomeProduto.id = "nomeProduto";
    nomeProduto.textContent = comprasCarrinho[index].produtoNome;

    let precoProduto = document.createElement("h2");
    precoProduto.id = "precoProduto";
    precoProduto.textContent = comprasCarrinho[index].produtoPreco;

    let divProdutos = document.createElement("div");
    divProdutos.id = "divProdutos"

    divProdutos.appendChild(imgProduto);
    divProdutos.appendChild(nomeProduto);
    divProdutos.appendChild(precoProduto);

    divAll.appendChild(divProdutos);
    
}


