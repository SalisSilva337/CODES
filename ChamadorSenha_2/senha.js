let contadorRegular = 1;
let contadorPrioridade = 1;

const botaoChamada = document.querySelector('#botao');
const senhaUlt = document.querySelector('#ultimasSenhas');
const tempo = setTimeout(500);



function chamada() {
    
    botaoChamada.disabled = true;
    var senhaR = document.querySelector('#mostrar');
    senhaR.innerHTML = 'R - ' + contadorRegular; 

    let listaSenhas = document.createElement('li');
    listaSenhas.textContent = 'R - ' + contadorRegular;
    senhaUlt.appendChild(listaSenhas);
    senhaUlt.insertBefore(listaSenhas, senhaUlt.children[0]);
    
    if (contadorRegular % 3 == 0) {
        setTimeout(() => {
        botaoChamada.disabled = true;
        prioridade();
        }, 6000);
        
    }

    let falacao = document.createElement('textarea');
    falacao.textContent = 'Regular' + contadorRegular;
    var voz = new SpeechSynthesisUtterance(falacao.value);
    speechSynthesis.speak(voz);
    contadorRegular++;

    let aviso = document.createElement('textarea');
    aviso.textContent = 'Aguarde';
    var voz2 = new SpeechSynthesisUtterance(aviso.value);
    speechSynthesis.speak(voz2);

    setTimeout(() => {
        botaoChamada.disabled = false;
        let aviso = document.createElement('textarea');
        aviso.textContent = 'botão habilitado';
        var voz2 = new SpeechSynthesisUtterance(aviso.value);
        speechSynthesis.speak(voz2);
    }, 7000);
    
}

function prioridade() {
    botaoChamada.disabled = true;

    var senhaP = document.querySelector('#mostrar');
    senhaP.innerHTML = 'P - ' + contadorPrioridade;

    let listaSenhas = document.createElement('li');
    listaSenhas.textContent = 'P - ' + contadorPrioridade;
    senhaUlt.appendChild(listaSenhas);
    senhaUlt.insertBefore(listaSenhas, senhaUlt.children[0]);

    let falacao = document.createElement('textarea');
    falacao.textContent = 'Prioridade' + contadorPrioridade;
    var voz = new SpeechSynthesisUtterance(falacao.value);
    speechSynthesis.speak(voz);
    contadorPrioridade++;

    
}


    



