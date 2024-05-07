let modalDireita = document.querySelector("#modalDireita");
let modalEsquerda = document.querySelector("#modalEsquerda");
let conteudoLoading1 = document.querySelector("#conteudoLoading1");
let conteudoLoading2 = document.querySelector("#conteudoLoading2");

let valorInicio = 0;
let valorFinal = 100;
let velocidade = 50;

let valorInicio2 = 0;
let valorFinal2 = 100;
let velocidade2 = 50;

let valorInicioEntrega = 0;
let valorFinalEntrega = 200;
let velocidadeEntrega = 100;

// circulo1.style.animation = "circuloAnim 1s";
// circulo2.style.animation = "circuloAnim2 1s";


let progresso1 = setInterval(() => {
    valorInicio++;

    conteudoLoading1.style.width = valorInicio +"%";

    if (valorInicio === valorFinal) {
        clearInterval(progresso1);
        conteudoLoading1.style.boxShadow ="0px 0px 1000px white";

        let progresso2 = setInterval(() => {
            valorInicio2++;
            conteudoLoading2.style.width = valorInicio2 +"%";

            if (valorInicio2 === valorFinal2) {
                clearInterval(progresso2);
                conteudoLoading2.style.boxShadow ="0px 0px 1000px black";
                modalDireita.style.animation = "modalInicioAnim 1s";
                modalEsquerda.style.animation = "modalInicioAnim 1s";
                modalDireita.style.width = "0%";
                modalEsquerda.style.width = "0%";
                setTimeout(() => {
                    modalDireita.style.visibility = "hidden";
                    modalEsquerda.style.visibility = "hidden";
                }, 1200);
            }
            
        }, velocidade2);
    }
    
}, velocidade);
