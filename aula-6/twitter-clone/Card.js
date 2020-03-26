//define a classe card
class Card {
    constructor() {
        this.quantidade_tweets = document.getElementById("quantidade_tweets");
        this.seguindo = document.getElementById("seguindo");
        this.seguidores = document.getElementById("seguidores");
        this.likes = document.getElementById("likes");

        this.nome = document.getElementById("nome");
        this.usuario = document.getElementById("usuario");
        this.local = document.getElementById("local");
        this.cadastro = document.getElementById("cadastro");
    }
    //monta o HTML da página Twitter
    mostraDadosUsuario(dados) {
        this.quantidade_tweets.innerText = `${dados[0].quantidade_tweets}`;
        this.seguindo.innerText = `${dados[0].seguindo}`;
        this.seguidores.innerText = `${dados[0].seguidores}`;
        this.likes.innerText = `${dados[0].likes}`;
        
        this.nome.innerText = `${dados[0].nome}`;
        this.usuario.innerText = `${dados[0].usuario}`;
        this.local.innerText = `${dados[0].local}`;
        this.cadastro.innerText = `${dados[0].cadastro}`;

    }
}

class SugestaoSeguidores {

}  
