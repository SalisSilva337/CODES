let botoesCategorias2 = document.querySelectorAll(".botoesCategorias2");
let divPaginas = document.querySelector("#divPaginas");
let botoesPaginas = document.querySelectorAll(".botoesPaginas");
let abrirCategoria1 = document.querySelector("#abrirCategoria1");
let abrirCategoria2 = document.querySelector("#abrirCategoria2");
let divGenero = document.querySelector("#divGenero");
let divFaixaEtaria = document.querySelector("#divFaixaEtaria");


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


botaoFiltrar.addEventListener("click", function () {
    modalAlerta.style.animation = "alertaAnim 1s";
    modalAlerta.innerHTML="";
    modalAlerta.style.display= "flex";
    let nomeAlerta = document.createElement("h1");
    nomeAlerta.textContent = "MUDOU PARA A ÁREA DE FILTRAGEM";
    modalAlerta.appendChild(nomeAlerta);
    abrirCategoria1.style.display= "block";
    abrirCategoria2.style.display= "block";
    botaoPadrao.style.display= "block";
    botaoFiltrar.style.display= "none";
    divFiltros.style.display= "block";
    divFiltros2.style.display= "block";
    miniMenuLateral.style.display= "flex";
    miniMenuLateral.style.animation= "menuAnim 1s";



    setTimeout(() => {
        modalAlerta.style.animation = "";
    }, 1500);

    setTimeout(() => {
        modalAlerta.style.animation = "alertaAnim reverse 1s";
    }, 1600);

    setTimeout(() => {
        modalAlerta.style.display = "none";
        modalAlerta.style.animation = "";
    }, 2500);
    
    series();
});

botaoPadrao.addEventListener("click", function () {
    modalAlerta.style.animation = "alertaAnim 1s";
    modalAlerta.innerHTML="";
    modalAlerta.style.display= "flex";
    let nomeAlerta = document.createElement("h1");
    nomeAlerta.textContent = "MUDOU PARA O MODO DE FILTRAGEM PADRÃO";
    modalAlerta.appendChild(nomeAlerta);

    abrirCategoria1.style.display= "none";
    abrirCategoria2.style.display= "none";
    divGenero.style.display= "none";
    divFaixaEtaria.style.display= "none";
    botaoPadrao.style.display= "none";
    botaoFiltrar.style.display= "block";
    divFiltros.style.display= "none";
    divFiltros2.style.display= "none";
    miniMenuLateral.style.display= "none";

    setTimeout(() => {
        modalAlerta.style.animation = "";
    }, 1500);

    setTimeout(() => {
        modalAlerta.style.animation = "alertaAnim reverse 1s";
    }, 1600);

    setTimeout(() => {
        modalAlerta.style.display = "none";
        modalAlerta.style.animation = "";
    }, 2500);

    todasSeries();
});







window.onload = todasSeries();


function home() {
    window.location.href = "../filmes.html";
}

function filmes() {
    window.location.href = "../filmesOpcao/filmesopc.html";
}

function todasSeries(pagina) {
    divFilmesSeries.innerHTML = "";
    divPaginas.innerHTML="";
   
    for (let cont = 1; cont < 21; cont++) {
        
        let botoesPaginas = document.createElement("button");
        botoesPaginas.textContent = cont;
        botoesPaginas.className = "botoesPaginas";
        
        botoesPaginas.addEventListener("click", function () {
            todasSeries(this);
        });
        
        divPaginas.appendChild(botoesPaginas);
        window.location.href ="#";
    }

    
   
    let url = "";
    if (pagina === undefined) {
        url = "https://api.themoviedb.org/3/discover/tv?language=pt-BR&page=";
    }
    
    else {
        url = "https://api.themoviedb.org/3/discover/tv?language=pt-BR&page="+ pagina.textContent + "&sort_by=" ;
    }
   
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    
    let todaLista = JSON.parse(request.response);
    console.log(todaLista)
    for (let index = 0; index < todaLista.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");
        let divImg = document.createElement("div");
        let divAvaliacao = document.createElement("div");
        let avaliacaoItem = document.createElement("h2");

        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        divImg.id = "divImg";
        avaliacaoItem.id = "avaliacaoItem";
        divAvaliacao.id = "divAvaliacao";

        imgItem.src = urlItens + todaLista.results[index].poster_path;
        nomeItem.textContent = todaLista.results[index].name;
        avaliacaoItem.textContent = todaLista.results[index].vote_average.toFixed(0) * 10 + "%"
        
        divImg.appendChild(imgItem);
        divAvaliacao.appendChild(avaliacaoItem);
        divImg.appendChild(divAvaliacao);
        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divFilmesSeries.appendChild(divCadaItem);
        

        let modalNomeItem = document.createElement("h1");
        let modalDataItem = document.createElement("h2");
        let modalImgItem = document.createElement("img");
        let modalDescItem = document.createElement("h2");
        let modalDivImg = document.createElement("div");
        let modalDivDescVideo = document.createElement("div");
        let modalFechar = document.createElement("button");
        let modalIframe = document.createElement("iframe");

        modalFechar.textContent = "X";
        modalImgItem.src = urlItens + todaLista.results[index].poster_path;

        modalNomeItem.textContent = todaLista.results[index].name;
        modalNomeItem.value = todaLista.results[index].id;

        modalDataItem.textContent = todaLista.results[index].first_air_date;
        modalDescItem.textContent = todaLista.results[index].overview;
        
    
        modalImgItem.id = "modalImgItem";
        modalDivImg.id = "modalDivImg";
        modalDivDescVideo.id = "modalDivDescVideo";
        modalFechar.id = "modalFechar";
        modalIframe.id = "modalIframe";
        

        divCadaItem.addEventListener("click", function () {

            puxarTrailer(modalNomeItem.value)

            modal.style.display = "flex";
            modalDivImg.appendChild(modalImgItem);
            modalDivImg.appendChild(modalNomeItem);
            modalDivImg.appendChild(modalDataItem);
            modalDivDescVideo.appendChild(modalIframe);
            modalDivDescVideo.appendChild(modalDescItem);
            modalConteudo.appendChild(modalDivImg);
            modalConteudo.appendChild(modalDivDescVideo);
            modal.appendChild(modalFechar);

            function puxarTrailer(idFilme) {
                let urlVideos = "https://api.themoviedb.org/3/tv/"+ idFilme +"/videos"

                let request = new XMLHttpRequest();
                request.open("GET", urlVideos, false);
                request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');
            
                request.send();
                console.log(urlVideos);
            
                let todosVideos = JSON.parse(request.response);
                console.log(todosVideos);
                for (let index = 0; index < todosVideos.results.length; index++) {
                   
                    modalIframe.src = "http://www.youtube.com/embed/" + todosVideos.results[index].key;
                      
                }

            }

            modalFechar.addEventListener("click", function () {
                modal.style.display = "none";
                modalConteudo.innerHTML= "";
            });

        });
        
    }
  
}

let divFiltros =  document.createElement("div");
let divFiltros2 =  document.createElement("div");
let divPaginaAtual = document.createElement("div");



function series(botao,pagina,classificar) {
    
    divFilmesSeries.innerHTML = "";
    divPaginas.innerHTML="";
    
    
    
    for (let cont = 1; cont < 21; cont++) {
        
        let botoesPaginas = document.createElement("button");
        botoesPaginas.textContent = cont;
        botoesPaginas.className = "botoesPaginas";
        
        botoesPaginas.addEventListener("click", function () {
            divPaginaAtual.innerHTML="";
            modalAlerta.style.animation = "alertaAnim 1s";
            modalAlerta.innerHTML="";
            modalAlerta.style.display= "flex";
            
            let paginaAtual = document.createElement("h2");
            paginaAtual.textContent = "Pagina Atual: " + botoesPaginas.textContent;
            let nomeAlerta = document.createElement("h1");
            nomeAlerta.textContent = "SELECIONE UM GÊNERO DE SÉRIE";
            
            
            modalAlerta.appendChild(nomeAlerta);
            setTimeout(() => {
                modalAlerta.style.animation = "";
            }, 1500);

            setTimeout(() => {
                modalAlerta.style.animation = "alertaAnim reverse 1s";
            }, 1600);

            setTimeout(() => {
                modalAlerta.style.display = "none";
                modalAlerta.style.animation = "";
            }, 2500);
            series(botao,this,classificar);
            console.log(botoesPaginas);
            divPaginaAtual.appendChild(paginaAtual);
            miniMenuLateral.appendChild(divPaginaAtual);
            window.location.href ="#";
        });
        
        divPaginas.appendChild(botoesPaginas);
    };
    
    divFaixaEtaria.innerHTML="";

    for (let contador = 0; contador < 6; contador++) {

        let botoesCategorias2 = document.createElement("button");
        let nomeBotao = "";
        let valorBotao = "";
        if (contador === 0) {
            nomeBotao = "Popularidade ⬆"
            valorBotao = "popularity.asc"
        }
        if (contador === 1) {
            nomeBotao = "Popularidade ⬇"
            valorBotao = "popularity.desc"
        }
        if (contador === 2) {
            nomeBotao = "Avaliação ⬆"
            valorBotao = "vote_average.asc"
        }
        if (contador === 3) { 
            nomeBotao = "Avaliação ⬇"
            valorBotao = "vote_average.desc"
        }
        if (contador === 4) {
            nomeBotao = "A-Z ⬆"
            valorBotao = "name.asc"
        }
        if (contador === 5) {
            nomeBotao = "A-Z ⬇"
            valorBotao = "name.desc"
        }
        botoesCategorias2.textContent = nomeBotao;
        botoesCategorias2.value = valorBotao;
        botoesCategorias2.className = "botoesCategorias2";

        botoesCategorias2.addEventListener("click", function () {
            let filtrosSelecionados2 = document.createElement("h2");
            divFiltros2.innerHTML="";
            filtrosSelecionados2.textContent = "Filtro Classificar Por: " + botoesCategorias2.textContent;
            divFiltros2.appendChild(filtrosSelecionados2);
            miniMenuLateral.appendChild(divFiltros2);

           series(botao,pagina,this);
           console.log(botoesCategorias2)
        });
        divFaixaEtaria.appendChild(botoesCategorias2);
    };


    let url = "";
    if (pagina === undefined && classificar === undefined) {
        url = "https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_genres=" + botao.value + "&page=" + "&sort_by=";
    }
    
    else if (classificar === undefined) {
        url = "https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_genres=" + botao.value + "&page="+ pagina.textContent + "&sort_by=";
    }
    else if (pagina === undefined){
        url = "https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_genres="+ botao.value +"&page=" + "&sort_by=" + classificar.value;
    }
    else {
        url = "https://api.themoviedb.org/3/discover/tv?language=pt-BR&with_genres=" + botao.value + "&page=" + pagina.textContent +"&sort_by=" + classificar.value;
    }

    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');

    request.send();
    

    let todaLista = JSON.parse(request.response);
   

    for (let index = 0; index < todaLista.results.length; index++) {
        let urlItens = "https://media.themoviedb.org/t/p/w200";

        let divCadaItem = document.createElement("div");
        let nomeItem = document.createElement("h2");
        let imgItem = document.createElement("img");
        let divImg = document.createElement("div");
        let divAvaliacao = document.createElement("div");
        let avaliacaoItem = document.createElement("h2");

        divCadaItem.id = "divCadaItem";
        imgItem.id = "imgItem";
        divImg.id = "divImg";
        avaliacaoItem.id = "avaliacaoItem";
        divAvaliacao.id = "divAvaliacao";

        imgItem.src = urlItens + todaLista.results[index].poster_path;
        nomeItem.textContent = todaLista.results[index].name;
        avaliacaoItem.textContent = (todaLista.results[index].vote_average * 10).toFixed(0) + "%"
        
        divImg.appendChild(imgItem);
        divAvaliacao.appendChild(avaliacaoItem);
        divImg.appendChild(divAvaliacao);
        divCadaItem.appendChild(divImg);
        divCadaItem.appendChild(nomeItem);
        divFilmesSeries.appendChild(divCadaItem);
        
        let modalNomeItem = document.createElement("h1");
        let modalDataItem = document.createElement("h2");
        let modalImgItem = document.createElement("img");
        let modalDescItem = document.createElement("h2");
        let modalDivImg = document.createElement("div");
        let modalDivDescVideo = document.createElement("div");
        let modalFechar = document.createElement("button");
        let modalIframe = document.createElement("iframe");

        modalFechar.textContent = "X";
        modalImgItem.src = urlItens + todaLista.results[index].poster_path;

        modalNomeItem.textContent = todaLista.results[index].name;
        modalNomeItem.value = todaLista.results[index].id;

        modalDataItem.textContent = todaLista.results[index].first_air_date;
        modalDescItem.textContent = todaLista.results[index].overview;
        
    
        modalImgItem.id = "modalImgItem";
        modalDivImg.id = "modalDivImg";
        modalDivDescVideo.id = "modalDivDescVideo";
        modalFechar.id = "modalFechar";
        modalIframe.id = "modalIframe";
        

        
        divCadaItem.addEventListener("click", function () {

            puxarTrailer(modalNomeItem.value)

            modal.style.display = "flex";
            modalDivImg.appendChild(modalImgItem);
            modalDivImg.appendChild(modalNomeItem);
            modalDivImg.appendChild(modalDataItem);
            modalDivDescVideo.appendChild(modalIframe);
            modalDivDescVideo.appendChild(modalDescItem);
            modalConteudo.appendChild(modalDivImg);
            modalConteudo.appendChild(modalDivDescVideo);
            modal.appendChild(modalFechar);

            function puxarTrailer(idFilme) {
                let urlVideos = "https://api.themoviedb.org/3/tv/"+ idFilme +"/videos"

                let request = new XMLHttpRequest();
                request.open("GET", urlVideos, false);
                request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZmNWNjMGU0NDhkZDI0ODA2MTRkYjEwNTIyMjcyMCIsInN1YiI6IjY2Mzk1ZGQxNDcwZWFkMDEyYTEzOTdhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v446Yj5-PLMOF25bAjvHOf4VNkrB2gP1n6Oimq26wpE');
            
                request.send();
                console.log(urlVideos);
            
                let todosVideos = JSON.parse(request.response);
                console.log(todosVideos);
                for (let index = 0; index < todosVideos.results.length; index++) {
                   
                    modalIframe.src = "http://www.youtube.com/embed/" + todosVideos.results[index].key;
                    
                }

            }

            modalFechar.addEventListener("click", function () {
                modal.style.display = "none";
                modalConteudo.innerHTML= "";
            });

        });

    }

}

function nomear(item) {
    divFiltros.innerHTML="";
    let generoSelecionado = document.createElement("h2")
    generoSelecionado.textContent = "Gênero: " + item.textContent;
    divFiltros.appendChild(generoSelecionado);
    miniMenuLateral.appendChild(divFiltros);
}