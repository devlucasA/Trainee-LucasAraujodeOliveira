var a = window.document.getElementById("area")
        
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = "Clicado!"
    a.style.color = "green"
}

function entrar() {
    a.innerText = "Entrou!"
    a.style.color = "white"
}

function sair() {
    a.innerHTML = "Saiu!"
    a.style.color = "black"
}