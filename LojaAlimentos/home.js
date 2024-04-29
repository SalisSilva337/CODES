let divPrincipal = document.querySelector("#divPrincipal");
let navBotoes = document.querySelector("#navBotoes");



function abrirNav() {
    if (divBotoes.style.display === "none") {
        divBotoes.style.display = "flex";
        divBotoes.style.animation = "abrirAnim 1s";
        
    }
    else{
        divBotoes.style.animation = "fecharAnim 1s ";
        setTimeout(() => {
            divBotoes.style.display = "none";
        }, 900);
   
    }
}

window.onload = buscar();

function buscar(){
    
        divPrincipal.innerHTML = '';
        
        let url = "https://www.themealdb.com/api/json/v1/1/categories.php";

        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
        
        request.onload = function(){
            if (request.status === 200) {
                
                let produtos = JSON.parse(request.response);
                console.log(produtos);

                for (let index = 0; index < produtos.categories.length; index++) {
                    
                    let categoriaNome = document.createElement("h2");
                    let categoriaDescricao = document.createElement("h3");
                    let categoriaImg = document.createElement("img");
                    let divCategoria = document.createElement("div");
                    let divCategoriaNomeDesc = document.createElement("div");

                    categoriaImg.id = "categoriaImg";
                    divCategoria.id = "divCategoria";
                    divCategoriaNomeDesc.id = "divCategoriaNomeDesc";


                    categoriaNome.textContent = produtos.categories[index].strCategory;
                    categoriaDescricao.textContent = produtos.categories[index].
                    strCategoryDescription;
                    categoriaImg.src = produtos.categories[index].strCategoryThumb;
                    
                   
                    divCategoriaNomeDesc.appendChild(categoriaDescricao);

                    divCategoria.appendChild(categoriaImg);
                    divCategoria.appendChild(categoriaNome);
                    divCategoria.appendChild(divCategoriaNomeDesc);
                    divPrincipal.appendChild(divCategoria);
                    
                }
            }
        }
}

function buscarCategoriaProdutos(botao){
    divPrincipal.innerHTML = '';
    
    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + botao.value;

    
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function(){
        if (request.status === 200) {
            let produtos = JSON.parse(request.response);
            
            for (let index = 0; index < produtos.meals.length; index++) {
                let categoriaNome = document.createElement("h3");
                let categoriaImg = document.createElement("img");
                let divCategoria = document.createElement("div");
    

                categoriaImg.id = "categoriaImg";
                divCategoria.id = "divCategoria2";
                

               
                categoriaNome.textContent = produtos.meals[index].strMeal;
                
                categoriaImg.src = produtos.meals[index].strMealThumb;
                
                
        

                divCategoria.appendChild(categoriaImg);
                divCategoria.appendChild(categoriaNome);
               
                divPrincipal.appendChild(divCategoria);
                
            }
        }
    }
}


function pesquisaProduto(pesquisar){
    divPrincipal.innerHTML = '';
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + pesquisar.value;

    
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = function(){
        
        if (request.status === 200) {
            let produtos = JSON.parse(request.response);
            
            for (let index = 0; index < produtos.meals.length; index++) {
                let categoriaNome = document.createElement("h3");
                let categoriaImg = document.createElement("img");
                let divCategoria = document.createElement("div");
    

                categoriaImg.id = "categoriaImg";
                divCategoria.id = "divCategoria2";
                


                categoriaNome.textContent = produtos.meals[index].strMeal;
                
                categoriaImg.src = produtos.meals[index].strMealThumb;
                
                
        

                divCategoria.appendChild(categoriaImg);
                divCategoria.appendChild(categoriaNome);
               
                divPrincipal.appendChild(divCategoria);
                
            }
        }
    }
}
