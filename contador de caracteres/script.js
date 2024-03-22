const areatext = document.querySelector('#areatxt');
const caracter1 = document.querySelector('#caracteres1');
const caracter2 = document.querySelector('#caracteres2');
const caracter3 = document.querySelector('#caracteres3');





areatext.addEventListener ("input", (event) => {
        let caracterr = areatext.value.length;
        caracter1.innerHTML = caracterr;
        let caracternegativo = (100)-(areatext.value.length)
        caracter2.innerHTML = caracternegativo;
        let carashow = ("LIMITE DE CARACTERES ATINGIDO")
        caracter3.innerHTML = carashow

        if (caracternegativo == 0) {
            return oninput= document.getElementById('caracteres3').style.display = 'block'
        } else {
            return oninput= document.getElementById('caracteres3').style.display = 'none'
        }
            
});



