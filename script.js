let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")


function abrirMenu() {
    // Abrir menu
    menu.classList.remove("menu-fechado")
    menu.style.display = "flex"
    // Mostrar icone X
    iconeBarras.style.display = "none"
}

function fecharMenu() {
    // Fechar o menu
    menu.classList.add("menu-fechado")
    menu.style.display = "none"
    // Esconder icone Barras
    iconeBarras.style.display = "inline"
}


window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeBarras.style.display = "none"

}


const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorTelefone = document.getElementById("telefone").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    console.log(valorNome);
    console.log(valorTelefone)
    console.log(valorEmail);
    console.log(valorDescricao);

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        tel: valorTelefone,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisição para API
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosForm)
    }
    )
        .then(resposta => {
            console.log(resposta)
            alert("Solicitação Cadastrada")
            document.querySelector("#orcamento form").reset()          

            
        })

        .catch(erro => {
            console.error(erro)
            alert("Erro Desconhecido")
        })

    event.preventDefault()
}   
