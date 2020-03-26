class Respostas {
    constructor() {
        this.resposta = document.querySelector("#resposta");
    }


    getResposta = async () => {
        const requisicao = { method: 'get' }
        await fetch("http://localhost:3000/respostas", requisicao)
            .then(resposta => resposta.json())
            .then(dados => this.resposta = dados)
    }

    
    mostraResposta = () {
        let answer = ''
        this.arrayRespostas.forEach(element => {
            answer += `
                <li>
                    <table class="fw" id="message-88">
                        <tbody>
                        <tr>
                            <td class="votecell" rowspan="2">
                            <div class="vote">
                                <div class="text-center">
                                <a class="vote-up disabled">
                                    <span class="glyphicon glyphicon-circle-arrow-up"></span>
                                </a>
                                </div>
                                <div class="score text-center" >${element.votos}</div>
                                <div class="text-center">
                                <a class="vote-down disabled">
                                    <span class="glyphicon glyphicon-circle-arrow-down"></span>
                                </a>
                                </div>
                            </div>
                            </td>
                            <td class="postcell">
                            <div class="col-md-10">

                                <p>${element.conteudo}</p>
                            </div>
                            <div class="col-md-2">
                                <a href="#" class="btn btn-danger" title="deletar">
                                <i class="glyphicon glyphicon-trash"></i></a>
                            </div>
                            <table class="user-info">
                                <tbody>
                                <tr>
                                </tr>
                                <tr>
                                    <td colspan="2">Respondido em <br>
                                    <time>${element.data}</time>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="avatar"><img alt="testuser" height="30"
                                        src="http://gravatar.com/avatar/85e3339e2c78f081802575f4e8081792?default=identicon&amp;size=30"
                                        width="30"></td>
                                    <td><a href="">${element.usuario}</a></td>
                                </tr>
                                </tbody>
                            </table>
                            <p></p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </li>
        `    
        });
        this.resposta.innerHTML = answer;
    }
}