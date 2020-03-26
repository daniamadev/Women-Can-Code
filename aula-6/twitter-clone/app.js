const objetoTwitter = new Twitter();
const objetoCard = new Card();

objetoTwitter.buscaDaConta()
    .then(function (resposta) {
        resposta.json()
        .then(function(dados)
        {
            objetoCard.mostraDadosUsuario(dados);
        })
    }) 