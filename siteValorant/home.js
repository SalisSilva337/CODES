const divLogo = document.querySelector("#divLogo");
const divHeader = document.querySelector("#divHeader");
const divItens = document.querySelector("#divItens");



divLogo.addEventListener("click", function () {
    if (divHeader.style.width === "0%") {
        divHeader.style.width = "100%";
        setTimeout(() => {
            navBotoes.style.visibility= "visible";
        }, 600);
        divHeader.style.opacity = "1";
        divHeader.style.visibility = "visible";
        
    }
    else {
        setTimeout(() => {
            navBotoes.style.visibility= "hidden";
        }, 0);
        divHeader.style.width = "0%";
        divHeader.style.opacity = "0"; 
        divHeader.style.visibility = "hidden"; 
    }
    
})




window.onload = armasListar();

function armasListar() {
    divItens.innerHTML = "";
    let url = "https://valorant-api.com/v1/weapons";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);

    request.onload = function(){
        if (request.status === 200) {
            
            let todosItens = JSON.parse(request.response);
            console.log(todosItens);
            
            for (let index = 0; index < todosItens.data.length; index++) {
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
                let botaoPadrao = document.createElement("button");
                let spanCont = document.createElement("h3");

                botaoProximo.textContent = ">";
                botaoRetroceder.textContent = "<";
                botaoPadrao.textContent = "Voltar à Skin Padrão";

                botaoProximo.classList = "botoesSlider";
                botaoRetroceder.classList = "botoesSlider";
                botaoPadrao.id = "botaoPadrao"

                modal_divNome.id = "modalDivNome";
                modal_divDesc.id = "modalDivDesc";

                categoriaNome.id = "categoriaNome";
                categoriaImg.id = "categoriaImg";
                divCadaItem.id = "divCadaItem";
                divCategoriaNomeDesc.id = "divCategoriaNomeDesc";


                categoriaImg.src = todosItens.data[index].displayIcon;
                categoriaNome.textContent = todosItens.data[index].displayName;
                    
                
                divCadaItem.appendChild(categoriaImg);
                divCadaItem.appendChild(categoriaNome);
                divItens.appendChild(divCadaItem);

                divCadaItem.addEventListener("click",function (){
                    modal.style.display = "block";
                    divItens.style.visibility = "hidden";
                    
                    
                    modalConteudo.innerHTML = "";

                    modal_CategoriaImg.src = todosItens.data[index].displayIcon;
                    modal_CategoriaImg.id = "modalCategoriaImg";
                    modal_CategoriaNome.textContent = todosItens.data[index].displayName;
                    
                    let contador = -1;
                    
                    modal_divNome.appendChild(modal_CategoriaImg);
                    modal_divNome.appendChild(modal_CategoriaNome);
                    modal_divNome.appendChild(spanCont);
                    modal_divNome.appendChild(botaoPadrao);
                    modalConteudo.appendChild(botaoRetroceder);
                    modalConteudo.appendChild(modal_divNome);
                    modalConteudo.appendChild(botaoProximo);

                    botaoPadrao.addEventListener("click", function () {
                        contador = -1;
                        spanCont.textContent = "";
                        modal_CategoriaImg.src = todosItens.data[index].displayIcon;
                        modal_CategoriaNome.textContent = todosItens.data[index].displayName;
                    });

                    botaoProximo.addEventListener("click", function () {
                        if (contador < todosItens.data[index].skins.length - 1) {
                            contador++;
                            spanCont.textContent = contador + 1 + "/" + todosItens.data[index].skins.length;
                            if (todosItens.data[index].skins[contador].displayIcon === null) {
                                contador++;
                            }
                            if (todosItens.data[index].skins[contador].displayName.startsWith("Standard")) {
                               contador++; 
                            }
                            if (todosItens.data[index].skins[contador].displayName.startsWith("Random")) {
                                contador++; 
                            }

                            modal_CategoriaImg.src = todosItens.data[index].skins[contador].displayIcon;
                            modal_CategoriaNome.textContent = todosItens.data[index].skins[contador].displayName;
                        }
                           
                    });
                
                    botaoRetroceder.addEventListener("click", function () {
                        if (contador > 0) {
                            contador--;
                            spanCont.textContent = contador + 1 + "/" + todosItens.data[index].skins.length;
                            if (todosItens.data[index].skins[contador].displayIcon === null) {
                                contador--;
                            }
                            if (todosItens.data[index].skins[contador].displayName.startsWith("Standard")) {
                                contador--; 
                            }
                            if (todosItens.data[index].skins[contador].displayName.startsWith("Random")) {
                                contador--; 
                            }

                            modal_CategoriaImg.src = todosItens.data[index].skins[contador].displayIcon;
                            modal_CategoriaNome.textContent = todosItens.data[index].skins[contador].displayName;
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


function agentesListar() {
    divItens.innerHTML="";
    let url = "https://valorant-api.com/v1/agents";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);

    request.onload = function(){
        if (request.status === 200) {
            
            let todosItens = JSON.parse(request.response);
            console.log(todosItens);
            
            for (let index = 0; index < todosItens.data.length; index++) {
                if (todosItens.data[index].isPlayableCharacter){
                    
                
                    let categoriaNome = document.createElement("h1");
                    let categoriaImg = document.createElement("img");
                    let divCadaItem = document.createElement("div");
                    let divCategoriaNomeDesc = document.createElement("div");

                    let modal_divNome = document.createElement("div");
                    let modal_divDesc = document.createElement("div");
                    let modal_CategoriaNome = document.createElement("h2");
                    let modal_CategoriaImg = document.createElement("img");
                    

                    

                    modal_divNome.id = "modalDivNome";
                    modal_divDesc.id = "modalDivDesc";

                    categoriaNome.id = "categoriaNome";
                    categoriaImg.id = "categoriaImgAgentes";
                    divCadaItem.id = "divCadaItem";
                    divCategoriaNomeDesc.id = "divCategoriaNomeDesc";


                    categoriaImg.src = todosItens.data[index].displayIcon;
                    categoriaNome.textContent = todosItens.data[index].displayName + " - " + 
                    todosItens.data[index].role.displayName;
                        
                    
                    divCadaItem.appendChild(categoriaImg);
                    divCadaItem.appendChild(categoriaNome);
                    divItens.appendChild(divCadaItem);

                    divCadaItem.addEventListener("click",function (){
                        modal.style.display = "block";
                        divItens.style.visibility = "hidden";
                        
                        
                        modalConteudo.innerHTML = "";

                        modal_CategoriaImg.src = todosItens.data[index].displayIcon;
                        modal_CategoriaImg.id = "modalCategoriaImgAgentes";
                        modal_CategoriaNome.textContent = todosItens.data[index].displayName;
                        
                        
                        
                        modal_divNome.appendChild(modal_CategoriaImg);
                        modal_divNome.appendChild(modal_CategoriaNome);
                        modalConteudo.appendChild(modal_divNome);
                       


                        modalConteudo.addEventListener("mouseleave", function () {
                            modal.style.display = "none";
                            divItens.style.visibility = "visible";
                        });

                    });
                
                }
            }
        }
    }
}

function ranksListar() {
    divItens.innerHTML="";
    let url = "https://valorant-api.com/v1/competitivetiers";

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    console.log(url);

    request.onload = function(){
        if (request.status === 200) {
            
            let todosItens = JSON.parse(request.response);
            console.log(todosItens);
            
            
                    

                    for (let indexRank = 0; indexRank < todosItens.data[4].tiers.length; indexRank++) {
                        
                        let categoriaNome = document.createElement("h1");
                        let categoriaImg = document.createElement("img");
                        let divCadaItem = document.createElement("div");
                        let divCategoriaNomeDesc = document.createElement("div");

                        let modal_divNome = document.createElement("div");
                        let modal_divDesc = document.createElement("div");
                        let modal_CategoriaNome = document.createElement("h2");
                        let modal_CategoriaImg = document.createElement("img");
                    
                        
                    

                        modal_divNome.id = "modalDivNome";
                        modal_divDesc.id = "modalDivDesc";

                        categoriaNome.id = "categoriaNome";
                        categoriaImg.id = "categoriaImgRank";
                        divCadaItem.id = "divCadaItem";
                        divCategoriaNomeDesc.id = "divCategoriaNomeDesc";
                        
                    
                        categoriaImg.src = todosItens.data[4].tiers[indexRank].largeIcon;
                        categoriaNome.textContent = todosItens.data[4].tiers[indexRank].tierName;
                            
                        
                        divCadaItem.appendChild(categoriaImg);
                        divCadaItem.appendChild(categoriaNome);
                        divItens.appendChild(divCadaItem);

                        if (todosItens.data[4].tiers[indexRank].tierName === "UNRANKED") {
                            divCadaItem.remove();
                        }

                        if (todosItens.data[4].tiers[indexRank].tierName === "Unused1") {
                            divCadaItem.remove();
                        }

                        if (todosItens.data[4].tiers[indexRank].tierName === "Unused2") {
                            divCadaItem.remove();
                        }

                        divCadaItem.addEventListener("click",function (){
                            modal.style.display = "block";
                            divItens.style.visibility = "hidden";
                            
                            
                            modalConteudo.innerHTML = "";

                            modal_CategoriaImg.src = todosItens.data[4].tiers[indexRank].largeIcon;
                            modal_CategoriaImg.id = "modalCategoriaImgRank";
                            modal_CategoriaNome.textContent = todosItens.data[4].tiers[indexRank].tierName;
                            
                            
                            
                            modal_divNome.appendChild(modal_CategoriaImg);
                            modal_divNome.appendChild(modal_CategoriaNome);
                            modalConteudo.appendChild(modal_divNome);
                        


                            modalConteudo.addEventListener("mouseleave", function () {
                                modal.style.display = "none";
                                divItens.style.visibility = "visible";
                            });

                        });
                    }
                
            
        }
    }
}