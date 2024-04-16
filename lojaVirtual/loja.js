let mainDiv = document.querySelector("#mainDiv");
let modal = document.querySelector("#modal");
let spanFechar = document.querySelector("#spanFechar");
let modalConteudo = document.querySelector("#modalConteudo");
let carrinhoDiv = document.querySelector("#carrinhoDiv");
let carrinhoImg = document.querySelector("#carrinhoImg");

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
                imgCarrinho.id = "imagensAPI";
                imgCarrinho.src = produtos[index].image;

                

                

                let h2Modal = document.createElement("h2");
                let h2ModalPrice = document.createElement("h2");
                h2Modal.innerHTML = "";
                h2ModalPrice.innerHTML = "";
                
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    h2Modal.textContent = produtos[index].description;
                    h2ModalPrice.textContent ="Preço: $" + produtos[index].price;
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(h2ModalPrice);
                    modalConteudo.appendChild(carrinhoImg);

                    img.style.opacity = 0.7;
                    carrinhoImg.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(h2Carrinho);
                        
                    });
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    modalConteudo.removeChild(h2ModalPrice);
                    img.style.opacity = 1;
                });

                let h2 = document.createElement("h2");
                h2.textContent = produtos[index].title;
                h2.id = "nomeProduto";
                
                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtos[index].title;
                h2Carrinho.id = "nomeProduto";



                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    

                
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
                
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtosEletronicos[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoImg);
                    img.style.opacity = 0.7;
                    carrinhoImg.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(h2Carrinho);

                    });
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
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
                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
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
                
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtosJoias[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoImg);
                    img.style.opacity = 0.7;
                    carrinhoImg.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(h2Carrinho);

                    });
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
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


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2); 
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
                
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtosMasculino[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoImg);
                    img.style.opacity = 0.7;
                    carrinhoImg.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(h2Carrinho);

                    });
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
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


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
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
                
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    
                    h2Modal.textContent = produtosFeminino[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoImg);
                    img.style.opacity = 0.7;
                    carrinhoImg.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(h2Carrinho);

                    });
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
                });

                let h2 = document.createElement("h2");
                h2.textContent = produtosFeminino[index].title;
                h2.id = "nomeProduto";
                
                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imagensAPI";
                imgCarrinho.src = produtosFeminino[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtosFeminino[index].title;
                h2Carrinho.id = "nomeProduto";


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    
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
                
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtos[index].description;
                    modalConteudo.style.animation = "modalAnim 0.5s";
                    modalConteudo.appendChild(h2Modal);
                    modalConteudo.appendChild(carrinhoImg);
                    img.style.opacity = 0.7;
                    carrinhoImg.addEventListener("click", function colocarCarrinho() {
                        carrinhoDiv.appendChild(imgCarrinho);
                        carrinhoDiv.appendChild(h2Carrinho);

                    });
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
                });

                let h2 = document.createElement("h2");
                h2.textContent = produtos[index].title;
                h2.id = "nomeProduto";
                
                let imgCarrinho = document.createElement("img");
                imgCarrinho.id = "imagensAPI";
                imgCarrinho.src = produtos[index].image;

                let h2Carrinho = document.createElement("h2");
                h2Carrinho.textContent = produtos[index].title;
                h2Carrinho.id = "nomeProduto";


                
                mainDiv.appendChild(img);
                mainDiv.appendChild(h2);    

                
            }
        }
    }
}


// carrinhoImg.addEventListener("click", function colocarCarrinho() {
    
    
//     let url = "https://fakestoreapi.com/carts";
        
        
//     let request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.send();

//     request.onload = function () {
//         if (request.status === 200) {
//             console.log(url);
//             let produtosCarrinho = JSON.parse(request.response);
//             console.log(produtosCarrinho);

//             for (let index = 0; index < produtosCarrinho.length; index++) {
//                 let img = document.createElement("img");
//                 img.id = "imagensAPI";
//                 img.src = produtosCarrinho[index].image;
//                 let h2Modal = document.createElement("h2");
                
//                 h2Modal.innerHTML = "";
                
//                 let h2 = document.createElement("h2");
//                 h2.textContent = produtosCarrinho[index].title;
//                 h2.id = "nomeProduto";
                



                
//                 mainDiv.appendChild(img);
//                 mainDiv.appendChild(h2);    

                
//             }
//         }
//     }
// });

