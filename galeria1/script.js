


function ampliar1 (){
    var img1 = document.getElementById('gtav');
    var nada1 = document.getElementById('nada');
    if (nada1.style.display = 'block'){
       nada1.src = 'imgs/gtav.jpg';
    } else {
        img1.style.display = 'none';
}
}

function ampliar2 (){
    var img1 = document.getElementById('rdr2');
    var nada1 = document.getElementById('nada');
    if (nada1.style.display = 'block'){
       nada1.src = 'imgs/rdr2.jpg';
    } else {
        img1.style.display = 'none';
}
}

function ampliar3 (){
    var img1 = document.getElementById('zelda');
    var nada1 = document.getElementById('nada');
    if (nada1.style.display = 'block'){
       nada1.src = 'imgs/zelda.jpg';
    } else {
        img1.style.display = 'none';
}
}

function ampliar4 (){
    var img1 = document.getElementById('tombraider');
    var nada1 = document.getElementById('nada');
    if (nada1.style.display = 'block'){
       nada1.src = 'imgs/tombraider.png';
    } else {
        img1.style.display = 'none';
}
}




var divimagens = document.querySelector('.passarimg'); // pega a área na qual será utilizada para avançar ou voltar as imgs.
var imagens = ['gtav.jpg','rdr2.jpg','zelda.jpg','tombraider.png'];
var contador = 0;

// se o contador for menor que 0, ele será o comprimento da imagem, ou seja, da primeira até a ultima img.
function voltar(){
    if (contador <=0) contador = imagens.length;
    contador--;
    return passarimg();
}



function ir(){
    if (contador >= imagens.length-1) contador = -1;
    contador++;
    return passarimg();

}


function passarimg(){
    return divimagens.setAttribute('src', 'imgs/' + imagens[contador]);
}