//cria classe Twitter
class Twitter {
    //cria metodo para buscar dados pessoais
    buscaDaConta() {
        return fetch("./usuario.json", { method: 'get' });
    }
}

//cria classe Sugestões para seguir
class Seguidores {
    buscaSeguidores() {
        return fetch("./follow.json", { method: 'get' });
    }
}