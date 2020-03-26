class Pergunta {
    constructor() {
        this.usuario = document.querySelector("#usuarioPergunta");
        this.titulo = document.querySelector("#titulo");
        this.conteudo = document.querySelector("#conteudo");
        this.tags = document.querySelector("#tags");
        this.data = document.querySelector("#data")
        this.votos = document.querySelector("#votos");
        this.pergunta = 0;
    }

    getPergunta = async () => {
        const requisicao = { method: 'get' }

        await fetch("http://localhost:3000/pergunta", requisicao)
            .then(resposta => resposta.json())
            .then(dados => this.pergunta = dados)

        this.mostraPergunta();

    }

    mostraPergunta = () => {
        this.usuario.innerHTML = this.pergunta.usuario;
        this.titulo.innerHTML = this.pergunta.titulo;
        this.conteudo.innerHTML = this.pergunta.conteudo;
        this.tags.innerHTML = this.pergunta.tags;
        this.data.innerHTML = this.pergunta.data;
        this.votos.innerHTML = this.pergunta.votos;
    }
}