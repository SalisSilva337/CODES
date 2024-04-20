let mainDiv = document.querySelector("#mainDiv");
let modal = document.querySelector("#modal");
let spanFechar = document.querySelector("#spanFechar");
let modalConteudo = document.querySelector("#modalConteudo");
let carrinhoDiv = document.querySelector("#carrinhoDiv");
let carrinhoAdd = document.querySelector("#carrinhoAdd");
let botaoAvancar = document.querySelector("#botaoAvancar");
let avancarCarrinho = document.querySelector("#avancarCarrinho");

let listaSoma = [];
let listaSubtrair = [];
let listaCompras = [];

window.onload = buscarProdutos();

function buscarProdutos() {
    mainDiv.innerHTML= ""
    let url = "https://fakestoreapi.com/products/";
        
        
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function () {

        if (request.status === 200) {
            console.log(url);
            let produtos = JSON.parse(request.response);
            console.log(produtos);

            for (let index = 0; index < produtos.length; index++) {
                let img = document.createElement("img");
                img.id = "imagensAPI";
                img.src = produtos[index].image;

                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imgCarrinhoAPI";
                imgCarrinho.src = produtos[index].image;
                
                
                

                let h2Modal = document.createElement("h2");
                h2Modal.id = "h2modal";

                h2Modal.innerHTML = "";
                
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";

                let spanFechar = document.createElement("button");
                let carrinhoAdd = document.createElement("button");
                

                

                let h2 = document.createElement("h2");
                h2.textContent = produtos[index].title;
                h2.id = "nomeProduto";
                
                let h2Carrinho = document.createElement("span");
                h2Carrinho.textContent = produtos[index].title;
                h2Carrinho.id = "nomeProduto";

                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtos[index].price;

                let h2CarrinhoPrice = document.createElement("span");
                h2CarrinhoPrice.textContent = "Preço: $" + produtos[index].price; 
                h2CarrinhoPrice.value = produtos[index].price; 

                let carrinhoItem = document.createElement("div");
                carrinhoItem.id = "carrinhoItem";

                let botaoAvancar = document.createElement("button");
                botaoAvancar.id = "botaoAvancar";
                botaoAvancar.textContent = "AVANÇAR >>>";

                let botaoLink = document.createElement("a");
                botaoLink.href = "finalizarCompra/finalizar.html";
                botaoLink.appendChild(botaoAvancar);

                let spanSoma = document.createElement("span");
                spanSoma.id = "spanSoma";

                img.addEventListener("click",function (){
                    
                    modalConteudo.innerHTML = "";

                    
                    spanFechar.textContent = "Fechar Modal";
                    spanFechar.id = "spanFechar";
                    carrinhoAdd.textContent = "Adicionar ao Carrinho";
                    carrinhoAdd.id = "carrinhoAdd";

                    modal.style.display = "block";
                    img.style.animation = "modalAnim 0.5s";
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    h2Modal.textContent = produtos[index].description;
                    avancarCarrinho.style.display = 'none';

                    modalConteudo.appendChild(spanFechar);
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoAdd);
                    modalConteudo.appendChild(spanFechar);
                    modalConteudo.appendChild(carrinhoAdd);
                    
                    img.style.opacity = 0.7;
                    
                   
                    carrinhoAdd.addEventListener("click", function () {
                        carrinhoAdd.disabled = true;
                        carrinhoAdd.textContent = "Produto já adicionado";

                        listaSoma.push(Number (h2CarrinhoPrice.value));

                        let soma = 0;
                        
                        avancarCarrinho.innerHTML = "";

                        for (let cont = 0; cont < listaSoma.length; cont++) {
                           
                            soma += listaSoma[cont];
                            
                            
                            
                            
                            
                            
                        }

                        spanSoma.value = soma;
                        spanSoma.textContent = "Valor Total: $" + soma;
                        avancarCarrinho.appendChild(botaoLink);
                        avancarCarrinho.appendChild(spanSoma);
                        

                        carrinhoItem.appendChild(imgCarrinho);
                        carrinhoItem.appendChild(h2Carrinho);
                        carrinhoItem.appendChild(h2CarrinhoPrice);
                        carrinhoItem.appendChild(excluir);
                       
                        carrinhoDiv.appendChild(carrinhoItem);
                        
                        objetoCarrinho = {
                            "produtoNome": h2Carrinho.textContent,
                            "produtoImg": imgCarrinho.src,
                            "produtoPreco": h2CarrinhoPrice.textContent,
                            "produtoID": produtos[index].id
                        }
                        
                        listaCompras.push(objetoCarrinho);
                        

                        
                    });
                    

                    
                });


                excluir.addEventListener("click", function () {
                    carrinhoAdd.disabled = false;
                    console.log(listaCompras);

                    let produtoIndice = listaCompras.findIndex((value)=> value.id == objetoCarrinho.id);
                    
                    listaCompras.splice(produtoIndice, 1);

                    carrinhoItem.removeChild(imgCarrinho);
                    carrinhoItem.removeChild(h2Carrinho);
                    carrinhoItem.removeChild(h2CarrinhoPrice);
                    carrinhoItem.removeChild(excluir);
                   
                    carrinhoDiv.removeChild(carrinhoItem);

                    
                });
            
                spanFechar.addEventListener("click",function (){
                    modalConteudo.style.animation = "modalAnimFechar 0.5s";
                    img.style.animation = "modalAnimFechar 0.5s";

                    setTimeout(() => {
                        modal.style.display = "none";
                        avancarCarrinho.style.display = 'block';
                    }, 400);
                   
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
                    
                }); 

                botaoAvancar.addEventListener("click",function (){
                    
                    sessionStorage.produto = JSON.stringify(listaCompras);
                    console.log(listaCompras);

                });

                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
                mainDiv.appendChild(h2Price);

                
                
                
            }
        }
    }
}


function categorias(botao) {
    mainDiv.innerHTML= ""
    let url = "https://fakestoreapi.com/products/category/" + botao.value;
        
        
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function () {

        if (request.status === 200) {
            console.log(url);
            let produtos = JSON.parse(request.response);
            console.log(produtos);

            for (let index = 0; index < produtos.length; index++) {
                let img = document.createElement("img");
                img.id = "imagensAPI";
                img.src = produtos[index].image;

                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imgCarrinhoAPI";
                imgCarrinho.src = produtos[index].image;
                
            
                let h2Modal = document.createElement("h2");
                h2Modal.innerHTML = "";
                
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";

                let spanFechar = document.createElement("button");
                let carrinhoAdd = document.createElement("button");
                

                let h2 = document.createElement("h2");
                h2.textContent = produtos[index].title;
                h2.id = "nomeProduto";
                
                let h2Carrinho = document.createElement("span");
                h2Carrinho.textContent = produtos[index].title;
                h2Carrinho.id = "nomeProduto";

                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtos[index].price;

                let h2CarrinhoPrice = document.createElement("span");
                h2CarrinhoPrice.textContent ="Preço: $" + produtos[index].price; 

                let carrinhoItem = document.createElement("div");
                carrinhoItem.id = "carrinhoItem";


                img.addEventListener("click",function (){
                    
                    modalConteudo.innerHTML = "";

                    img.style.animation = "modalAnim 0.5s";
                    spanFechar.textContent = "Fechar Modal";
                    spanFechar.id = "spanFechar";
                    carrinhoAdd.textContent = "Adicionar ao Carrinho";
                    carrinhoAdd.id = "carrinhoAdd";

                    modal.style.display = "block";
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    h2Modal.textContent = produtos[index].description;
                    avancarCarrinho.style.display = 'none';

                    modalConteudo.appendChild(spanFechar);
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoAdd);
                    modalConteudo.appendChild(spanFechar);
                    modalConteudo.appendChild(carrinhoAdd);
                    
                    img.style.opacity = 0.7;
                    
                   
                    carrinhoAdd.addEventListener("click", function () {
                        carrinhoAdd.disabled = true;
                        carrinhoAdd.textContent = "Produto já adicionado";

                        listaSoma.push(Number (h2CarrinhoPrice.value));
                        let soma = 0;

                        avancarCarrinho.innerHTML = "";

                        for (let cont = 0; cont < listaSoma.length; cont++) {
                           
                            soma += listaSoma[cont];
                            console.log(soma);
                            
                            spanSoma.textContent = "Valor Total: $" + soma;
                            console.log(spanSoma);

                            avancarCarrinho.appendChild(botaoLink);
                            avancarCarrinho.appendChild(spanSoma);
                            
                        }
                        
                        carrinhoItem.appendChild(imgCarrinho);
                        carrinhoItem.appendChild(h2Carrinho);
                        carrinhoItem.appendChild(h2CarrinhoPrice);
                        carrinhoItem.appendChild(excluir);
                       
                        carrinhoDiv.appendChild(carrinhoItem);
                        
                        objetoCarrinho = {
                            "produtoNome": h2Carrinho.textContent,
                            "produtoImg": imgCarrinho.src,
                            "produtoPreco": h2CarrinhoPrice.textContent,
                            "produtoID": produtos[index].id
                        }
                        
                        listaCompras.push(objetoCarrinho);
                        
                    });
                    
                });



                botaoAvancar.addEventListener("click",function (){
                    
                    sessionStorage.produto = JSON.stringify(listaCompras);
                    console.log(listaCompras);
                    
                });

                spanFechar.addEventListener("click",function (){
                    modalConteudo.style.animation = "modalAnimFechar 0.5s";
                    img.style.animation = "modalAnimFechar 0.5s";
                    setTimeout(() => {
                        modal.style.display = "none";
                        avancarCarrinho.style.display = 'block';
                    }, 400);
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
                    
                }); 

                excluir.addEventListener("click", function () {
                        carrinhoItem.removeChild(imgCarrinho);
                        carrinhoItem.removeChild(h2Carrinho);
                        carrinhoItem.removeChild(h2CarrinhoPrice);
                        carrinhoItem.removeChild(excluir);
                       
                        carrinhoDiv.removeChild(carrinhoItem);
                });

                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
                mainDiv.appendChild(h2Price);
                
            }
        }
    }
}







