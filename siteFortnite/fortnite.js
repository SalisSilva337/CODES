let botaoDetalhes = document.querySelector(".botaoDetalhes");
let botaoSelecionar= document.querySelector(".botaoSelecionar");
let divMostrarItem = document.querySelector(".divMostrarItem");
let mostrarItem = document.querySelector(".mostrarItem");
let addVbucks = document.querySelector(".addVbucks");
let valorVbucks = document.querySelector(".valorVbucks");
let modal = document.querySelector(".modal");
let modalConteudo = document.querySelector(".modalConteudo");
let categorias = document.querySelectorAll(".categorias");
let categorias2 = document.querySelectorAll(".categorias2");

let listaMusicaLobby = ["songs/OG.mp3","songs/Floss.mp3","songs/StormShredder.mp3"];
let listaImg = ["imgs/og.webp","imgs/floss.webp","imgs/StormShredder.webp"];

let posicao = 0;

for (let index = 0; index < listaMusicaLobby.length; index++) {
    if (condition) {
        
    }
    
}



let contador = 0;
addVbucks.addEventListener("click", function () {
    valorVbucks.textContent = contador += 100;

});

  
function vestiario() {
    window.location.href = "fortnite.html";
}

function loja() {
    window.location.href = "loja/loja.html";
}

function skins() {
    divMostrarItem.style.display = "flex";
    mostrarItem.innerHTML="";
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=outfit";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 200; index++) {
        let skinImg = document.createElement("img");

        let divCadaItem = document.createElement("div");

        divCadaItem.className = "divCadaItem";
        
        if (listaTrajes[index].name === "PNJ") {
            index++
        }
        if (listaTrajes[index].name.startsWith("TBD")) {
            index++
        }
        if (listaTrajes[index].id.startsWith("CID_NPC")) {
            index++
        }
        if (listaTrajes[index].description.startsWith("Set_")) {
            index++
        }
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg);
        mostrarItem.appendChild(divCadaItem);
        
        let skinNameModal = document.createElement("h1");
        let skinDescModal = document.createElement("h2");
        let skinImgModal = document.createElement("img");
        let divDescModal = document.createElement("div");

        skinDescModal.textContent = listaTrajes[index].description;
        skinImgModal.src = listaTrajes[index].images.icon;
        skinNameModal.textContent = listaTrajes[index].name;

        skinImgModal.className = "skinImgModal";
        divDescModal.className = "divDescModal";

        divCadaItem.addEventListener("click", function () {
            
            botaoDetalhes.addEventListener("click", function () {
                modal.style.display = "flex";
                modalConteudo.innerHTML="";
                divCadaItem.className = "divCadaItem";
                modal.addEventListener("click", function () {
                    modal.style.display = "none"
                });
                
                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

                

            });
            
            botaoSelecionar.addEventListener("click", function () {
                categorias[0].innerHTML="";
                divMostrarItem.style.display = "none"
                categorias[0].appendChild(skinImg);
            });

            if (divCadaItem.className === "divCadaItem") {
                divCadaItem.className = "selecionado";
               
            }
            
            else{
                divCadaItem.className = "divCadaItem";
            }
            
        });
        
    }
}
function mochilas() {
    divMostrarItem.style.display = "flex";
    mostrarItem.innerHTML="";
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=backpack";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 200; index++) {
        let skinImg = document.createElement("img");

        let divCadaItem = document.createElement("div");

        divCadaItem.className = "divCadaItem";
        
        if (listaTrajes[index].name === "PNJ") {
            index++
        }
        if (listaTrajes[index].name.startsWith("TBD")) {
            index++
        }
        if (listaTrajes[index].id.startsWith("CID_NPC")) {
            index++
        }
        if (listaTrajes[index].description.startsWith("Set_")) {
            index++
        }
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg);
        mostrarItem.appendChild(divCadaItem);
        
        let skinNameModal = document.createElement("h1");
        let skinDescModal = document.createElement("h2");
        let skinImgModal = document.createElement("img");
        let divDescModal = document.createElement("div");

        skinDescModal.textContent = listaTrajes[index].description;
        skinImgModal.src = listaTrajes[index].images.icon;
        skinNameModal.textContent = listaTrajes[index].name;

        skinImgModal.className = "skinImgModal";
        divDescModal.className = "divDescModal";

        divCadaItem.addEventListener("click", function () {
            botaoDetalhes.addEventListener("click", function () {
                modal.style.display = "flex";
                modalConteudo.innerHTML="";
                divCadaItem.className = "divCadaItem";
                modal.addEventListener("click", function () {
                    modal.style.display = "none"
                });
                
                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

            });
            
            botaoSelecionar.addEventListener("click", function () {
                categorias[1].innerHTML="";
                divMostrarItem.style.display = "none"
                categorias[1].appendChild(skinImg);
            });

            if (divCadaItem.className === "divCadaItem") {
                divCadaItem.className = "selecionado";
               
            }
            
            else{
                divCadaItem.className = "divCadaItem";
            }
            
        });
        
    }
}
function picaretas() {
    divMostrarItem.style.display = "flex";
    mostrarItem.innerHTML="";
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=pickaxe";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 200; index++) {
        let skinImg = document.createElement("img");

        let divCadaItem = document.createElement("div");

        divCadaItem.className = "divCadaItem";
        
        if (listaTrajes[index].name === "PNJ") {
            index++
        }
        if (listaTrajes[index].name.startsWith("TBD")) {
            index++
        }
        if (listaTrajes[index].id.startsWith("CID_NPC")) {
            index++
        }
        if (listaTrajes[index].description.startsWith("Set_")) {
            index++
        }
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg);
        mostrarItem.appendChild(divCadaItem);
        
        let skinNameModal = document.createElement("h1");
        let skinDescModal = document.createElement("h2");
        let skinImgModal = document.createElement("img");
        let divDescModal = document.createElement("div");

        skinDescModal.textContent = listaTrajes[index].description;
        skinImgModal.src = listaTrajes[index].images.icon;
        skinNameModal.textContent = listaTrajes[index].name;

        skinImgModal.className = "skinImgModal";
        divDescModal.className = "divDescModal";

        divCadaItem.addEventListener("click", function () {
            botaoDetalhes.addEventListener("click", function () {
                modal.style.display = "flex";
                divCadaItem.className = "divCadaItem";
                modalConteudo.innerHTML="";
                
                modal.addEventListener("click", function () {
                    modal.style.display = "none"
                });

                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

            });
            
            botaoSelecionar.addEventListener("click", function () {
                categorias[2].innerHTML="";
                divMostrarItem.style.display = "none"
                categorias[2].appendChild(skinImg);
            });

            if (divCadaItem.className === "divCadaItem") {
                divCadaItem.className = "selecionado";
               
            }
            
            else{
                divCadaItem.className = "divCadaItem";
            }
            
        });
        
    }
}

function asadeltas() {
    divMostrarItem.style.display = "flex";
    mostrarItem.innerHTML="";
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=glider";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 200; index++) {
        let skinImg = document.createElement("img");

        let divCadaItem = document.createElement("div");

        divCadaItem.className = "divCadaItem";
        
        if (listaTrajes[index].name === "PNJ") {
            index++
        }
        if (listaTrajes[index].name.startsWith("TBD")) {
            index++
        }
        if (listaTrajes[index].id.startsWith("CID_NPC")) {
            index++
        }
        if (listaTrajes[index].description.startsWith("Set_")) {
            index++
        }
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg);
        mostrarItem.appendChild(divCadaItem);
        
        let skinNameModal = document.createElement("h1");
        let skinDescModal = document.createElement("h2");
        let skinImgModal = document.createElement("img");
        let divDescModal = document.createElement("div");

        skinDescModal.textContent = listaTrajes[index].description;
        skinImgModal.src = listaTrajes[index].images.icon;
        skinNameModal.textContent = listaTrajes[index].name;

        skinImgModal.className = "skinImgModal";
        divDescModal.className = "divDescModal";

        divCadaItem.addEventListener("click", function () {
            botaoDetalhes.addEventListener("click", function () {
                modal.style.display = "flex";
                modalConteudo.innerHTML="";
                divCadaItem.className = "divCadaItem";

                modal.addEventListener("click", function () {
                    modal.style.display = "none"
                });
                
                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

            });
            
            botaoSelecionar.addEventListener("click", function () {
                categorias[3].innerHTML="";
                divMostrarItem.style.display = "none"
                categorias[3].appendChild(skinImg);
            });

            if (divCadaItem.className === "divCadaItem") {
                divCadaItem.className = "selecionado";
               
            }
            
            else{
                divCadaItem.className = "divCadaItem";
            }
            
        });
        
    }
}

function rastros() {
    divMostrarItem.style.display = "flex";
    mostrarItem.innerHTML="";
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=contrail";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 200; index++) {
        let skinImg = document.createElement("img");

        let divCadaItem = document.createElement("div");

        divCadaItem.className = "divCadaItem";
        
        if (listaTrajes[index].name === "PNJ") {
            index++
        }
        if (listaTrajes[index].name.startsWith("TBD")) {
            index++
        }
        if (listaTrajes[index].id.startsWith("CID_NPC")) {
            index++
        }
        if (listaTrajes[index].description.startsWith("Set_")) {
            index++
        }
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg);
        mostrarItem.appendChild(divCadaItem);
        
        let skinNameModal = document.createElement("h1");
        let skinDescModal = document.createElement("h2");
        let skinImgModal = document.createElement("img");
        let divDescModal = document.createElement("div");

        skinDescModal.textContent = listaTrajes[index].description;
        skinImgModal.src = listaTrajes[index].images.icon;
        skinNameModal.textContent = listaTrajes[index].name;

        skinImgModal.className = "skinImgModal";
        divDescModal.className = "divDescModal";

        divCadaItem.addEventListener("click", function () {
            botaoDetalhes.addEventListener("click", function () {
                modal.style.display = "flex";
                modalConteudo.innerHTML="";
                divCadaItem.className = "divCadaItem";

                modal.addEventListener("click", function () {
                    modal.style.display = "none"
                });
                
                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

            });

            botaoSelecionar.addEventListener("click", function () {
                categorias[4].innerHTML="";
                divMostrarItem.style.display = "none"
                categorias[4].appendChild(skinImg);
            });

            if (divCadaItem.className === "divCadaItem") {
                divCadaItem.className = "selecionado";
               
            }
            
            else{
                divCadaItem.className = "divCadaItem";
            }
            
        });
        
    }
}

function telasdecarregamento() {
    divMostrarItem.style.display = "flex";
    mostrarItem.innerHTML="";

    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=loadingscreen";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 200; index++) {
        let skinImg = document.createElement("img");

        let divCadaItem = document.createElement("div");

        divCadaItem.className = "divCadaItem";
        
        if (listaTrajes[index].name === "PNJ") {
            index++
        }
        if (listaTrajes[index].name.startsWith("TBD")) {
            index++
        }
        if (listaTrajes[index].id.startsWith("CID_NPC")) {
            index++
        }
        if (listaTrajes[index].description.startsWith("Set_")) {
            index++
        }
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg);
        mostrarItem.appendChild(divCadaItem);
        
        let skinNameModal = document.createElement("h1");
        let skinDescModal = document.createElement("h2");
        let skinImgModal = document.createElement("img");
        let divDescModal = document.createElement("div");

        skinDescModal.textContent = listaTrajes[index].description;
        skinImgModal.src = listaTrajes[index].images.icon;
        skinNameModal.textContent = listaTrajes[index].name;

        skinImgModal.className = "skinImgModal";
        divDescModal.className = "divDescModal";

        divCadaItem.addEventListener("click", function () {
            botaoDetalhes.addEventListener("click", function () {
                modal.style.display = "flex";
                modalConteudo.innerHTML="";
                divCadaItem.className = "divCadaItem";
                modal.addEventListener("click", function () {
                    modal.style.display = "none"
                });
                
                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

            });

            botaoSelecionar.addEventListener("click", function () {
                categorias[5].innerHTML="";
                divMostrarItem.style.display = "none"
                categorias[5].appendChild(skinImg);
            });

            if (divCadaItem.className === "divCadaItem") {
                divCadaItem.className = "selecionado";
               
            }
            
            else{
                divCadaItem.className = "divCadaItem";
            }
            
        });
        
    }
}

function gestos(penis) {
    divMostrarItem.style.display = "flex";
    mostrarItem.innerHTML="";

    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=emote";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 200; index++) {
        let skinImg = document.createElement("img");

        let divCadaItem = document.createElement("div");

        divCadaItem.className = "divCadaItem";
        
        if (listaTrajes[index].name === "PNJ") {
            index++
        }
        if (listaTrajes[index].name.startsWith("TBD")) {
            index++
        }
        if (listaTrajes[index].id.startsWith("CID_NPC")) {
            index++
        }
        if (listaTrajes[index].description.startsWith("Set_")) {
            index++
        }
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg);
        mostrarItem.appendChild(divCadaItem);
        
        let skinNameModal = document.createElement("h1");
        let skinDescModal = document.createElement("h2");
        let skinImgModal = document.createElement("img");
        let divDescModal = document.createElement("div");

        skinDescModal.textContent = listaTrajes[index].description;
        skinImgModal.src = listaTrajes[index].images.icon;
        skinNameModal.textContent = listaTrajes[index].name;

        skinImgModal.className = "skinImgModal";
        divDescModal.className = "divDescModal";

        divCadaItem.addEventListener("click", function () {
            botaoDetalhes.addEventListener("click", function () {
                modal.style.display = "flex";
                modalConteudo.innerHTML="";
                divCadaItem.className = "divCadaItem";
                modal.addEventListener("click", function () {
                    modal.style.display = "none"
                });
                
                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

            });
                botaoSelecionar.addEventListener("click", function () {
                    penis.innerHTML="";
                    divMostrarItem.style.display = "none"
                    penis.appendChild(skinImg);
                });
            
                
           
            

            if (divCadaItem.className === "divCadaItem") {
                divCadaItem.className = "selecionado";
               
            }
            
            else{
                divCadaItem.className = "divCadaItem";
            }
            
        });
        
    }
}
