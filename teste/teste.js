const playerBotaoContinuar = document.querySelector('#playerBotaoContinuar');
const playerBotaoPausar = document.querySelector('#playerBotaoPausar');
const playerBotaoAnterior = document.querySelector('#playerBotaoAnterior');
const playerBotaoProximo = document.querySelector('#playerBotaoProximo');
const musicaInicio = document.querySelector('#musicaInicio');
const musicaFinal = document.querySelector('#musicaFinal');
const musicasCurtidas = document.querySelector('#musicasCurtidas');
const musicaPlayer = document.querySelector('#musicaPlayer');

const nomeMusica = document.querySelector('#nomeMusica');
const faixasMusica = document.querySelector('#faixasMusica');
const limiteMusica = document.querySelector('#limiteMusica');

const generoHipHop = ['songs/hiphop/Ja Rule - New York.mp3','songs/hiphop/Fat Joe - Lean Back.mp3','songs/hiphop/Jay-Z - Trouble.mp3','songs/hiphop/Nelly - Ride Wit Me.mp3','songs/hiphop/Eminem feat. Akon - Smack That.mp3','songs/hiphop/Mike Jones - Still Tippin.mp3','songs/hiphop/Busta Rhymes - Pass The Courvoisier Part II.mp3','songs/hiphop/Lil Wayne - Go DJ.mp3'];
const generoRock = ['songs/rock/Nirvana - Smells Like Teen Spirit.mp3','songs/rock/Papa Roach - Last Resort.mp3','songs/rock/Red Hot Chili Peppers - Californication.mp3'];
var musicas = [];

contador = 0;





function stopSong(){
    playerBotaoPausar.hidden = true;
    playerBotaoContinuar.hidden = false;
    musicaPlayer.pause();
   
}

function continueSong(){
    playerBotaoPausar.hidden = false;
    playerBotaoContinuar.hidden = true;
    musicaPlayer.play();
   
}

function hiphop(){
    musicas = generoHipHop;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador].replace('songs/hiphop/','');
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
    
}

musicaPlayer.onloadedmetadata = function(){
    barraProgresso.max = musicaPlayer.duration;
    barraProgresso.value = musicaPlayer.currentTime;
}


if (musicaPlayer.play()) {
    setInterval(()=>{
        barraProgresso.max = musicaPlayer.duration;
        barraProgresso.value = musicaPlayer.currentTime;
    },500);
}

barraProgresso.onchange = function(){
    musicaPlayer.play();
    musicaPlayer.currentTime = barraProgresso.value;

}


function rock(){
    musicas = generoRock;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador].replace('songs/rock/','');
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function nextSong(){
    contador++;
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = musicas[contador];
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
    
    
}

function previousSong(){
    contador--;
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = musicas[contador];
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 2 - 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function musicaCurtida(){
    let musicasSalvas = document.createElement('tr');
    musicasSalvas.textContent = hipHop[contador].replace('songs/hiphop/','');
    musicasCurtidas.appendChild(musicasSalvas);
}

function playList(){

}
