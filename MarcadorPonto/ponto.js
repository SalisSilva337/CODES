const matriculaInput = document.querySelector("#matriculaInput");
const matriculaTable = document.querySelector("#matriculaTable");
const dataTable = document.querySelector("#dataTable");
const tempoTable = document.querySelector("#tempoTable");
const registrado = document.querySelector("#registrado");

function limiteNumeros (){
    if (matriculaInput.value.length > 5) {
        matriculaInput.value = matriculaInput.value.slice(0,5);
    }
}








function passarMatricula () {
   
    if (matriculaInput.value != '') {
        registrado.hidden = false; 
        setTimeout(() => {
            registrado.hidden = true; 
        }, 1000);
    

    let listaMatricula = document.createElement('tr');
    listaMatricula.textContent = matriculaInput.value;
    matriculaTable.appendChild(listaMatricula);

    

    let horarioHoje = new Date();
    let horas = horarioHoje.getHours();
    let minutos =  horarioHoje.getMinutes();

    let listaTempo = document.createElement('tr');
    listaTempo.textContent = horas + ":" + minutos;

    if (minutos < 10){
    listaTempo.textContent = horas + ":" + "0" + minutos;
    }

    tempoTable.appendChild(listaTempo);



    let dataHoje = new Date();
    let dia = dataHoje.getDate();
    let mes = dataHoje.getMonth();
    let ano = dataHoje.getFullYear();

    let listaData = document.createElement('tr');
    listaData.textContent = dia + "/" + mes + "/" + ano;

    if (mes < 10) {
    listaData.textContent = dia + "/" + "0" + mes + "/" + ano;
    }

    dataTable.appendChild(listaData);
}
}















function mostrarEsconder (){
    var suporte = document.querySelector("#suporte");
    if (suporte.style.display === 'none'){
        suporte.style.display = 'block';
    } else {
    suporte.style.display = 'none';
}
}