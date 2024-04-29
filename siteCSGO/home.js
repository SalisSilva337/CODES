const miniDivImg = document.querySelectorAll(".miniDivImg");
const modalDesc = document.querySelectorAll(".modalDesc");
const skinsCategorias = document.querySelectorAll(".skinsCategorias");
const musica = document.querySelector("#musica");
const todosBotoes = document.getElementsByTagName("button");
const clickSom = document.querySelector("#clickSom");
const listaImagens = ["imgs/slider/csgoPrincipal.png","imgs/slider/csgo5.gif","imgs/slider/csgo1.jpg","imgs/slider/csgo2.png","imgs/slider/csgo3.jpg","imgs/slider/csgo4.jpg"];

for (let index = 0; index < miniDivImg.length; index++) {
    miniDivImg[index].addEventListener("mouseenter", function () {
        
            modalDesc[index].style.display = "flex";  
            
    });

    miniDivImg[index].addEventListener("mouseout", function () {
        
        modalDesc[index].style.display = "none";  
    });
    
}

for (let index = 0; index < todosBotoes.length; index++) {
    todosBotoes[index].addEventListener("click", function () {
        clickSom.volume = 0.3;
        clickSom.play();
    
    });
}

function tocarMusica() {
    musica.play();
    musica.volume = 0.15;
}

window.onload = paginaInicial();

function paginaInicial() {
    divItens.innerHTML = "";

    const divMaior = document.createElement("div")
    const divSlider = document.createElement("div");
    const imgSlider = document.createElement("img");
    const botaoProximo = document.createElement("button");
    const botaoRetroceder = document.createElement("button");
    let contador = 0;

    botaoProximo.textContent = ">";
    botaoRetroceder.textContent = "<";

    imgSlider.id = "imgSlider";
    imgSlider.src = listaImagens[0];

    botaoProximo.classList = "botoesSlider";
    botaoRetroceder.classList = "botoesSlider";
    divMaior.id = "divMaior";
    divSlider.id = "divSlider";
    divSlider.appendChild(botaoRetroceder);
    divSlider.appendChild(imgSlider);
    divSlider.appendChild(botaoProximo);
    divMaior.appendChild(divSlider)
    divItens.appendChild(divMaior);

    botaoProximo.addEventListener("click", function () {
        setTimeout(() => {
            imgSlider.style.animation = "" 
        }, 500);
        imgSlider.style.animation = "imgAnim 0.5s" 
        if (contador < listaImagens.length - 1) {
            contador++
            imgSlider.src = listaImagens[contador];
            
        }
           
    });

    botaoRetroceder.addEventListener("click", function () {
        setTimeout(() => {
            imgSlider.style.animation = "" 
        }, 1000);
        imgSlider.style.animation = "imgAnim 1s" 
        if (contador > 0) {
            contador--
            imgSlider.src = listaImagens[contador]; 
        }
    });
}







function buscarSkins(){
    
    divItens.innerHTML = "";
    
    let url = "https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);
    
    request.onload = function(){
        if (request.status === 200) {
            
            let produtos = JSON.parse(request.response);
            console.log(produtos);
            for (let index = 0; index < produtos.length; index++) {
                
                let categoriaNome = document.createElement("h2");
                let categoriaImg = document.createElement("img");
                let divCadaItem = document.createElement("div");
                let divCategoriaNomeDesc = document.createElement("div");

                categoriaImg.id = "categoriaImg";
                divCadaItem.id = "divCadaItem";
                divCategoriaNomeDesc.id = "divCategoriaNomeDesc";
                
                
                categoriaImg.src = produtos[index].image;
                categoriaNome.textContent = produtos[index].name;
                    
                divCadaItem.appendChild(categoriaImg);
                divCadaItem.appendChild(categoriaNome);
                divItens.appendChild(divCadaItem);

                // produtos[index].category.name = botao.textContent;
                // if (produtos[index].category.name === "Pistolas") {
                    
                // }

                // if (produtos[index].category.name === "Rifles") {
                //     categoriaImg.src = produtos[index].image;
                //     categoriaNome.textContent = produtos[index].name;
                    
                //     divCadaItem.appendChild(categoriaImg);
                //     divCadaItem.appendChild(categoriaNome);
                //     divItens.appendChild(divCadaItem);
                // }
                
            
                
               
                
                
            }
        }
    }
}

function buscarOutros(botao){
    divItens.innerHTML = "";
   
    let url = "https://bymykel.github.io/CSGO-API/api/pt-BR/"+ botao.value + ".json";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);
    request.onload = function(){
        if (request.status === 200) {
            
            let produtos = JSON.parse(request.response);
            console.log(produtos);

            for (let index = 0; index < produtos.length; index++) {
                let categoriaNome = document.createElement("h2");
                let categoriaImg = document.createElement("img");
                let divCadaItem = document.createElement("div");
                let divCategoriaNomeDesc = document.createElement("div");

                categoriaImg.id = "categoriaImg";
                divCadaItem.id = "divCadaItem";
                divCategoriaNomeDesc.id = "divCategoriaNomeDesc";


                categoriaImg.src = produtos[index].image;
                categoriaNome.textContent = produtos[index].name;
                    
                


                divCadaItem.appendChild(categoriaImg);
                divCadaItem.appendChild(categoriaNome);
                divItens.appendChild(divCadaItem);
            
            }
        }
    }
}