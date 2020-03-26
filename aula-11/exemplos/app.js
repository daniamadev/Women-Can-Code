const lista = document.querySelector("#lista-compras")
const btnDeletar = document.querySelector("#botao-deletar")
const texto = document.querySelector("#texto")
const btnAtualiza = document.querySelector("#botao-atualizar")
const btnAdiciona = document.querySelector("#botao-adicionar")
// meu array
let arrayDeCompras = []

// minha funcao sincrona ES7
getCompras = async () => {
  // crio um objeto com o metodo get
  const requisicao = { method: 'get' }
  // minha variavel do loop
  let conteudo = ''

  // aguardo a requisição finalizar
  await fetch("http://localhost:3000/lista/", requisicao)
    .then(resposta => resposta.json())
    .then(dados => arrayDeCompras = dados)

  // loop no meu array de alunas
  arrayDeCompras.forEach(compra => {
    conteudo += `<li>${compra.name}</li>`
  })

  // atribuo na minha variavel de lista
  lista.innerHTML = conteudo
}

deleteCompra = async () => {
    // crio um objeto com o metodo delete
    const requisicao = { method: 'delete' }

    // aguardo a requisição finalizar
    await fetch("http://localhost:3000/lista/1", requisicao)
      .then(resposta => resposta.json())
      .then(dados => arrayDeCompras = dados)
  }

  // escuta o clique no botao
  btnDeletar.addEventListener("click", deleteCompra)

putCompra = async () => {
    // crio um objeto com o metodo delete
    const requisicao = {
      headers: { "Content-Type": "application/json" },
      method: 'put',
      body: JSON.stringify({
        name: texto.value,
        id: "11"
      })
    }

    // aguardo a requisição finalizar
    await fetch("http://localhost:3000/lista/6", requisicao)
      .then(resposta => resposta.json())
      .then(dados => arrayDeCompras = dados)
  }

  // escuta o clique no botao
  btnAtualiza.addEventListener("click", putCompra)

  postCompras = async () => {
    // crio um objeto com o metodo delete
    const requisicao = {
      headers: { "Content-Type": "application/json" },
      method: 'post',
      body: JSON.stringify({
        name: texto.value
      })
    }

    // aguardo a requisição finalizar
    await fetch("http://localhost:3000/lista/", requisicao)
      .then(resposta => resposta.json())
      .then(dados => arrayDeCompras = dados)
  }

  // escuta o clique no botao
  btnAdiciona.addEventListener("click", postCompras)

// navegador termina de carregar e chama a função getAlunas
window.addEventListener("DOMContentLoaded", getCompras)