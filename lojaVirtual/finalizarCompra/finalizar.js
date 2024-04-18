sessionStorage.getItem("produtos");
console.log(sessionStorage.getItem("produtos"));

let div = document.querySelector("#porra")
div.textContent = sessionStorage.getItem("produtos");