let lojaParte1 = document.querySelector(".lojaParte1");
let lojaParte2 = document.querySelector(".lojaParte2");

window.onload= cosmeticosLoja()


function cosmeticosLoja() {
    let url = "https://fortnite-api.com/v2/shop/br?language=pt-BR";
    console.log(url)
    let request = new XMLHttpRequest;
    request.open("GET", url, false);
    request.send ();


    let listaLoja = JSON.parse(request.response).data.featured.entries;
    console.log(listaLoja);

    for (let index = 0; index <listaLoja.length ; index++) {
        let divCadaItem = document.createElement("div");
        let bundleImg = document.createElement ("img");
        let bundleName = document.createElement ("h2");
        let vbucksImg = document.createElement ("img");
        let vbucksPreco = document.createElement ("h3");

        bundleImg.src =  listaLoja[index].bundle.image;
        bundleName.textContent = listaLoja[index].bundle.name;
        vbucksImg.src = "../imgs/v-bucks.png"
        vbucksPreco.textContent = listaLoja[index].finalPrice;


        divCadaItem.className = "divCadaItem";
        vbucksImg.className = "imgVbucks"


        divCadaItem.appendChild(bundleImg)
        divCadaItem.appendChild(bundleName);
        divCadaItem.appendChild(vbucksImg);
        divCadaItem.appendChild(vbucksPreco);
        lojaParte1.appendChild(divCadaItem);


    }   


}