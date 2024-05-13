

let contador = 0;

window.onload = teste();

function teste() {
   
    let url = "https://api.rawg.io/api/games?key=7167fca1266b4901bafc14dbd90c0a9b";
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    
    request.send();

    let listaGames = JSON.parse(request.response);
    console.log(listaGames);
    for (let index = 0; index < listaGames.results.length; index++) {
        
        let divCadaItem = document.createElement("div");
        let divCadaItemInfo = document.createElement("div");
        let divAbsolute = document.createElement("div");

        let nomeJogo = document.createElement("h2");
        let imgJogo = document.createElement("img");
        let dataLancamento = document.createElement("h3");
        let genero = document.createElement("h3");

        nomeJogo.textContent = listaGames.results[index].name;
        imgJogo.src = listaGames.results[index].background_image;
        dataLancamento.textContent = "Release Date: " + listaGames.results[index].released;
        genero.textContent = "Genre: " + listaGames.results[index].genres[0].name;


        nomeJogo.id = "nomeJogo";
        imgJogo.id = "imgJogo";
        dataLancamento.id = "dataLancamento";
        divCadaItem.id = "divCadaItem";
        divCadaItemInfo.id = "divCadaItemInfo";
        divAbsolute.id = "divAbsolute";

        
        divCadaItem.appendChild(imgJogo);
        divCadaItem.appendChild(nomeJogo);
        divCadaItemInfo.appendChild(dataLancamento);
        divCadaItemInfo.appendChild(genero);
        divCadaItem.appendChild(divCadaItemInfo);
        divAbsolute.appendChild(divCadaItem);
        divCentral.appendChild(divAbsolute);

        divCadaItem.addEventListener("mouseover", function () {
            contador++
            imgJogo.src = listaGames.results[index].short_screenshots[contador].image;
            let fodase = setInterval(() => {
                contador++
                imgJogo.src = listaGames.results[index].short_screenshots[contador].image;
            }, 2000);

            divCadaItem.addEventListener("mouseout", function () {
                clearInterval(fodase)
                imgJogo.src = listaGames.results[index].background_image;
                contador = 0;
            });
        });

       
    }
}