let botoesCategorias = document.querySelectorAll(".botoesCategorias");

console.log(botoesCategorias)
for (let contador = 0; contador < botoesCategorias.length; contador++) {
    
        botoesCategorias[contador].addEventListener("click", function () {
            
            
        if (botoesCategorias[contador].className === "botoesCategorias") {
            botoesCategorias[contador].classList.add ("selecionado");
        }
        
        else{
            botoesCategorias[contador].classList.replace("selecionado","botoesCategorias");
            botoesCategorias[contador].classList.add("botoesCategorias");
        }
        
        
    
    
        }
    )};




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

let botaoVerMais = document.createElement("button");
botaoVerMais.textContent = "VER MAIS";
botaoVerMais.id = "botaoVerMais"

let contador = 0

window.onload = filmes();

function home() {
    window.location.href = "../filmes.html";
}

function filmes() {
    contador++
    let url = "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=" + contador;

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    console.log(url);

    let todaLista = JSON.parse(request.response);
    // let tiposFilmes = todaLista.filter((item) => item.category.name == botao.textContent);
    console.log(todaLista);

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

        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divFilmesSeries.appendChild(divCadaItem);
        divFilmesSeries.appendChild(botaoVerMais);

        botaoVerMais.addEventListener("click", function () {
           filmes(); 
        });
    }
}


