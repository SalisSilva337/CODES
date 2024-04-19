sessionStorage.getItem("produto");


let div = document.querySelector("#div1");


let comprasCarrinho = JSON.parse(sessionStorage.produto);
console.log(comprasCarrinho);

for (let index = 0; index < comprasCarrinho.length; index++) {
    let imgProduto = document.createElement("img");
    imgProduto.src = comprasCarrinho[index].produtoImg;
    let nomeProduto = document.createElement("h2");
    nomeProduto.textContent = comprasCarrinho[index].produtoNome;
    let precoProduto = document.createElement("h2");
    precoProduto.textContent = comprasCarrinho[index].produtoPreco;


    div.appendChild(imgProduto);
    div.appendChild(nomeProduto);
    div.appendChild(precoProduto);
    
}


