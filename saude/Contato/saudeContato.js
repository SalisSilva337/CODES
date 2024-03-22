const dadosEnviados = document.querySelector("#dadosEnviados");





function dadosComputados(){
    dadosEnviados.hidden = false;
    setTimeout(() => {
        dadosEnviados.hidden = true;
    }, 2000);
}
