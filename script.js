let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")

function abrirfecharmenu() {
    if (menu.classList.contains("menu-fechado")) {
        // Abrir menu
        menu.classList.remove("menu-fechado")
        // Mostrar icone X
        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"
    }
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Mostrar icone X

        iconeX.style.display = "none"

        // Esconder icone Barras

        iconeBarras.style.display = "inline"
    }
}
