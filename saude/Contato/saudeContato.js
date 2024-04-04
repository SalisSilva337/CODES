const dadosEnviados = document.querySelector("#dadosEnviados");
const nomeInput = document.querySelector("#nomeInput");
const emailInput = document.querySelector("#emailInput");
const telefoneInput = document.querySelector("#telefoneInput");


function dadosComputados(){
    if (nomeInput.value === '' && emailInput.value === '' && telefoneInput.value === '') {
        dadosEnviados.hidden = false;
        dadosEnviados.textContent = "ADICIONE VALORES AOS CAMPOS";
    } else {
    dadosEnviados.hidden = false;
    dadosEnviados.textContent = "DADOS ENVIADOS COM SUCESSO";
    setTimeout(() => {
        dadosEnviados.hidden = true;
    }, 2000);
}
}
