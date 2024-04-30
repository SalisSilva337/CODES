const divLogo = document.querySelector("#divLogo");
const divHeader = document.querySelector("#divHeader");
const divItens = document.querySelector("#divItens");

divLogo.addEventListener("mouseenter", function () {
   divHeader.style.width = "100%"; 
   divHeader.style.visibility = "visible"; 
});

divLogo.addEventListener("click", function () {
    divHeader.style.width = "0%"; 
    divHeader.style.visibility = "hidden"; 
})




window.onload = paginaInicial();

function paginaInicial() {
    let url = "https://valorant-api.com/v1/weapons";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);

    request.onload = function(){
        if (request.status === 200) {
            
            let todasArmas = JSON.parse(request.response);
            console.log(todasArmas);
            
            for (let index = 0; index < todasArmas.data.length; index++) {
                let categoriaNome = document.createElement("h1");
                let categoriaImg = document.createElement("img");
                let divCadaItem = document.createElement("div");
                let divCategoriaNomeDesc = document.createElement("div");

                let modal_divNome = document.createElement("div");
                let modal_divDesc = document.createElement("div");
                let modal_CategoriaNome = document.createElement("h2");
                let modal_CategoriaImg = document.createElement("img");
                let botaoProximo = document.createElement("button");
                let botaoRetroceder = document.createElement("button");
                

                botaoProximo.textContent = ">";
                botaoRetroceder.textContent = "<";

                botaoProximo.classList = "botoesSlider";
                botaoRetroceder.classList = "botoesSlider";

                modal_divNome.id = "modalDivNome";
                modal_divDesc.id = "modalDivDesc";

                categoriaNome.id = "categoriaNome";
                categoriaImg.id = "categoriaImg";
                divCadaItem.id = "divCadaItem";
                divCategoriaNomeDesc.id = "divCategoriaNomeDesc";


                categoriaImg.src = todasArmas.data[index].displayIcon;
                categoriaNome.textContent = todasArmas.data[index].displayName;
                    
                
                divCadaItem.appendChild(categoriaImg);
                divCadaItem.appendChild(categoriaNome);
                divItens.appendChild(divCadaItem);

                divCadaItem.addEventListener("click",function (){
                    modal.style.display = "block";
                    divItens.style.visibility = "hidden";
                    
                    
                    modalConteudo.innerHTML = "";

                    modal_CategoriaImg.src = todasArmas.data[index].displayIcon;
                    modal_CategoriaImg.id = "modalCategoriaImg";
                    modal_CategoriaNome.textContent = todasArmas.data[index].displayName;
                    
                    let contador = 0 - 1;
                    
                    modal_divNome.appendChild(modal_CategoriaImg);
                    modal_divNome.appendChild(modal_CategoriaNome);
                    modalConteudo.appendChild(botaoRetroceder);
                    modalConteudo.appendChild(modal_divNome);
                    modalConteudo.appendChild(botaoProximo);

                    botaoProximo.addEventListener("click", function () {
                        if (contador < todasArmas.data[index].skins.length - 1) {
                            contador++;

                            if (todasArmas.data[index].skins[contador].displayIcon === null) {
                                contador++;
                            }

                            if (todasArmas.data[index].skins[contador].displayName.startsWith("Standard")) {
                               contador++; 
                            }
                            modal_CategoriaImg.src = todasArmas.data[index].skins[contador].displayIcon;
                            modal_CategoriaNome.textContent = todasArmas.data[index].skins[contador].displayName;
                        }
                           
                    });
                
                    botaoRetroceder.addEventListener("click", function () {
                        if (contador > 0) {
                            contador--;

                            if (todasArmas.data[index].skins[contador].displayIcon === null) {
                                contador--;
                            }

                            if (todasArmas.data[index].skins[contador].displayName.startsWith("Standard")) {
                                contador--; 
                            }

                            modal_CategoriaImg.src = todasArmas.data[index].skins[contador].displayIcon;
                            modal_CategoriaNome.textContent = todasArmas.data[index].skins[contador].displayName;
                        }
                    });

                });

                modalConteudo.addEventListener("mouseleave", function () {
                    modal.style.display = "none";
                    divItens.style.visibility = "visible";
                });

            
            }
        }
    }
}

