//pegar dados

const obtemResposta = document.querySelector("#sua-resposta");
const botaoResposta = document.querySelector("#btn-resposta");
const mostraResposta = document.querySelector("#mostra-resposta");
const delResposta = document.querySelector("#deletar-resposta");

//setar dado
botaoResposta.addEventListener("click", () => {
    localStorage.setItem("lista-tecnologias", obtemResposta.value);
    obtemResposta.value = '';
    mostraResposta.innerHTML = `<li>${localStorage.getItem("lista-tecnologias")}`;
});

//deletar dado
delResposta.addEventListener("click", () => {
    localStorage.clear();
    mostraResposta.innerHTML = '';
})

//manter dado no localstorage mesmo apos reload
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("lista-tecnologias")) {
        mostraResposta.innerHTML = `<li>${localStorage.getItem("lista-tecnologias")}`;
    }
})