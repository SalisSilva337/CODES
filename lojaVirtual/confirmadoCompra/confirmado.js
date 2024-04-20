let spanPorcentagem1 = document.querySelector("#spanPorcentagem1");
let spanPorcentagem2 = document.querySelector("#spanPorcentagem2");
let circulo1 = document.querySelector("#circulo1");
let circulo2 = document.querySelector("#circulo2");



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
        
        let progresso2 = setInterval(() => {
            valorInicio2++;
            circulo2.style.background = "conic-gradient( rgb(162, 255, 0)"+ valorInicio2 * 3.6 + "deg, rgb(0, 0, 0) 0deg)";

            spanPorcentagem2.textContent = valorInicio2 + "%";

            if (valorInicio2 === valorFinal2) {
                clearInterval(progresso2);
                circulo2.style.boxShadow ="0px 0px 1000px rgb(162, 255, 0)";
            }
            
        }, velocidade2);
    }
    
}, velocidade);

