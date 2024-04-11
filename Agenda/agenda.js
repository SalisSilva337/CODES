const modal = document.querySelector("#modal");
const modal2 = document.querySelector("#modal2");

const nomeContent = document.querySelector("#nomeContent");
const emailContent = document.querySelector("#emailContent");
const telefoneContent = document.querySelector("#telefoneContent");
const editarContent = document.querySelector("#editarContent");
const excluirContent = document.querySelector("#excluirContent");
const imagemContent = document.querySelector("#imagemContent");

const nomeInput = document.querySelector("#nomeInput");
const emailInput = document.querySelector("#emailInput");
const telefoneInput = document.querySelector("#telefoneInput");

const spanAdd = document.querySelector("#spanAdd");

const nomeInput2 = document.querySelector("#nomeInput2");
const emailInput2 = document.querySelector("#emailInput2");
const telefoneInput2 = document.querySelector("#telefoneInput2");

const botaoModalEditar = document.querySelector("#salvarContato2");


function abrirModal () {
  modal.style.display = "block";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } if (event.target == modal2) {
      modal2.style.display = "none";
    }
}






function salvarContato(){
    modal.style.display = "none";
  
  if ((nomeInput.value != '') && (emailInput.value != '') && (telefoneInput.value != '' )) {
  
    
    let listaNome = document.createElement('tr');
    listaNome.textContent = nomeInput.value;
    nomeContent.appendChild(listaNome);

    let listaEmail = document.createElement('tr');
    listaEmail.textContent = emailInput.value;
    emailContent.appendChild(listaEmail);

    let listaTelefone = document.createElement('tr');
    listaTelefone.textContent = telefoneInput.value;
    telefoneContent.appendChild(listaTelefone);

    var Imagem = document.createElement('img');
    var lerImagem = new FileReader();
    var imagemInput = document.querySelector("#imagemInput").files[0];

    lerImagem.onloadend = function(){
    Imagem.src = lerImagem.result;
    }
    

    if (imagemInput) {
      lerImagem.readAsDataURL(imagemInput);
    } else {
      Imagem.src = "";
    }
    
    imagemContent.appendChild(Imagem);

    
    

    var botaoEditar = document.createElement('button');
    botaoEditar.id = 'botaoEditar';
    botaoEditar.textContent = 'Editar';
    editarContent.appendChild(botaoEditar);

    var botaoExcluir = document.createElement('button');
    botaoExcluir.id = 'botaoExcluir';
    botaoExcluir.textContent = 'Excluir';
    excluirContent.appendChild(botaoExcluir);
  

  botaoEditar.onclick = function () {
      modal2.style.display = "block";

      
  };
  
  botaoModalEditar.onclick = function () {
    modal2.style.display = "none";
    if ((nomeInput2.value != '') && (emailInput2.value != '') && (telefoneInput2.value != '' )) {
  
    listaNome.textContent = nomeInput2.value;
    nomeContent.appendChild(listaNome);
  
    listaEmail.textContent = emailInput2.value;
    emailContent.appendChild(listaEmail);
  
    listaTelefone.textContent = telefoneInput2.value;
    telefoneContent.appendChild(listaTelefone);
    
  
    var imagemInput2 = document.querySelector("#imagemInput2").files[0];
    
    if (imagemInput2) {
      lerImagem.readAsDataURL(imagemInput2);
    } else {
      Imagem.src = "";
    }
    imagemContent.appendChild(Imagem);
    }
  };

  botaoExcluir.onclick = function () {
    listaNome.remove();
    listaEmail.remove();
    listaTelefone.remove();
    botaoEditar.remove();
    botaoExcluir.remove();
    Imagem.remove();
  };

  } else {
    spanAdd.style.display = 'block'
  }
}



