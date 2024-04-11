//constantes das quatro operações
const botaosoma = document.querySelector("#soma");
const botaosub = document.querySelector("#sub");
const botaodiv = document.querySelector("#div");
const botaomulti = document.querySelector("#multi");
const valorr1 = document.querySelector("#num1");
const valorr2 = document.querySelector("#num2");
const resultadoo = document.querySelector("#txtResultado");

//as respectivas funções de cada uma das operações
function soma(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function div(a, b){
    return a / b;
}

function multi(a, b){
    return a * b;
}


//evento de click 
botaosoma.addEventListener("click", (event) => {
    let numero1 = Number(valorr1.value); 
    let numero2 = Number(valorr2.value); 
    let resultado1 = soma(numero1, numero2);    
    resultadoo.textContent = "Resultado: " + resultado1;
    

});


botaosub.addEventListener("click", (event) => {
    let numero1 = Number(valorr1.value); 
    let numero2 = Number(valorr2.value); 
    let resultado2 = sub(numero1, numero2); 
    resultadoo.textContent = "Resultado: " + resultado2;
});


botaodiv.addEventListener("click", (event) => {
    let numero1 = Number(valorr1.value); 
    let numero2 = Number(valorr2.value); 
    let resultado3 = div(numero1, numero2);
    resultadoo.textContent = "Resultado: " + resultado3;
    
});


botaomulti.addEventListener("click", (event) => {
    let numero1 = Number(valorr1.value); 
    let numero2 = Number(valorr2.value); 
    let resultado4 = multi(numero1, numero2);
    resultadoo.textContent = "Resultado: " + resultado4; 
});








//função musica
function playsong(){
    var musica = new Audio("For The Night.mp3");
    musica.play();
    musica.volume = 0.3
    }




