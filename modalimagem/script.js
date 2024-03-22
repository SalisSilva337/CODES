var img1 = document.querySelector('#img1')
var modal = document.querySelector ('#modalimg')
var modalimgg = document.querySelector ('#imgg')


function ampliar() {
    modal.style.display = 'block';
    modalimgg.src = img1.src;
}