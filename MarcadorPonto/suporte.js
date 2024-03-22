const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const selectEmpresa = document.querySelector("#empresa");
const selectErro = document.querySelector("#assunto");
const textArea = document.querySelector("#textarea");






function enviarTudo (){
    
    
    const resultado = document.querySelector("#resultado");
    let Nomee = document.createElement('li');
    Nomee.textContent = 'Nome: '+ nome.value;
    resultado.appendChild(Nomee);



    let emaill = document.createElement('li');
    emaill.textContent = 'Email: '+ email.value;
    resultado.appendChild(emaill);

    let selectEmpresaa = document.createElement('li');
    selectEmpresaa.textContent = 'Empresa: '+ selectEmpresa.value;
    resultado.appendChild(selectEmpresaa);


    let selectErroo = document.createElement('li');
    selectErroo.textContent = 'Assunto: '+ selectErro.value;
    resultado.appendChild(selectErroo);

    let textAreaa = document.createElement('li');
    textAreaa.textContent = 'Mensagem: '+ textArea.value;
    resultado.appendChild(textAreaa);

}





