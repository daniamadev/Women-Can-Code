const objetoUsuario = new Usuario();
//declara o objeto usuario, o new Usuario
//precisa ter o mesmo nome da classe de usuario.js

//adicionar o DOMContentLoaded para exibir tudo quando a pagina
//for carregada

const objetoPergunta = new Pergunta();
const objetoResposta = new Respostas();

window.addEventListener("DOMContentLoaded", () => {
    objetoUsuario.getUsuario();
    objetoUsuario.mostraUser();
    objetoPergunta.getPergunta();
    objetoPergunta.mostraPergunta();
    objetoResposta.mostraResposta();
    objetoResposta.getResposta();

    //os objetos estao chamando os metodos declarados
    //em usuario.js
})