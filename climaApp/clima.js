let tempAtual = document.querySelector('#temperaturaAtual')
let sensacaoTermica = document.querySelector('#sensacaoTermica')
let tempMin = document.querySelector('#temperaturaMin')
let tempMax = document.querySelector('#temperaturaMax')
let vento = document.querySelector('#vento')
let umidade = document.querySelector('#umidade')



function buscarClima() {
    let cidadeClima = document.querySelector("#cidadeInput");
    if (cidadeClima !== "") {
        let url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=7698e4d61ba5a2ad8298df64a9343e83&units=metric";
        let urlInputada = url.replace("{city name}", cidadeClima.value);
        
        let request = new XMLHttpRequest();
        request.open("GET", urlInputada);
        request.send();

        request.onload = function () {
            if (request.status === 200) {
                spanDados.textContent = "CIDADE ENCONTRADA COM SUCESSO!"
                setTimeout(() => {
                    spanDados.style.display = 'none'  
                }, 1000);

                console.log(urlInputada);
                let cidade = JSON.parse(request.response);
                console.log(cidade);
                tempAtual.value = cidade.main.temp + " ºC";
                sensacaoTermica.value =  cidade.main.feels_like + " ºC";
                tempMin.value =  cidade.main.temp_min + " ºC";
                tempMax.value =  cidade.main.temp_max + " ºC";
                vento.value =  cidade.wind.speed + " km/h";
                umidade.value =  cidade.main.humidity + " g/m³";
            }

            else if (request.status === 404){
                spanDados.textContent = "CIDADE INVÁLIDA"
                setTimeout(() => {
                    spanDados.style.display = 'none'  
                }, 1000);
            }

            else{
                spanDados.textContent = "ERRO AO FAZER A REQUISIÇÃO"
                setTimeout(() => {
                    spanDados.style.display = 'none'  
                }, 1000);
            }
        }
    }
    

    
}





