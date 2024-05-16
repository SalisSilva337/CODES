let mostrarItem = document.querySelector(".mostrarItem");



window.onload = cosmeticos();


function cosmeticos() {
    let url = "https://fortnite-api.com/v2/cosmetics/br/search/all?language=pt-BR&type=outfit";
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();
    

    let listaTrajes = JSON.parse(request.response).data
    console.log(listaTrajes);

    for (let index = 0; index < 1000; index++) {
        let skinImg = document.createElement("img");
        let skinName = document.createElement("h1");
        let skinDesc = document.createElement("h2");
        let divCadaItem = document.createElement('div');

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
        divCadaItem.appendChild(skinImg)
        mostrarItem.appendChild(divCadaItem)
    }
}