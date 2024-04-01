function buscaCep(){
    let cep = document.querySelector('#cepTxt').value;
    if (cep !== "") {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        request.onload = function(){
            if (request.status === 200) {
                let endereco = JSON.parse(request.response);
                document.querySelector('#ruaTxt').value = endereco.street;
                document.querySelector('#bairroTxt').value = endereco.neighborhood;
                document.querySelector('#estadoTxt').value = endereco.state;
                document.querySelector('#cidadeTxt').value = endereco.city;
            }
            else if (request.status === 404){
                alert ("CEP INVÁLIDO")
            }
            else{
                alert ("ERRO AO FAZER A REQUISIÇÃO")
            }
        }
    }

}

window.onload = function(){
    let cepTxt = document.querySelector('#cepTxt');
    cepTxt.addEventListener("blur", buscaCep);
}


const dadosEnviados = document.querySelector("#dadosEnviados");

function dadosComputados(){
    dadosEnviados.hidden = false;
    setTimeout(() => {
        dadosEnviados.hidden = true;
    }, 2000);
}

