const playerBotaoContinuar = document.querySelector('#playerBotaoContinuar');
const playerBotaoPausar = document.querySelector('#playerBotaoPausar');
const playerBotaoAnterior = document.querySelector('#playerBotaoAnterior');
const playerBotaoProximo = document.querySelector('#playerBotaoProximo');

const musicaInicio = document.querySelector('#musicaInicio');
const musicaFinal = document.querySelector('#musicaFinal');
const musicasCurtidas = document.querySelector('#musicasCurtidas');

const musicaPlayer = document.querySelector('#musicaPlayer');
const barraVolume = document.querySelector('#barraVolume');

const fecharPlayer = document.querySelector('#fecharPlayer');

const nomeMusica = document.querySelector('#nomeMusica');
const faixasMusica = document.querySelector('#faixasMusica');
const limiteMusica = document.querySelector('#limiteMusica');

const generoHipHop = ['songs/hiphop/Snoop Dogg - Sensual Seduction.mp3','songs/hiphop/Ja Rule - New York.mp3','songs/hiphop/Fat Joe - Lean Back.mp3','songs/hiphop/Jay-Z - Trouble.mp3','songs/hiphop/Nelly - Ride Wit Me.mp3','songs/hiphop/Eminem feat. Akon - Smack That.mp3','songs/hiphop/Mike Jones - Still Tippin.mp3','songs/hiphop/Busta Rhymes - Pass The Courvoisier Part II.mp3','songs/hiphop/Lil Wayne - Go DJ.mp3','songs/hiphop/Kid Cudi - Day N Nite.mp3','songs/hiphop/Big Tymers - Still Fly.mp3','songs/hiphop/The Game - How We Do.mp3'];

const generoRock = ['songs/rock/Nirvana - Smells Like Teen Spirit.mp3','songs/rock/Papa Roach - Last Resort.mp3','songs/rock/Red Hot Chili Peppers - Californication.mp3','songs/rock/System Of A Down - Chop Suey.mp3','songs/rock/Hot Action Cop - Fever for the Flava.mp3','songs/rock/Linkin Park - In The End.mp3'];

const generoMpb = ['songs/mpb/MC G15 - Deu Onda.mp3','songs/mpb/Charlie Brown Jr - Zóio de lula.mp3','songs/mpb/L7NNON x MD Chefe - HERMES.mp3','songs/mpb/MC Poze do Rodo - Vida Louca.mp3','songs/mpb/Natiruts - Quero Ser Feliz Também.mp3','songs/mpb/Rael - Envolvidão Remix.mp3','songs/mpb/Revelação - Velocidade da luz.mp3'];

const generoPop = ['songs/pop/The Weeknd, Playboi Carti, Madonna - Popular.mp3','songs/pop/Lady Gaga - Poker Face.mp3','songs/pop/Backstreet Boys - Everybody.mp3','songs/pop/Swalla (feat. Nicki Minaj & Ty Dolla $ign).mp3','songs/pop/Vanessa Carlton - A Thousand Miles.mp3','songs/pop/John Legend - Green Light.mp3','songs/pop/Kanye West - Love Lockdown.mp3'];

const generoReb = ['songs/reb/Busta Rhymes feat. Mariah Carey - I Know What You Want.mp3','songs/reb/Chris Brown ft. Lil Wayne - Gimme That (Remix).mp3','songs/reb/Mariah Carey - Its Like That.mp3','songs/reb/Mariah Carey - We Belong Together (Remix).mp3','songs/reb/Ne-Yo - Miss Independent.mp3','songs/reb/Timbaland - Give It To Me.mp3'];

const generoFlashback = ['songs/flashback/Alphaville - Big in Japan (2019 Remaster).mp3','songs/flashback/Desireless - Voyage Voyage.mp3','songs/flashback/Foreigner - I Want To Know What Love Is.mp3','songs/flashback/Hall and Oates - Out of Touch.mp3','songs/flashback/SNAP! - Rhythm Is A Dancer.mp3','songs/flashback/Yes - Owner of a Lonely Heart (HQ).mp3'];
var musicas = [];

contador = 0;






//FUNCAO DOS BOTOES DO PLAYER
function descubra(){
    descubraH1.style.display = 'block';
    divDescubra1.style.display = 'flex';
    divDescubra2.style.display = 'flex';
    

    divRadio.style.display = 'none';
}

function radios(){
    divRadio.style.display = 'block';

    descubraH1.style.display = 'none';
    divDescubra1.style.display = 'none';
    divDescubra2.style.display = 'none';

}

function mostrarVolume() {
    divVolume.style.display = 'block';
}

function sumirVolume() {
    divVolume.style.display = 'none';
}

function volume(){
    musicaPlayer.volume = barraVolume.value/100;
}

function fecharFooter(){
    player.style.display = 'none';
    abrirPlayer.style.display = 'block'
}

function abrirFooter(){
    player.style.display = 'block';
    abrirPlayer.style.display = 'none'
}

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

musicaPlayer.addEventListener("ended", (event) => {
    nextSong();
});

//FUNCAO DAS MUSICAS
function hiphop(){
    musicas = generoHipHop;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
    
}

function rock(){
    musicas = generoRock;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function mpb(){
    musicas = generoMpb;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function pop(){
    musicas = generoPop;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function reb(){
    musicas = generoReb;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function flashback(){
    musicas = generoFlashback;
    console.log(musicas);
    musicaPlayer.src = musicas[contador = 0];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador];
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

// Mixes dos Artistas
function bustaMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - Busta Rhymes';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/BUSTA RHYMES HITS MIX.mp3';
    musicaPlayer.play();
}

function snoopMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - Snoop Dogg';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/Snoop Dogg - Greatest Hits.mp3';
    musicaPlayer.play();
}

function rhcpMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - Red Hot Chilli Peppers';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/Red Hot Chili Peppers Greatest Hits.mp3';
    musicaPlayer.play();
}

function soadMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - System of a Down';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/S.O.A.D Greatest Hits.mp3';
    musicaPlayer.play();
}

function neyoMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - Ne-Yo';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/Ne-Yo - Greatest Hits.mp3';
    musicaPlayer.play();
}

function westcoastMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - West Coast Classics';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/West Coast Classics.mp3';
    musicaPlayer.play();
}

function eastcoastMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - East Coast Classics';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/East Coast Classics.mp3';
    musicaPlayer.play();
}

function rock2000Mix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - Rock 2000s';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/Rock 2000s.mp3';
    musicaPlayer.play();
}

function funkMix() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Mixes - Funkzão';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'songs/mixes/Os Melhores Funk 2017.mp3';
    musicaPlayer.play();
}

//FUNCAO DAS RADIOS
function radioReggaeton(){
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Radio - Reggaeton';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'https://latinareggaeton.ice.infomaniak.ch/latinareggaeton.mp3';
    musicaPlayer.play();
}

function radioHiphop(){
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Radio - HipHop/Rap';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'https://regiocast.streamabc.net/regc-90s90shiphop9858510-mp3-192-3156332?sABC=66046p9s%230%2302sno1nn41213qpn5op3op016qo0s710%23enqvbqr&aw_0_1st.playerid=radiode&amsparams=playerid:radiode;skey:1711565983';
    musicaPlayer.play();
}

function radioPop(){
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Radio - Pop';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'https://antenaone.crossradio.com.br/stream/1/';
    musicaPlayer.play();
}

function radioCountry(){
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Radio - Country';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'https://19473.live.streamtheworld.com/KFWRFMAAC.aac';
    musicaPlayer.play();
}

function radio80s() {
    faixasMusica.textContent = '1';
    limiteMusica.textContent = '/ ' + '1';
    nomeMusica.textContent = 'Radio - 80s';
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = 'https://listen.181fm.com/181-awesome80s_128k.mp3';
    musicaPlayer.play();
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
    musicasSalvas.textContent = musicas[contador];
    musicasCurtidas.appendChild(musicasSalvas);
}



musicaPlayer.onloadedmetadata = function(){
    barraProgresso.max = musicaPlayer.duration;
    barraProgresso.value = musicaPlayer.currentTime;
}


if (musicaPlayer.play()) {
    setInterval(()=>{
        
        barraProgresso.max = musicaPlayer.duration;
        barraProgresso.value = musicaPlayer.currentTime;

        let currentMinutes = Math.floor(musicaPlayer.currentTime / 60);
        let currentSeconds = Math.floor(musicaPlayer.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(musicaPlayer.duration / 60);
        let durationSeconds = Math.floor(musicaPlayer.duration - durationMinutes * 60);

        if (currentSeconds < 10) { 
            currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) 
        { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) 
        { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) 
        { durationMinutes = "0" + durationMinutes; }

        musicaInicio.textContent = currentMinutes + ":" + currentSeconds;
        musicaFinal.textContent = durationMinutes + ":" + durationSeconds;

    },500);
}

barraProgresso.onchange = function(){
    musicaPlayer.play();
    musicaPlayer.currentTime = barraProgresso.value;

}



function playList(){
    let listaMusicaFavorita = document.createElement('li');
    listaMusicaFavorita.textContent = musicas[contador];
    musicaFavorita.appendChild(listaMusicaFavorita);
}


