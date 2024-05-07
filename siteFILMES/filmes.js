let divCentral = document.querySelector("#divCentral")


window.onload = buscar();

let contador = 0
function buscar(){
    
    let url = "https://api.themoviedb.org/3/movie/popular";

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
        

        divCadaItem.id = "divCadaItem"
        divConjunto.id = "divConjunto"

        imgItem.src = urlItens + todaLista.results[index].poster_path;

        nomeItem.textContent = todaLista.results[index].title;

        divCadaItem.appendChild(imgItem);
        divCadaItem.appendChild(nomeItem);

         
        divConjunto.appendChild(divCadaItem);
        divCentral.appendChild(divConjunto);
    }

};