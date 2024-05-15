let divPopulares = document.querySelector(".divPopulares");
let divFilmesSeries = document.querySelector("#divFilmesSeries");
let divAvaliados = document.querySelector(".divAvaliados");
let divTvPopulares = document.querySelector(".divTvPopulares");
let divTvAvaliadas = document.querySelector(".divTvAvaliadas");
let listar = document.querySelectorAll(".listar");
let botaoModo = document.querySelector("#botaoModo");
let trocaModo = document.querySelector("#trocaModo");

let contador = 0;

function homee() {
    window.location.href = "filmes.html";
}


botaoModo.addEventListener("click", function () {
    if (divModos.style.display === "none") {
        divModos.style.display = "flex";
    }
    else {
        divModos.style.display = "none" ;
    }
});

trocaModo.addEventListener("click", function () {
    if (trocaModo.value === "1") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        
    }
    else {
        body.style.backgroundColor = "rgb(25, 24, 24)";
        body.style.color = "white";
       
    }
});



let h1nome = document.createElement("h1");
let h1nome2 = document.createElement("h1");
let h1nome3 = document.createElement("h1");
let h1nome4 = document.createElement("h1");
let h1Div1 = document.createElement("div");
let h1Div2 = document.createElement("div");
let h1Div3 = document.createElement("div");
let h1Div4 = document.createElement("div");

h1nome.textContent = "Filmes Populares:";
h1nome2.textContent = "Filmes Melhores Avaliados:";
h1nome3.textContent = "Séries/TV Populares:";
h1nome4.textContent = "Séries/TV Melhores Avaliados:";

h1Div1.className = "h1Div";
h1Div2.className = "h1Div";
h1Div3.className = "h1Div";
h1Div4.className = "h1Div";


window.onload = home();


function home(){
    divPopulares.innerHTML="";
    divAvaliados.innerHTML="";
    divTvPopulares.innerHTML="";
    divTvAvaliadas.innerHTML="";

    let url = "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=";

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    console.log(url);

    let todaLista = JSON.parse(request.response);
    console.log(todaLista);

    h1Div1.appendChild(h1nome);
    divPopulares.appendChild(h1Div1);

    for (let index = 0; index < todaLista.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let divConjunto = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");
        
        let divImg = document.createElement("div");
        let descItem = document.createElement("h2");
        
        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        descItem.id = "descItem";
        divImg.id = "divImg";
        divConjunto.id = "divConjunto";

        imgItem.src = urlItens + todaLista.results[index].poster_path;
        nomeItem.textContent = todaLista.results[index].title;
        descItem.textContent = todaLista.results[index].overview.slice(0,200) + "...";
        
        
        divImg.appendChild(imgItem);
        divImg.appendChild(descItem);

        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divConjunto.appendChild(divCadaItem);
        divAvaliados.appendChild(divConjunto);

        divConjunto.appendChild(divCadaItem);
        divPopulares.appendChild(divConjunto);
    }

    let url2 = "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR";

    request.open("GET", url2, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    console.log(url2);

    let todaLista2 = JSON.parse(request.response);
    console.log(todaLista);

    h1Div2.appendChild(h1nome2);
    divAvaliados.appendChild(h1Div2);

    for (let index = 0; index < todaLista2.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let divConjunto = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");
        
        let divImg = document.createElement("div");
        let descItem = document.createElement("h2");
        
        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        descItem.id = "descItem";
        divImg.id = "divImg";
        divConjunto.id = "divConjunto";

        imgItem.src = urlItens + todaLista2.results[index].poster_path;
        nomeItem.textContent = todaLista2.results[index].title;
        descItem.textContent = todaLista2.results[index].overview.slice(0,200) + "...";
        
        divImg.appendChild(imgItem);
        divImg.appendChild(descItem);

        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divConjunto.appendChild(divCadaItem);
        divAvaliados.appendChild(divConjunto);
    }

    let url3 = "https://api.themoviedb.org/3/tv/popular?language=pt-BR";

    request.open("GET", url3, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    console.log(url3);

    let todaLista3 = JSON.parse(request.response);
    console.log(todaLista3);
    
    h1Div3.appendChild(h1nome3);
    divTvPopulares.appendChild(h1Div3);

    for (let index = 0; index < todaLista3.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let divConjunto = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");
        let divImg = document.createElement("div");
        let descItem = document.createElement("h2");
        
        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        descItem.id = "descItem";
        divImg.id = "divImg";
        divConjunto.id = "divConjunto";

        imgItem.src = urlItens + todaLista3.results[index].poster_path;
        nomeItem.textContent = todaLista3.results[index].name;
        descItem.textContent = todaLista3.results[index].overview.slice(0,200) + "...";
        
        divImg.appendChild(imgItem);
        divImg.appendChild(descItem);

        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divConjunto.appendChild(divCadaItem);
        divTvPopulares.appendChild(divConjunto);
    }

    let url4 = "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR";

    request.open("GET", url4, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    console.log(url4);

    let todaLista4 = JSON.parse(request.response);
    console.log(todaLista4);
    
    h1Div4.appendChild(h1nome4);
    divTvAvaliadas.appendChild(h1Div4);

    for (let index = 0; index < todaLista4.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let divConjunto = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");

        let divImg = document.createElement("div");
        let descItem = document.createElement("h2");

        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        descItem.id = "descItem";
        divImg.id = "divImg";
        divConjunto.id = "divConjunto";

        imgItem.src = urlItens + todaLista4.results[index].poster_path;
        nomeItem.textContent = todaLista4.results[index].name;
        descItem.textContent = todaLista4.results[index].overview.slice(0,200) + "...";
        
        divImg.appendChild(imgItem);
        divImg.appendChild(descItem);

        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divConjunto.appendChild(divCadaItem);
        divTvAvaliadas.appendChild(divConjunto);
    }

};


function filmes() {
    window.location.href = "filmesOpcao/filmesopc.html";
}

function series() {
    window.location.href = "seriesOpcao/seriesopc.html";
}