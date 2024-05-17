let botaoDetalhes = document.querySelector(".botaoDetalhes");
let mostrarItem = document.querySelector(".mostrarItem");
let addVbucks = document.querySelector(".addVbucks");
let valorVbucks = document.querySelector(".valorVbucks");
let modal = document.querySelector(".modal");
let modalConteudo = document.querySelector(".modalConteudo");


window.onload = cosmeticos();



let contador = 100;
addVbucks.addEventListener("click", function () {
    valorVbucks.textContent = contador;
    contador++
});

  



function cosmeticos(selecionado) {
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=outfit";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaTrajes = JSON.parse(request.response).data;
    console.log(listaTrajes);

    for (let index = 0; index < 1000; index++) {
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
                
                
                modalConteudo.appendChild(skinImgModal)
                divDescModal.appendChild(skinNameModal)
                divDescModal.appendChild(skinDescModal)
                modalConteudo.appendChild(divDescModal)

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







