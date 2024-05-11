let botoesCategorias = document.querySelectorAll(".botoesCategorias");
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

    
    
    botaoFodase.addEventListener("click", function () {
        modalAlerta.style.animation = "alertaAnim 1s";
        modalAlerta.innerHTML="";
        modalAlerta.style.display= "flex";
        let nomeAlerta = document.createElement("h1");
        nomeAlerta.textContent = "MUDOU PARA A ÁREA DE FILTRAGEM";
        modalAlerta.appendChild(nomeAlerta);
        abrirCategoria1.style.display= "block";
        abrirCategoria2.style.display= "block";
        botaoPadrao.style.display= "block";
        botaoFodase.style.display= "none";
        divFiltros.style.display= "block";
        divFiltros2.style.display= "block";

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
        
        filmes();
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
        botaoFodase.style.display= "block";
        divFiltros.style.display= "none";
        divFiltros2.style.display= "none";

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

        todosFilmes();
    });
        
    let url = "";
    if (pagina === undefined) {
        url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=";
    }
    
    else {
        url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR&page="+ pagina.textContent + "&sort_by=" ;
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
        nomeItem.textContent = todaLista.results[index].title;
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

        modalNomeItem.textContent = todaLista.results[index].title;
        modalNomeItem.value = todaLista.results[index].id;

        modalDataItem.textContent = todaLista.results[index].release_date;
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
                let urlVideos = "https://api.themoviedb.org/3/movie/"+ idFilme +"/videos"

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


function filmes(botao,pagina,classificar) {
    
    divFilmesSeries.innerHTML = "";
    divPaginas.innerHTML="";

    for (let cont = 1; cont < 21; cont++) {
        
        let botoesPaginas = document.createElement("button");
        botoesPaginas.textContent = cont;
        botoesPaginas.className = "botoesPaginas";
        
        botoesPaginas.addEventListener("click", function () {
            
            modalAlerta.style.animation = "alertaAnim 1s";
            modalAlerta.innerHTML="";
            modalAlerta.style.display= "flex";
            let nomeAlerta = document.createElement("h1");
            nomeAlerta.textContent = "SELECIONE UM GÊNERO DE FILME";
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
            filmes(botao,this,classificar);
        });
        
        divPaginas.appendChild(botoesPaginas);
    };

    for (let contador = 0; contador < botoesCategorias.length; contador++) {
    
        botoesCategorias[contador].addEventListener("click", function () {

            let filtrosSelecionados = document.createElement("h3");
            divFiltros.innerHTML="";

            filmes(this,pagina,classificar);
           
            filtrosSelecionados.textContent = "Filtro Gênero: " + botoesCategorias[contador].textContent;
            divFiltros.appendChild(filtrosSelecionados);
            menuLateral.appendChild(divFiltros);
            
        });
        
    };

    for (let contador = 0; contador < botoesCategorias2.length; contador++) {
    
        botoesCategorias2[contador].addEventListener("click", function () {
            let filtrosSelecionados2 = document.createElement("h3");
            divFiltros2.innerHTML="";
            filtrosSelecionados2.textContent = "Filtro Classificar Por: " + botoesCategorias2[contador].textContent;
            divFiltros2.appendChild(filtrosSelecionados2);
            menuLateral.appendChild(divFiltros2);

           filmes(botao,pagina,this);
        });
        
    };


    let url = "";
    if (pagina === undefined && classificar === undefined) {
        url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=" + botao.value + "&page=" + "&sort_by=";
    }
    
    else if (classificar === undefined) {
        url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=" + botao.value + "&page="+ pagina.textContent + "&sort_by=";
    }
    else if (pagina === undefined){
        url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres="+ botao.value +"&page=" + "&sort_by=" + classificar.value;
    }
    else {
        url = "https://api.themoviedb.org/3/discover/movie?language=pt-BR&with_genres=" + botao.value + "&page=" + pagina.textContent +"&sort_by=" + classificar.value;
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
        nomeItem.textContent = todaLista.results[index].title;
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

        modalNomeItem.textContent = todaLista.results[index].title;
        modalNomeItem.value = todaLista.results[index].id;

        modalDataItem.textContent = todaLista.results[index].release_date;
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
                let urlVideos = "https://api.themoviedb.org/3/movie/"+ idFilme +"/videos"

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
