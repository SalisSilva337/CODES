const divConteudo1 = document.querySelector('#tableConteudo1');
const divConteudo2 = document.querySelector('#tableConteudo2');
const divConteudo3 = document.querySelector('#tableConteudo3');
const divConteudo4 = document.querySelector('#tableConteudo4');





function abrirFecharConteudo1 () {
    const spanMostrarFechar = document.querySelector('#spanMostrarFechar1');
    if (divConteudo1.style.display === 'block') {
        divConteudo1.style.display = 'none';
        spanMostrarFechar.textContent = 'mostrar'
    } else {
        divConteudo1.style.display = 'block';
        spanMostrarFechar.textContent = 'fechar'
    }
    
}

function abrirFecharConteudo2 () {
    const spanMostrarFechar = document.querySelector('#spanMostrarFechar2');
    if (divConteudo2.style.display === 'block') {
        divConteudo2.style.display = 'none';
        spanMostrarFechar.textContent = 'mostrar'
    } else {
        divConteudo2.style.display = 'block';
        spanMostrarFechar.textContent = 'fechar'
    }
    
}

function abrirFecharConteudo3 () {
    const spanMostrarFechar = document.querySelector('#spanMostrarFechar3');
    if (divConteudo3.style.display === 'block') {
        divConteudo3.style.display = 'none';
        spanMostrarFechar.textContent = 'mostrar'
    } else {
        divConteudo3.style.display = 'block';
        spanMostrarFechar.textContent = 'fechar'
    }
    
}

function abrirFecharConteudo4 () {
    const spanMostrarFechar = document.querySelector('#spanMostrarFechar4');
    if (divConteudo4.style.display === 'block') {
        divConteudo4.style.display = 'none';
        spanMostrarFechar.textContent = 'mostrar'
    } else {
        divConteudo4.style.display = 'block';
        spanMostrarFechar.textContent = 'fechar'
    }
    
}

