let musicas = [];

const pop1 = ['songs/pop1/Calvin Harris - How Deep Is Your Love.mp3','songs/pop1/Fifth Harmony - Work From Home.mp3','songs/pop1/Ne-Yo - So Sick.mp3','songs/pop1/The Weeknd - I Feel It Coming ft. Daft Punk.mp3','songs/pop1/Drake - Hotline Bling.mp3'];

const pop2 = ['songs/pop2/The Weeknd, Playboi Carti, Madonna - Popular.mp3','songs/pop2/Lady Gaga - Poker Face.mp3','songs/pop2/Backstreet Boys - Everybody.mp3','songs/pop2/Swalla (feat. Nicki Minaj & Ty Dolla $ign).mp3','songs/pop2/Vanessa Carlton - A Thousand Miles.mp3','songs/pop2/John Legend - Green Light.mp3','songs/pop2/Kanye West - Love Lockdown.mp3'];




contador = 0;

const musicaPlayer = document.querySelector('#musicaPlayer')




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

function abrirModal () {
    modalMusica.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalMusica) {
        modalMusica.style.display = "none";
      }
}
function escolherMusica() {
    modalMusica.style.display = "none";

    const selecaoMusica = document.querySelector("#selecaoMusica");
    if (selecaoMusica.value === 'Pop1') {
        musicas = pop1;
    }
     if (selecaoMusica.value === 'Pop2') {
        musicas = pop2;
    }
    musicaPlayer.src = musicas[contador = 0];
    nomeMusica.textContent = 'Playlist carregada com Sucesso!';
    faixasMusica.textContent = 'Clique no Play';
    limiteMusica.textContent = 'para escutar';
}

function playSong(){
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent = musicas[contador].replace('songs/','');
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function pauseSong(){
    musicaPlayer.pause();
}

function nextSong(){
    contador++;
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = musicas[contador];
    musicaPlayer.play();
    nomeMusica.textContent =  musicas[contador].replace('songs/','');
    faixasMusica.textContent = contador + 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}

function previousSong(){
    contador--;
    musicaPlayer.volume = 0.2;
    musicaPlayer.src = musicas[contador];
    musicaPlayer.play();
    nomeMusica.textContent =  musicas[contador].replace('songs/','');
    faixasMusica.textContent = contador + 2 - 1;
    limiteMusica.textContent = '/ ' + musicas.length;
}


const iframe = document.querySelector("#iframeConteudo")

function iframeHome(){
    iframe.src = 'home/comprasHome.html'
}

function iframeOfertas(){
    iframe.src = 'ofertas/ofertas.html'
}

function iframeAlta(){
    iframe.src = 'home/comprasHome.html'
}

function iframeCarrinho(){
    iframe.src = 'carrinho/carrinho.html'
}



