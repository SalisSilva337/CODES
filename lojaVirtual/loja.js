let mainDiv = document.querySelector("#mainDiv");
let modal = document.querySelector("#modal");
let spanFechar = document.querySelector("#spanFechar");
let modalConteudo = document.querySelector("#modalConteudo");
let carrinhoDiv = document.querySelector("#carrinhoDiv");
let carrinhoAdd = document.querySelector("#carrinhoAdd");

window.onload = buscarProdutos();

function buscarProdutos() {
    
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
                h2Modal.innerHTML = "";
                
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";

                let spanFechar = document.createElement("span");
                let carrinhoAdd = document.createElement("img");
                
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

                    
                    spanFechar.textContent = "X";
                    spanFechar.id = "spanFechar";
                    carrinhoAdd.src = "imgs/carrinho.png";
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
                        carrinhoItem.appendChild(imgCarrinho);
                        carrinhoItem.appendChild(h2Carrinho);
                        carrinhoItem.appendChild(h2CarrinhoPrice);
                        carrinhoItem.appendChild(excluir);
                       
                        carrinhoDiv.appendChild(carrinhoItem);
                        
                        

                       
                    });
                    

                    
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    avancarCarrinho.style.display = 'block';
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
                    
                }); 

                excluir.addEventListener("click", function () {
                    carrinhoDiv.removeChild(imgCarrinho);
                    carrinhoDiv.removeChild(excluir);
                    carrinhoDiv.removeChild(h2Carrinho);
                    carrinhoDiv.appendChild(h2CarrinhoPrice);
                });

                


                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
                mainDiv.appendChild(h2Price);
                
            }
        }
    }
}


function categorias(botao) {
    let url = "https://fakestoreapi.com/products/category/" + botao.value;
        
        
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function () {
        mainDiv.innerHTML = '';
        
        if (request.status === 200) {
            
            let produtosEletronicos = JSON.parse(request.response);


            for (let index = 0; index < produtosEletronicos.length; index++) {
                let img = document.createElement("img");
                img.id = "imagensAPI";
                img.src = produtosEletronicos[index].image;
                let h2Modal = document.createElement("h2");
                
                h2Modal.innerHTML = "";
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";

                let h2 = document.createElement("h2");
                h2.textContent = produtosEletronicos[index].title;
                h2.id = "nomeProduto";
                

                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imgCarrinhoAPI";
                imgCarrinho.src = produtosEletronicos[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtosEletronicos[index].title;
                h2Carrinho.id = "nomeProduto";

                let h2CarrinhoPrice = document.createElement("h2");
                h2CarrinhoPrice.textContent ="Preço: $" + produtosEletronicos[index].price;

                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtosEletronicos[index].price;

                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtosEletronicos[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    
                    modalConteudo.appendChild(carrinhoAdd);
                    img.style.opacity = 0.7;

                    carrinhoAdd.addEventListener("click", function colocarCarrinho() {
                        let div = createElement('img')
                        carrinhoDiv.appendChild(div);
                        div.src = produtosEletronicos[index].image;
                        carrinhoDiv.appendChild(excluir);
                        carrinhoDiv.appendChild(h2Carrinho);
                        carrinhoDiv.appendChild(h2CarrinhoPrice);

                    });
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
                });

                excluir.addEventListener("click", function () {
                    carrinhoDiv.removeChild(imgCarrinho);
                    carrinhoDiv.removeChild(excluir);
                    carrinhoDiv.removeChild(h2Carrinho);
                    
                });

                

               

                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);   
                mainDiv.appendChild(h2Price); 
            }
        }
    }
}







