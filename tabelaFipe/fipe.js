





function buscarMarcas() {
    let selectVeiculo = document.querySelector("#selectVeiculo");
    if (selectVeiculo !== "") {
        let url = "https://parallelum.com.br/fipe/api/v1/" + selectVeiculo.value + "/marcas";
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

    request.onload = function () {
        if (request.status === 200) {
            console.log(url);
            let fipeMarcas = JSON.parse(request.response);
            let selectMarca = document.querySelector("#selectMarca");
            console.log(fipeMarcas);
            selectMarca.innerHTML = '';
            
            let optionVazia = document.createElement("option");
            optionVazia.value = "";
            optionVazia.textContent = "Selecione uma marca";
            selectMarca.appendChild(optionVazia);

            for (let index = 0; index < fipeMarcas.length; index++) {
                let option = document.createElement("option");
                
                option.value = fipeMarcas[index].codigo;
                option.textContent = fipeMarcas[index].nome;

                selectMarca.appendChild(option);
            }
          
        }
            
        } 
    }

}






function buscarModelos() {
    if (selectMarca !== "") {
        let url = "https://parallelum.com.br/fipe/api/v1/"+ selectVeiculo.value + "/marcas/" +  selectMarca.value + "/modelos";
        
        
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        request.onload = function () {
            if (request.status === 200) {
                console.log(url);

                let fipeModelos = JSON.parse(request.response);
                let selectModelo = document.querySelector("#selectModelo");
                console.log(fipeModelos);
                selectModelo.innerHTML = '';

                let optionVazia = document.createElement("option");
                optionVazia.value = "";
                optionVazia.textContent = "Selecione um modelo";
                selectModelo.appendChild(optionVazia);
                for (let index = 0; index < fipeModelos.modelos.length; index++) {
                    let option = document.createElement("option");

                    option.textContent = fipeModelos.modelos[index].nome;
                    option.value = fipeModelos.modelos[index].codigo;

                    selectModelo.appendChild(option);
            
                }
            
          
        }
            
        } 
    }

}







function buscarAnos() {
    if (selectModelo !== "") {
        let url = "https://parallelum.com.br/fipe/api/v1/" + selectVeiculo.value + "/marcas/" +  selectMarca.value + "/modelos/" + selectModelo.value + "/anos" ;
        
        
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        request.onload = function () {
            if (request.status === 200) {
                console.log(url);

                let fipeAnos = JSON.parse(request.response);
                let selectAno = document.querySelector("#selectAno");
                console.log(fipeAnos);
                selectAno.innerHTML = '';

                let optionVazia = document.createElement("option");
                optionVazia.value = "";
                optionVazia.textContent = "Selecione o ano de fabricação";
                selectAno.appendChild(optionVazia);

                
                for (let index = 0; index < fipeAnos.length; index++) {
                    let option = document.createElement("option");
                    
                    option.textContent =  fipeAnos[index].nome;
                    option.value = fipeAnos[index].codigo;

                    selectAno.appendChild(option);
                }

            }
          
        }
            
    } 
}







let anoModelo = document.querySelector("#anoModelo");
let codigoFipe = document.querySelector("#codigoFipe");
let combustivel = document.querySelector("#combustivel");
let marca = document.querySelector("#marca");
let mesReferencia = document.querySelector("#mesReferencia");
let modelo = document.querySelector("#modelo");
let valor = document.querySelector("#valor");

function buscarVeiculo() {
    if (selectAno !== "") {
        let url = "https://parallelum.com.br/fipe/api/v1/" + selectVeiculo.value + "/marcas/" +  selectMarca.value + "/modelos/" + selectModelo.value + "/anos/" + selectAno.value;
        
        
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();

        request.onload = function () {
            if (request.status === 200) {
                console.log(url);

                let fipeVeiculo = JSON.parse(request.response);
                
                console.log(fipeVeiculo);

                    anoModelo.textContent = "Ano do Modelo: " + fipeVeiculo.AnoModelo;
                    codigoFipe.textContent = "Código Fipe: " +  fipeVeiculo.CodigoFipe;
                    combustivel.textContent = "Combustível: " +  fipeVeiculo.Combustivel;
                    marca.textContent = "Marca do Veículo: " +  fipeVeiculo.Marca;
                    mesReferencia.textContent = "Mês de Referencia: " +  fipeVeiculo.MesReferencia;
                    modelo.textContent = "Modelo do Veículo: " +  fipeVeiculo.Modelo;
                    valor.textContent = "Valor: " + fipeVeiculo.Valor;

                
                

            }
          
        }
            
    } 
}

