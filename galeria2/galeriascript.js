function ampliar1() {
    const img = document.querySelector("#img1")
    const imgNada = document.querySelector("#nada")
    const botaoAvancar = document.querySelector ("#avancar")
    const botaoVoltar = document.querySelector ("#voltar")
    if (imgNada.style.display = 'block') {
        imgNada.src = img.src;
        botaoAvancar.style.display = 'block';
        botaoVoltar.style.display = 'block';
    } else {
        imgNada.style.display = 'none'
    }
}

function ampliar2() {
    const img = document.querySelector("#img2")
    const imgNada = document.querySelector("#nada")
    if (imgNada.style.display = 'block') {
        imgNada.src = img.src;
        botaoAvancar.style.display = 'block';
        botaoVoltar.style.display = 'block';
    } else {
        imgNada.style.display = 'none'
    }
}


function ampliar3() {
    const img = document.querySelector("#img3")
    const imgNada = document.querySelector("#nada")
    if (imgNada.style.display = 'block') {
        imgNada.src = img.src;
        botaoAvancar.style.display = 'block';
        botaoVoltar.style.display = 'block';
    } else {
        imgNada.style.display = 'none'
    }
}


function ampliar4() {
    const img = document.querySelector("#img4")
    const imgNada = document.querySelector("#nada")
    if (imgNada.style.display = 'block') {
        imgNada.src = img.src;
        botaoAvancar.style.display = 'block';
        botaoVoltar.style.display = 'block';
    } else {
        imgNada.style.display = 'none'
    }
}





const listaImg = document.querySelectorAll("#divGaleria img");
const sliderImg = document.querySelector("#nada")
const botaoAvancar = document.querySelector ("#avancar")
const botaoVoltar = document.querySelector ("#voltar")
var contar = 0

botaoAvancar.addEventListener ('click', (event) => {
        if (contar < listaImg.length-1) {
            contar++;
            sliderImg.src = listaImg[contar].src;
            sliderImg = listaImg[contar]
        }

        
    })

botaoVoltar.addEventListener ('click', (event) => {
        if (contar > 0) {
            contar--;
            sliderImg.src = listaImg[contar].src;
        }

        
    })

    

    

