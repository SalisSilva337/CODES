let spanPorcentagem1 = document.querySelector("#spanPorcentagem1");
let spanPorcentagem2 = document.querySelector("#spanPorcentagem2");
let circulo1 = document.querySelector("#circulo1");
let circulo2 = document.querySelector("#circulo2");
let barraProgresso = document.querySelector("#barraProgresso");
let caminhao = document.querySelector("#caminhao");
let nomeEntrega = document.querySelector("#nomeEntrega");
let spanPorcentagemConteudo1 = document.querySelector("#spanPorcentagemConteudo1");
let spanPorcentagemConteudo2 = document.querySelector("#spanPorcentagemConteudo2");

let valorInicio = 0;
let valorFinal = 100;
let velocidade = 100;

let valorInicio2 = 0;
let valorFinal2 = 100;
let velocidade2 = 100;

circulo1.style.animation = "circuloAnim 1s"
circulo2.style.animation = "circuloAnim2 1s"

let progresso1 = setInterval(() => {
    valorInicio++;

    circulo1.style.background = "conic-gradient( rgb(162, 255, 0)"+ valorInicio * 3.6 + "deg, rgb(0, 0, 0) 0deg)";

    spanPorcentagem1.textContent = valorInicio + "%";

    if (valorInicio === valorFinal) {
        clearInterval(progresso1);
        circulo1.style.boxShadow ="0px 0px 1000px rgb(162, 255, 0)";
        spanPorcentagemConteudo1.textContent= "Pagamento Confirmado!!!"

        let progresso2 = setInterval(() => {
            valorInicio2++;
            circulo2.style.background = "conic-gradient( rgb(162, 255, 0)"+ valorInicio2 * 3.6 + "deg, rgb(0, 0, 0) 0deg)";

            spanPorcentagem2.textContent = valorInicio2 + "%";

            if (valorInicio2 === valorFinal2) {
                clearInterval(progresso2);
                circulo2.style.boxShadow ="0px 0px 1000px rgb(162, 255, 0)";
                spanPorcentagemConteudo2.textContent= "Produtos Despachados!!!"

                let progressoEntrega = setInterval(() => {
                    valorInicioEntrega++
                    caminhao.style.animation = "caminhaoAndar 7.3s";
                    caminhao.style.right = "-47%";
                    barraProgresso.style.background = "linear-gradient(90deg, rgba(46,255,0,1) 0%, rgba(25,25,25,1) "+ valorInicioEntrega * 1.5 + "%)"

                    if (valorInicioEntrega === 1) {
                        nomeEntrega.textContent = "Entregando....";
                    }
                    if (valorInicioEntrega === 40) {
                        nomeEntrega.style.animation = "nomeCor 1s";
                        nomeEntrega.style.color = "black";
                    }
                    if (valorInicioEntrega === 80) {
                        nomeEntrega.textContent = "Entrega Concluída!";
                        barraProgresso.style.boxShadow ="0px 0px 1000px rgb(162, 255, 0)";
                        agradecimento.style.animation = "agradecerAnim 1s";
                        agradecimento.style.transform = "scale(1)";
                    }
                    if (valorInicioEntrega === valorFinalEntrega) {
                        clearInterval(progressoEntrega);
                        
                    }
                    
                }, velocidadeEntrega);
                
            }
            
        }, velocidade2);
    }
    
}, velocidade);


let valorInicioEntrega = 0;
let valorFinalEntrega = 200;
let velocidadeEntrega = 100;

