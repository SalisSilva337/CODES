let personagemAtual = document.querySelector("#personagemAtual");
let body = document.querySelector("#body");
let tema = document.querySelector("#tema");
let rockstarLogo = document.querySelector("#rockstarLogo");
let rockstarNorthLogo = document.querySelector("#rockstarNorthLogo");
let gta4Logo = document.querySelector("#gta4Logo");

listaBackground = ["imgs/gta1.webp","imgs/gta2.jpg","imgs/gta3.jpg"];
listaPersonagens = ["imgs/niko.png","imgs/roman.png","imgs/dimitri.png"];

window.onclick = function playAudio() {
    nome.style.display = "none";

    tema.play();
    tema.volume = 0.8;

    let tempo = 3000;
    let tempo2 = 3000;
    let tempo3 = 5000;
    let intervalo = 3000;
    let intervalo2 = 3000;
    let intervalo3 = 5000;


setTimeout(() => {

    rockstarLogo.style.animation = "logoAnim " + tempo + "ms";
    rockstarLogo.style.display = "flex"
    let progresso1 = setInterval(() => {
        
        if (tempo === intervalo) {
            clearInterval(progresso1);
            rockstarLogo.style.display = "none"
            rockstarNorthLogo.style.display = "flex"
            rockstarNorthLogo.style.animation = "logoNorthAnim " + tempo2 + "ms";
            let progresso2 = setInterval(() => {
                
                if (tempo2 === intervalo) {
                    clearInterval(progresso2);
                    rockstarNorthLogo.style.display = "none"
                    gta4Logo.style.display = "flex"
                    gta4Logo.style.animation = "gta4LogoAnim " + tempo3 + "ms";

                    let progresso3 = setInterval(() => {
                        
                        if (tempo3 === intervalo3) {
                            clearInterval(progresso3);
                            modal.style.display = "none"

                            
                        }

                    }, intervalo3);
                }
            }, intervalo2);
            
            
        }
    }, intervalo);
}, 2000);

}

setTimeout(() => {
    let contador = -1;
        
    setInterval(() => {
        
            contador++
            console.log(contador);
            if (contador > 2) {
                contador = 0
            }
            setTimeout(() => {
                body.style.animation= "";
                
            }, 4000);
            setTimeout(() => {
                personagemAtual.style.animation= "imgAnim 7.8s"
                setTimeout(() => {
                    personagemAtual.style.animationPlayState = "paused"
                }, 7800);
            }, 1);
            
            body.src = listaBackground[contador];
            body.style.animation= "fundoAnim 1s";
            personagemAtual.style.animation= "";
            personagemAtual.src = listaPersonagens[contador];
            
    }, 8000);
}, 2000);
   

    

