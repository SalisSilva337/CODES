const musicas = ['songs/Calvin Harris - How Deep Is Your Love.mp3','songs/Fifth Harmony - Work From Home.mp3','songs/Ne-Yo - So Sick.mp3','songs/The Weeknd - I Feel It Coming ft. Daft Punk.mp3','songs/Drake - Hotline Bling.mp3'];
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

function playSong(){
    musicaPlayer.src = musicas[contador];
    musicaPlayer.volume = 0.2;
    musicaPlayer.play();
    nomeMusica.textContent =  musicas[contador].replace('songs/','');
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