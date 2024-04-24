

let divAll = document.querySelector("#divAll");
let divCarrinho = document.querySelector("#divCarrinho");
let divEndereco = document.querySelector("#divEndereco");
let seuCarrinhoDiv= document.querySelector("#divCarrinho");
let enviar0= document.querySelector("#enviar0");
let enviar1= document.querySelector("#enviar1");
let enviar2= document.querySelector("#enviar2");
let inputs = document.querySelectorAll(".inputs");
let inputsCep = document.querySelectorAll(".inputsCep");
let selectPagamento = document.querySelector("#selectPagamento");


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


    let valorTotal = document.createElement("h2");
    valorTotal.id = "valorTotal";
    

    let quantidadeProdutos = document.createElement("h2");
    quantidadeProdutos.id = "quantidadeProdutos";
    quantidadeProdutos.textContent = "Quantidade: " + comprasCarrinho[index].produtoQuantidade;


    let divNomePreco = document.createElement("div");
    divNomePreco.id = "divNomePreco";

    let divProdutos = document.createElement("div");
    divProdutos.id = "divProdutos";

    divNomePreco.appendChild(nomeProduto);
    divNomePreco.appendChild(precoProduto);
    divNomePreco.appendChild(quantidadeProdutos);
    
    divProdutos.appendChild(imgProduto);
    divProdutos.appendChild(divNomePreco);
    

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
                enviar2.disabled = false;
                let endereco = JSON.parse(request.response);
                document.querySelector('#ruaTxt').value = endereco.street;
                document.querySelector('#bairroTxt').value = endereco.neighborhood;
                document.querySelector('#estadoTxt').value = endereco.state;
                document.querySelector('#cidadeTxt').value = endereco.city;
            }

            else {
                enviar2.disabled = true;
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



for (let index = 0; index < inputs.length; index++) {
inputs[index].addEventListener("change", function () {
        if ((inputs[index].value === "") && (selectPagamento.value === "")) {
            enviar1.disabled = true;
        }
        if ((inputs[index].value !== "") && (selectPagamento.value !== "")) {
            enviar1.disabled = false;
        }

});

enviar1.addEventListener("click", function(){
        
        divEndereco.style.filter = "blur(0px)"
        divEndereco.style.pointerEvents = "all";

        divDados.style.filter = "blur(10px)"
        divDados.style.pointerEvents = "none";
        
    
    
      
});
}


   

