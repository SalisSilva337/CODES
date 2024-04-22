let contadorRegular = 1;
let contadorPrioridade = 1;

const botaoPrioridade = document.querySelector('#prioridade')
const botaoRegular = document.querySelector('#regular')
const senhaUlt = document.querySelector('#ultimasSenhas');
const tempo = setTimeout(500);



function regular() {
    botaoRegular.disabled = true;
    botaoPrioridade.disabled = true;

    var senhaR = document.querySelector('#mostrar');
    senhaR.innerHTML = 'R - ' + contadorRegular; 

    let listaSenhas = document.createElement('li');
    listaSenhas.textContent = 'R - ' + contadorRegular;
    senhaUlt.appendChild(listaSenhas);
    senhaUlt.insertBefore(listaSenhas, senhaUlt.children[0]);
    
    if (contadorRegular % 3 == 0) {
        prioridade();
    }

    let falacao = document.createElement('textarea');
    falacao.textContent = 'Regular' + contadorRegular;
    var voz = new SpeechSynthesisUtterance(falacao.value);
    speechSynthesis.speak(voz);
    contadorRegular++;

    let aviso = document.createElement('textarea');
    var voz2 = new SpeechSynthesisUtterance(aviso.value);
    speechSynthesis.speak(voz2);

    setTimeout(() => {
        botaoRegular.disabled = false;
        botaoPrioridade.disabled = false;
        let aviso = document.createElement('textarea');
        var voz2 = new SpeechSynthesisUtterance(aviso.value);
        speechSynthesis.speak(voz2);
    }, 1000);
    
}

function prioridade() {
    botaoPrioridade.disabled = true;
    botaoRegular.disabled = true;

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

    let aviso = document.createElement('textarea');
    var voz2 = new SpeechSynthesisUtterance(aviso.value);
    speechSynthesis.speak(voz2);

    setTimeout(() => {
        botaoRegular.disabled = false;
        botaoPrioridade.disabled = false;
        let aviso = document.createElement('textarea');
        var voz2 = new SpeechSynthesisUtterance(aviso.value);
        speechSynthesis.speak(voz2);
    }, 1000);
}


    



