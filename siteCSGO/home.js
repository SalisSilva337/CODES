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







function buscarSkins(botao){
    
    divItens.innerHTML = "";
    
    let url = "https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);
    
    request.onload = function(){
        let todasSkins = JSON.parse(request.response);

        let tiposSkins = todasSkins.filter((item) => item.category.name == botao.textContent);
        console.log(tiposSkins);

        if (request.status === 200) {
            for (let index = 0; index < tiposSkins.length; index++) {
                
                let categoriaNome = document.createElement("h2");
                let categoriaImg = document.createElement("img");
                let divCadaItem = document.createElement("div");
                let divCategoriaNomeDesc = document.createElement("div");

                let modal_divNome = document.createElement("div");
                let modal_divDesc = document.createElement("div");
                let modal_CategoriaNome = document.createElement("h2");
                let modal_CategoriaImg = document.createElement("img");
                let modal_CategoriaDescricao = document.createElement("h3");

                modal_divNome.id = "modalDivNome";
                modal_divDesc.id = "modalDivDesc";

                categoriaImg.id = "categoriaImg";
                divCadaItem.id = "divCadaItem";
                divCategoriaNomeDesc.id = "divCategoriaNomeDesc";
            
                categoriaImg.src = tiposSkins[index].image;
                categoriaNome.textContent = tiposSkins[index].name;
                    
                divCadaItem.appendChild(categoriaImg);
                divCadaItem.appendChild(categoriaNome);
                divItens.appendChild(divCadaItem);

                divCadaItem.addEventListener("click",function (){
                    modalConteudo.innerHTML = "";

                    setTimeout(() => {
                        modal.style.display = "block";
                    }, 500);
                    
                    container.style.visibility = "hidden";
                    

                    modal_CategoriaImg.src = tiposSkins[index].image;
                    modal_CategoriaImg.id = "modalCategoriaImg";
                    modal_CategoriaNome.textContent = tiposSkins[index].name;
                    modal_CategoriaDescricao.textContent = tiposSkins[index].description;

                    modal_divNome.appendChild(modal_CategoriaNome);
                    modal_divDesc.appendChild(modal_CategoriaDescricao);
                    modalConteudo.appendChild(modal_CategoriaImg);
                    modalConteudo.appendChild(modal_divNome);
                    modalConteudo.appendChild(modal_divDesc);

                });

                modal.addEventListener("click", function () {
                    modal.style.display = "none";
                    container.style.visibility = "visible";
                });
 
            }
        }
    }
}

function allSkins(){
    
    divItens.innerHTML = "";
    
    let url = "https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);
    
    request.onload = function(){
        let todasSkins = JSON.parse(request.response);
        console.log(todasSkins);
        if (request.status === 200) {
            for (let index = 0; index < todasSkins.length; index++) {
                
                let categoriaNome = document.createElement("h2");
                let categoriaImg = document.createElement("img");
                let divCadaItem = document.createElement("div");
                let divCategoriaNomeDesc = document.createElement("div");

                let modal_divNome = document.createElement("div");
                let modal_divDesc = document.createElement("div");
                let modal_CategoriaNome = document.createElement("h2");
                let modal_CategoriaImg = document.createElement("img");
                let modal_CategoriaDescricao = document.createElement("h3");
                modal_divNome.id = "modalDivNome";
                modal_divDesc.id = "modalDivDesc";

                

                categoriaImg.id = "categoriaImg";
                divCadaItem.id = "divCadaItem";
                divCategoriaNomeDesc.id = "divCategoriaNomeDesc";
            
                categoriaImg.src = todasSkins[index].image;
                categoriaNome.textContent = todasSkins[index].name;
                    
                divCadaItem.appendChild(categoriaImg);
                divCadaItem.appendChild(categoriaNome);
                divItens.appendChild(divCadaItem);

                divCadaItem.addEventListener("click",function (){
                    setTimeout(() => {
                        modal.style.display = "block";
                    }, 500);
                    
                    container.style.visibility = "hidden";
                    modalConteudo.innerHTML = "";

                    modal_CategoriaImg.src = todasSkins[index].image;
                    modal_CategoriaImg.id = "modalCategoriaImg";
                    modal_CategoriaNome.textContent = todasSkins[index].name;
                    modal_CategoriaDescricao.textContent = todasSkins[index].description;

                    modal_divNome.appendChild(modal_CategoriaNome);
                    modal_divDesc.appendChild(modal_CategoriaDescricao);
                    modalConteudo.appendChild(modal_CategoriaImg);
                    modalConteudo.appendChild(modal_divNome);
                    modalConteudo.appendChild(modal_divDesc);

                });

                modal.addEventListener("click", function () {
                    modal.style.display = "none";
                    container.style.visibility = "visible";
                })
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
            
            let todasSkins = JSON.parse(request.response);
            console.log(todasSkins);

            for (let index = 0; index < todasSkins.length; index++) {
                let categoriaNome = document.createElement("h2");
                let categoriaImg = document.createElement("img");
                let divCadaItem = document.createElement("div");
                let divCategoriaNomeDesc = document.createElement("div");

                let modal_divNome = document.createElement("div");
                let modal_divDesc = document.createElement("div");
                let modal_CategoriaNome = document.createElement("h2");
                let modal_CategoriaImg = document.createElement("img");
                let modal_CategoriaDescricao = document.createElement("h3");
                modal_divNome.id = "modalDivNome";
                modal_divDesc.id = "modalDivDesc";

                
                categoriaImg.id = "categoriaImg";
                divCadaItem.id = "divCadaItem";
                divCategoriaNomeDesc.id = "divCategoriaNomeDesc";


                categoriaImg.src = todasSkins[index].image;
                categoriaNome.textContent = todasSkins[index].name;
                    
                
                divCadaItem.appendChild(categoriaImg);
                divCadaItem.appendChild(categoriaNome);
                divItens.appendChild(divCadaItem);

                divCadaItem.addEventListener("click",function (){
                    setTimeout(() => {
                        modal.style.display = "block";
                    }, 500);
                    
                    container.style.visibility = "hidden";
                    modalConteudo.innerHTML = "";

                    modal_CategoriaImg.src = todasSkins[index].image;
                    modal_CategoriaImg.id = "modalCategoriaImg";
                    modal_CategoriaNome.textContent = todasSkins[index].name;
                    modal_CategoriaDescricao.textContent = todasSkins[index].description;

                    modal_divNome.appendChild(modal_CategoriaNome);
                    modal_divDesc.appendChild(modal_CategoriaDescricao);
                    modalConteudo.appendChild(modal_CategoriaImg);
                    modalConteudo.appendChild(modal_divNome);
                    modalConteudo.appendChild(modal_divDesc);

                });

                modal.addEventListener("click", function () {
                    modal.style.display = "none";
                    container.style.visibility = "visible";
                });

            
            }
        }
    }
}