let tempAtual = document.querySelector('#temperaturaAtual')
let sensacaoTermica = document.querySelector('#sensacaoTermica')
let tempMin = document.querySelector('#temperaturaMin')
let tempMax = document.querySelector('#temperaturaMax')
let vento = document.querySelector('#vento')
let umidade = document.querySelector('#umidade')
let spanDados = document.querySelector('#spanDados')


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
                spanDados.style.display = 'block'; 
                spanDados.textContent = "CIDADE ENCONTRADA COM SUCESSO!"
                setTimeout(() => {
                    spanDados.style.display = 'none'  
                }, 1000);

                console.log(urlInputada);
                let cidade = JSON.parse(request.response);
                console.log(cidade);
                tempAtual.textContent = cidade.main.temp + " ºC";
                sensacaoTermica.textContent =  cidade.main.feels_like + " ºC";
                tempMin.textContent =  cidade.main.temp_min + " ºC";
                tempMax.textContent =  cidade.main.temp_max + " ºC";
                vento.textContent =  cidade.wind.speed + " km/h";
                umidade.textContent =  cidade.main.humidity + " g/m³";
            }

            else if (request.status === 404){
                spanDados.style.display = 'block'; 
                spanDados.textContent = "CIDADE INVÁLIDA"
                setTimeout(() => {
                    spanDados.style.display = 'none'  
                }, 1000);
            }

            else{
                spanDados.style.display = 'block'; 
                spanDados.textContent = "ERRO AO FAZER A REQUISIÇÃO"
                setTimeout(() => {
                    spanDados.style.display = 'none'  
                }, 1000);
            }
        }
    }
    

    
}





