let mainDiv = document.querySelector("#mainDiv");
let modal = document.querySelector("#modal");
let spanFechar = document.querySelector("#spanFechar");
let modalConteudo = document.querySelector("#modalConteudo");
let carrinhoDiv = document.querySelector("#carrinhoDiv");
let carrinhoAdd = document.querySelector("#carrinhoAdd");

window.onload = function buscarProdutos() {
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




                img.addEventListener("click",function (){
                    
                    modal.style.display = "block";
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    h2Modal.textContent = produtos[index].description;
                    
                    modalConteudo.appendChild(h2Modal);
                    
                    modalConteudo.appendChild(carrinhoAdd);

                    img.style.opacity = 0.7;

                    console.log(img);
                    
                    spanFechar.addEventListener("click",function (){
                        
                        modal.style.display = "none";

                        modalConteudo.removeChild(h2Modal);
                        img.style.opacity = 1;
                        
                    }); 
                    
                    
                    carrinhoAdd.addEventListener("click", function () {
                        
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(excluir);
                        carrinhoDiv.appendChild(h2Carrinho);
                       
                    });

                    
                });

                

                excluir.addEventListener("click", function () {
                    carrinhoDiv.removeChild(imgCarrinho);
                    carrinhoDiv.removeChild(excluir);
                    carrinhoDiv.removeChild(h2Carrinho);
                    
                });

                let h2 = document.createElement("h2");
                h2.textContent = produtos[index].title;
                h2.id = "nomeProduto";
                
                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtos[index].title;
                h2Carrinho.id = "nomeProduto";

                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtos[index].price;


                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
                mainDiv.appendChild(h2Price);
                
            }
        }
    }
}



function categoriaEletronicos() {
    let url = "https://fakestoreapi.com/products/category/electronics";
        
        
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function () {
        mainDiv.innerHTML = '';
        
        if (request.status === 200) {
            console.log(url);
            let produtosEletronicos = JSON.parse(request.response);
            console.log(produtosEletronicos);

            for (let index = 0; index < produtosEletronicos.length; index++) {
                let img = document.createElement("img");
                img.id = "imagensAPI";
                img.src = produtosEletronicos[index].image;
                let h2Modal = document.createElement("h2");
                
                h2Modal.innerHTML = "";
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtosEletronicos[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    
                    modalConteudo.appendChild(carrinhoAdd);
                    img.style.opacity = 0.7;
                    carrinhoAdd.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(excluir);
                        carrinhoDiv.appendChild(h2Carrinho);

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

                let h2 = document.createElement("h2");
                h2.textContent = produtosEletronicos[index].title;
                h2.id = "nomeProduto";
                

                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imagensAPI";
                imgCarrinho.src = produtosEletronicos[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtosEletronicos[index].title;
                h2Carrinho.id = "nomeProduto";

                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtosEletronicos[index].price;


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);   
                mainDiv.appendChild(h2Price); 
            }
        }
    }
}


function categoriaJoias() {
    

    let url = "https://fakestoreapi.com/products/category/jewelery";
        
        
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function () {
        mainDiv.innerHTML = '';

        if (request.status === 200) {
            console.log(url);
            let produtosJoias = JSON.parse(request.response);
            console.log(produtosJoias);

            for (let index = 0; index < produtosJoias.length; index++) {
                let img = document.createElement("img");
                img.id = "imagensAPI";
                img.src = produtosJoias[index].image;
                let h2Modal = document.createElement("h2");
                
                h2Modal.innerHTML = "";
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtosJoias[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoAdd);
                    img.style.opacity = 0.7;
                    carrinhoAdd.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(excluir);
                        carrinhoDiv.appendChild(h2Carrinho);

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

                let h2 = document.createElement("h2");
                h2.textContent = produtosJoias[index].title;
                h2.id = "nomeProduto";
                
                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imagensAPI";
                imgCarrinho.src = produtosJoias[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtosJoias[index].title;
                h2Carrinho.id = "nomeProduto";

                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtosJoias[index].price;


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2); 
                mainDiv.appendChild(h2Price);
            }   
        }
    }
}

function categoriaRoupasMasculinas() {
    
    
    let url = "https://fakestoreapi.com/products/category/men's clothing";
        
        
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function () {
        mainDiv.innerHTML = '';

        if (request.status === 200) {
            console.log(url);
            let produtosMasculino = JSON.parse(request.response);
            console.log(produtosMasculino);

            for (let index = 0; index < produtosMasculino.length; index++) {
                let img = document.createElement("img");
                img.id = "imagensAPI";
                img.src = produtosMasculino[index].image;
                let h2Modal = document.createElement("h2");
                
                h2Modal.innerHTML = "";
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtosMasculino[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoAdd);
                    img.style.opacity = 0.7;
                    carrinhoAdd.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(excluir);
                        carrinhoDiv.appendChild(h2Carrinho);

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

                let h2 = document.createElement("h2");
                h2.textContent = produtosMasculino[index].title;
                h2.id = "nomeProduto";
                
                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imagensAPI";
                imgCarrinho.src = produtosMasculino[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtosMasculino[index].title;
                h2Carrinho.id = "nomeProduto";

                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtosMasculino[index].price;


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2); 
                mainDiv.appendChild(h2Price);   
            }
        }
    }
}

function categoriaRoupasFemininas() {
    

    let url = "https://fakestoreapi.com/products/category/women's clothing";
        
        
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function () {
        mainDiv.innerHTML = '';

        if (request.status === 200) {
            console.log(url);
            let produtosFeminino = JSON.parse(request.response);
            console.log(produtosFeminino);

            for (let index = 0; index < produtosFeminino.length; index++) {
                let img = document.createElement("img");
                img.id = "imagensAPI";
                img.src = produtosFeminino[index].image;
                let h2Modal = document.createElement("h2");
                
                h2Modal.innerHTML = "";
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    
                    h2Modal.textContent = produtosFeminino[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoAdd);
                    img.style.opacity = 0.7;

                    carrinhoAdd.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(excluir);
                        carrinhoDiv.appendChild(h2Carrinho);

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

                let h2 = document.createElement("h2");
                h2.textContent = produtosFeminino[index].title;
                h2.id = "nomeProduto";
                
                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imgCarrinhoAPI";
                imgCarrinho.src = produtosFeminino[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtosFeminino[index].title;
                h2Carrinho.id = "nomeProduto";


                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtosFeminino[index].price;


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);
                mainDiv.appendChild(h2Price);    
            }
        }
    }
}


function verTudo() {
    mainDiv.innerHTML = '';
    
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
                let h2Modal = document.createElement("h2");
                
                h2Modal.innerHTML = "";
                
                let excluir = document.createElement("img");
                excluir.src = "imgs/excluir.png";
                excluir.id = "excluirImg";
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtos[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoAdd);
                    img.style.opacity = 0.7;

                    carrinhoAdd.addEventListener("click", function colocarCarrinho() {
                    
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(excluir);
                        carrinhoDiv.appendChild(h2Carrinho);
    
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

                let h2 = document.createElement("h2");
                h2.textContent = produtos[index].title;
                h2.id = "nomeProduto";
                
                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imgCarrinhoAPI";
                imgCarrinho.src = produtos[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtos[index].title;
                h2Carrinho.id = "nomeProduto";


                let h2Price = document.createElement("h2");
                h2Price.textContent ="Preço: $" + produtos[index].price;


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
                mainDiv.appendChild(h2Price);
                
            }
        }
    }
}



