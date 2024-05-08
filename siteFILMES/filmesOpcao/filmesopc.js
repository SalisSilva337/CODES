let botoesCategorias = document.querySelectorAll(".botoesCategorias");
let divPaginas = document.querySelector("#divPaginas");
let botoesPaginas = document.querySelectorAll(".botoesPaginas");
let abrirCategoria1 = document.querySelector("#abrirCategoria1");
let abrirCategoria2 = document.querySelector("#abrirCategoria2");
let divGenero = document.querySelector("#divGenero");
let divFaixaEtaria = document.querySelector("#divFaixaEtaria");


for (let contador = 0; contador < botoesCategorias.length; contador++) {
    
    botoesCategorias[contador].addEventListener("click", function () {
            
            
        if (botoesCategorias[contador].className === "botoesCategorias") {
            botoesCategorias[contador].classList.add ("selecionado");
        }
        
        else{
            botoesCategorias[contador].classList.replace("selecionado","botoesCategorias");
            botoesCategorias[contador].classList.add("botoesCategorias");
        }
        
    });
};

abrirCategoria1.addEventListener("click", function () {
                
                
    if (divGenero.style.display === "none") {
        divGenero.style.display = "flex";
    }
            
    else{
        divGenero.style.display = "none";
    }
            
          
        
        
});

abrirCategoria2.addEventListener("click", function () {
                
    if (divFaixaEtaria.style.display === "none") {
        divFaixaEtaria.style.display = "flex";
    }
    
    else{
        divFaixaEtaria.style.display = "none";
    }
    


});


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


window.onload = todosFilmes();



function home() {
    window.location.href = "../filmes.html";
}

function todosFilmes(pagina) {
    divFilmesSeries.innerHTML = "";
    divPaginas.innerHTML="";

    for (let cont = 1; cont < 21; cont++) {
        
        let botoesPaginas = document.createElement("button");
        botoesPaginas.textContent = cont;
        botoesPaginas.className = "botoesPaginas";
        
        botoesPaginas.addEventListener("click", function () {
            todosFilmes(this);
        });
        
        divPaginas.appendChild(botoesPaginas);
    }

    let url = "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=" + pagina.textContent;

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    console.log(url);

    let todaLista = JSON.parse(request.response);
    console.log(todaLista);
    
    for (let index = 0; index < todaLista.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");
        let divImg = document.createElement("div");
        
        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        divImg.id = "divImg";

        imgItem.src = urlItens + todaLista.results[index].poster_path;
        nomeItem.textContent = todaLista.results[index].title;

        let modalNomeItem = document.createElement("h1");
        let modalDataItem = document.createElement("h2");
        let modalImgItem = document.createElement("img");
        let modalDescItem = document.createElement("h2");
        let modalDivImg = document.createElement("div");
        let modalDivDescVideo = document.createElement("div");

        modalImgItem.src = urlItens + todaLista.results[index].poster_path;
        modalNomeItem.textContent = todaLista.results[index].title;
        modalDataItem.textContent = todaLista.results[index].release_date;

    
        modalImgItem.id = "modalImgItem";
        modalDivImg.id = "modalDivImg";
        modalDivDescVideo.id = "modalDivDescVideo";

        modalDescItem.textContent = todaLista.results[index].overview;


        
        divCadaItem.addEventListener("click", function () {
            modal.style.display = "flex";
            modalDivImg.appendChild(modalImgItem);
            modalDivImg.appendChild(modalNomeItem);
            modalDivImg.appendChild(modalDataItem);
            modalDivDescVideo.appendChild(modalDescItem);
            modalConteudo.appendChild(modalDivImg);
            modalConteudo.appendChild(modalDivDescVideo);


        });
        
        divImg.appendChild(imgItem);

        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divFilmesSeries.appendChild(divCadaItem);

    }
  
}



function filmes(botao,pagina) {
    divFilmesSeries.innerHTML = "";
    divPaginas.innerHTML="";

    for (let cont = 1; cont < 21; cont++) {
        
        let botoesPaginas = document.createElement("button");
        botoesPaginas.textContent = cont;
        botoesPaginas.className = "botoesPaginas";
        
        botoesPaginas.addEventListener("click", function () {
            filmes(botao,this);
        });
        
        divPaginas.appendChild(botoesPaginas);
    }
    
    let url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=" + botao.value + "&page=" + pagina.textContent;

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    console.log(url);

    let todaLista = JSON.parse(request.response);
    console.log(todaLista);

    for (let index = 0; index < todaLista.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let divConjunto = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");
        
        let divImg = document.createElement("div");
        
        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        divImg.id = "divImg";
        divConjunto.id = "divConjunto";

        imgItem.src = urlItens + todaLista.results[index].poster_path;
        nomeItem.textContent = todaLista.results[index].title;
        
        divImg.appendChild(imgItem);

        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divFilmesSeries.appendChild(divCadaItem);
        

    }

    
}

