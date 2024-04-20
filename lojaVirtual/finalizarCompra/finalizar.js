

let divAll = document.querySelector("#divAll");
let divCarrinho = document.querySelector("#divCarrinho");
let divEndereco = document.querySelector("#divEndereco");
let seuCarrinhoDiv= document.querySelector("#divCarrinho");
let enviar0= document.querySelector("#enviar0");
let enviar1= document.querySelector("#enviar1");
let enviar2= document.querySelector("#enviar2");

let comprasCarrinho = JSON.parse(sessionStorage.produto);
console.log(comprasCarrinho);

enviar1.style.animation = "botaoAnim 1s infinite";
enviar2.style.animation = "botaoAnim 1s infinite";

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


    let valorTotal = document.createElement("h2");
    valorTotal.id = "valorTotal";
    

    let quantidadeProdutos = document.createElement("h2");
    quantidadeProdutos.id = "quantidadeProdutos";
    quantidadeProdutos.textContent = "Qtd: 10";


    let divNomePreco = document.createElement("div");
    divNomePreco.id = "divNomePreco";

    let divProdutos = document.createElement("div");
    divProdutos.id = "divProdutos";

    divNomePreco.appendChild(nomeProduto);
    divNomePreco.appendChild(precoProduto);

    
    divProdutos.appendChild(imgProduto);
    divProdutos.appendChild(divNomePreco);
    divProdutos.appendChild(quantidadeProdutos);
    divCarrinho.appendChild(divProdutos);

    seuCarrinhoDiv.appendChild(valorTotal);

    divProdutos.style.animation = "divAnim 1s";
    
    
}

function buscaCep(){
    let cep = document.querySelector('#cepTxt').value;
    if (cep !== "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        request.onload = function(){
            if (request.status === 200) {
                let endereco = JSON.parse(request.response);
                document.querySelector('#ruaTxt').value = endereco.street;
                document.querySelector('#bairroTxt').value = endereco.neighborhood;
                document.querySelector('#estadoTxt').value = endereco.state;
                document.querySelector('#cidadeTxt').value = endereco.city;
            }
        }
    }

}

document.querySelector('#buscarCep').addEventListener("click", function(){  
    buscaCep();
    
});

enviar0.addEventListener("click", function(){  
    divDados.style.filter = "blur(0px)";
    divDados.style.pointerEvents = "all";

    divCarrinho.style.pointerEvents = "none";
    divCarrinho.style.filter = "blur(10px)"
});

enviar1.addEventListener("click", function(){  
    divEndereco.style.filter = "blur(0px)"
    divEndereco.style.pointerEvents = "all";

    divDados.style.filter = "blur(10px)"
    divDados.style.pointerEvents = "none";
    
});