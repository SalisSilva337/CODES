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


const classeCardio = document.querySelectorAll(".cardio");
const selectEspecialidade = document.querySelector("#selectEspecialidade");

var listaCardio = ['James Kend','Jones Andrew'];
var listaEndo = ['Alekson Silva','Roberta Steves'];
var listaInfecto = ['Wilson Rapina','Leno Brega'];
var listaMasto = ['Mack Dex','Jack Mills'];
var listaOftal = ['Cynthia Rose','Ernaldo Gomes'];
var listaOtorrino = ['Sarah Santos','Samantha Flores'];
const selectMedico = document.querySelector("#selectMedico");





function adicionarSelect() {
    selectMedico.innerHTML = '';
        if (selectEspecialidade.value === "Cardiologia") {
            for (let contador = 0; contador < listaCardio.length; contador++) {
                var opcoes = document.createElement('option');
                opcoes.textContent = listaCardio[contador];
                selectMedico.appendChild(opcoes);
                
            }
            
        } 

        if (selectEspecialidade.value === "Endocrinologia") {
            for (let contador = 0; contador < listaEndo.length; contador++) {
                var opcoes = document.createElement('option');
                opcoes.textContent = listaEndo[contador];
                selectMedico.appendChild(opcoes);        
            
            }
        } 

        if (selectEspecialidade.value === "Infectologia") {
            for (let contador = 0; contador < listaInfecto.length; contador++) {
                var opcoes = document.createElement('option');
                opcoes.textContent = listaInfecto[contador];
                selectMedico.appendChild(opcoes);        
            
            }
        }

        if (selectEspecialidade.value === "Mastologia") {
            for (let contador = 0; contador < listaMasto.length; contador++) {
                var opcoes = document.createElement('option');
                opcoes.textContent = listaMasto[contador];
                selectMedico.appendChild(opcoes);        
            
            }
        } 

        if (selectEspecialidade.value === "Oftalmologia") {
            for (let contador = 0; contador < listaOftal.length; contador++) {
                var opcoes = document.createElement('option');
                opcoes.textContent = listaOftal[contador];
                selectMedico.appendChild(opcoes);        
            
            }
        } 

        if (selectEspecialidade.value === "Otorrino") {
            for (let contador = 0; contador < listaOtorrino.length; contador++) {
                var opcoes = document.createElement('option');
                opcoes.textContent = listaOtorrino[contador];
                selectMedico.appendChild(opcoes);        
                
                }
      
        }
}



const dadosEnviados = document.querySelector("#dadosEnviados");
const cepTxt = document.querySelector('#cepTxt');
const dataInput = document.querySelector('#dataInput');
const nomeInput = document.querySelector('#nomeInput');
const emailInput = document.querySelector('#emailInput');
const telefoneInput = document.querySelector('#telefoneInput');
const selectPlano = document.querySelector('#selectPlano');


function dadosComputados(){
    dadosEnviados.hidden = false;
    dadosEnviados.textContent = "ADICIONE VALORES AOS CAMPOS";
    setTimeout(() => {
        dadosEnviados.hidden = true;
    }, 2000);

    if ((cepTxt.value != '') && (selectPlano.value != '') && (selectEspecialidade.value != '') && (selectMedico.value != '') && (dataInput.value != '') &&(nomeInput.value != '') && (emailInput.value != '') && (telefoneInput.value != '')){
        dadosEnviados.hidden = false;
        dadosEnviados.textContent = "DADOS ENVIADOS COM SUCESSO";
        setTimeout(() => {
            dadosEnviados.hidden = true;
        }, 2000);
    }
}





