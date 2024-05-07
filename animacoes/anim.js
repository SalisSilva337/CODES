let abrirModal = document.querySelector("#abrirModal");
let modal1 = document.querySelector("#modal1");
let modal2 = document.querySelector("#modal2");





abrirModal.addEventListener("click", function () {
    modal1.style.animation = "modalAnim 2s";
    modal2.style.animation = "modalAnim 2s";
    modal1.style.width = "0%";
    modal2.style.width = "0%";
    setTimeout(() => {
        abrirModal.style.opacity = "0";
        fodase.style.opacity = "1"
    }, 2000);
    
});
