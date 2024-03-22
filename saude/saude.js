const divBody = document.querySelector('#divBody');
const horario = document.querySelector('#horario');
const dataSpan = document.querySelector('#dataSpan');

const musica = document.querySelector('#musica');
const modalMusica = document.querySelector("#modalMusica");


const divRelogioData = setInterval(function tempo() {

    let horarioAtual = new Date();
    let horaMinSeg = horarioAtual.toLocaleTimeString();
    horario.textContent = horaMinSeg;

    let data = new Date();
    let diaMesAno = data.toLocaleDateString();
    dataSpan.textContent = diaMesAno;
});




function abrirInfo (){
    divBody.style.display = "block"; 
}

function fecharInfo (){
    divBody.style.display = "none"; 
}


function Inicio(){
    let iframe = document.querySelector('#iframeSaude');
    iframe.src = 'saudeHome.html';
}

function Consultas(){
    let iframe = document.querySelector('#iframeSaude');
    iframe.src = 'saudeHome.html';
}

function Especialidades(){
    let iframe = document.querySelector('#iframeSaude');
    iframe.src = 'saudeEspecialidades.html';
}

function Sobre(){
    let iframe = document.querySelector('#iframeSaude');
    iframe.src = 'saudeSobre.html';
}

function Contato(){
    let iframe = document.querySelector('#iframeSaude');
    iframe.src = 'saudeContato.html';
}




function playMusica(){
    musica.volume = 0.2;
    musica.play();
}

function pauseMusica(){
    musica.pause();
}





function abrirModal () {
    modalMusica.style.display = "block";
}

function escolherMusica(){
    modalMusica.style.display = "none";
    const selecaoMusica = document.querySelector("#selecaoMusica");
    if (selecaoMusica.value === 'SamSmith') {
        musica.src = 'songs/samsmith.mp3'
    } if (selecaoMusica.value === 'JustinBieber') {
        musica.src = 'songs/justinbieber.mp3'
    } if (selecaoMusica.value === 'BrunoMars') {
        musica.src = 'songs/brunomars.mp3'
    } if (selecaoMusica.value === 'DrDre') {
        musica.src = 'songs/drdre.mp3'
    } if (selecaoMusica.value === 'GreenDay') {
        musica.src = 'songs/greenday.mp3'
    }





    
}


window.onclick = function(event) {
    if (event.target == modalMusica) {
        modalMusica.style.display = "none";
      }
  }