let mostrarItem = document.querySelector(".mostrarItem");



window.onload = cosmeticos();


function cosmeticos() {
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=outfit";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();
    

    let listaTrajes = JSON.parse(request.response).data
    console.log(listaTrajes);

    for (let index = 0; index < listaTrajes.length; index++) {
        let skinImg = document.createElement("img");
        let skinName = document.createElement("h1");
        let skinDesc = document.createElement("h2");
        let divCadaItem = document.createElement('div');

        divCadaItem.className = "divCadaItem";
        
        skinImg.src = listaTrajes[index].images.smallIcon;
        divCadaItem.appendChild(skinImg)
        mostrarItem.appendChild(divCadaItem)
    }
}