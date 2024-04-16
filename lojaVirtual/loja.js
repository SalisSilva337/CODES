let mainDiv = document.querySelector("#mainDiv");
let modal = document.querySelector("#modal");
let spanFechar = document.querySelector("#spanFechar");



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
                let h2Modal = document.createElement("h2");
                
                h2Modal.innerHTML = "";
                
                img.addEventListener("click",function (){
                    modal.style.display = "block";
                    h2Modal.textContent = produtos[index].description;
                    modalConteudo.appendChild(h2Modal);
                    img.style.opacity = 0.7;
                });

                spanFechar.addEventListener("click",function (){
                    modal.style.display = "none";
                    modalConteudo.removeChild(h2Modal);
                    img.style.opacity = 1;
                });

                let h2 = document.createElement("h2");
                h2.textContent = produtos[index].title;
                h2.id = "nomeProduto";
                



                
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
        if (request.status === 200) {
            console.log(url);
            let produtosEletronicos = JSON.parse(request.response);
            console.log(produtos);

            for (let index = 0; index < produtos.length; index++) {
                let img = document.createElement("img");
                let imgSrc = img.src;
                imgSrc = produtos[index].image;
                    
                mainDiv.appendChild(imgSrc);
                    
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
        if (request.status === 200) {
            console.log(url);
            let produtosJoias = JSON.parse(request.response);
            console.log(produtosJoias);

            for (let index = 0; index < produtos.length; index++) {
                let img = document.createElement("img");
                let imgSrc = img.src;
                imgSrc = produtos[index].image;
                    
                mainDiv.appendChild(imgSrc);
                    
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
        if (request.status === 200) {
            console.log(url);
            let produtosMasculino = JSON.parse(request.response);
            console.log(produtosMasculino);

            for (let index = 0; index < produtos.length; index++) {
                let img = document.createElement("img");
                let imgSrc = img.src;
                imgSrc = produtos[index].image;
                    
                mainDiv.appendChild(imgSrc);
                    
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
        if (request.status === 200) {
            console.log(url);
            let produtosFeminino = JSON.parse(request.response);
            console.log(produtosFeminino);

            for (let index = 0; index < produtos.length; index++) {
                let img = document.createElement("img");
                let imgSrc = img.src;
                imgSrc = produtos[index].image;
                    
                mainDiv.appendChild(imgSrc);
                    
            }
        }
    }
}