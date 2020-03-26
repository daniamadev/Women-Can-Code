//cria a classe usuario que irá exibir o "logado como"
class Usuario {
    constructor() {
        this.nomeUsuario = document.querySelector("#nomeUsuario");
        //pq recebe o nome dentro do construtor?
        //ah, no caso não há um outro arquivo, como no caso do twitter
        //que havia o card.js e dentro do construtor criava-se a constante
    }

    //aqui embaixo já consumimos a API com get para exibir o dado do usuário
    getUsuario = async () => {
        //a constante requisicao vai receber o metodo de consumo da api
        //que é o metodo get
        const requisicao = { method: 'get'}

        await fetch("http://localhost:3000/usuario", requisicao)
        //em vez de digitar method: get, digita-se a constante
        //requisicao que já recebeu esse metodo
        .then(resposta => resposta.json())
        //esta seta é uma arrowfunction que chama o metodo json()
        .then(dados => {
            localStorage.setItem("setaDados", JSON.stringify(dados))
        })
    }

    mostraUser = () => {
        const user = JSON.parse(localStorage.getItem("setaDados"))
        this.nomeUsuario.innerText = user.nome
        //user.nome é para pegar o dado do arquivo usuario.json
    }
}

