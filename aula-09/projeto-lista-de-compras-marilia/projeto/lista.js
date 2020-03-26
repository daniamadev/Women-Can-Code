class Lista {

  constructor() {
    // crio a propriedade listaDeCompras 
    this.listaDeCompras = document.querySelector("#lista-de-compras");
    // crio a propriedade arrayDeItens
    this.arrayDeItens = [];
  }
  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE DOMContentLoaded -----
  // método para adicionar as informações do Local Storage no array

  montaArray()  {
    //verifica se existe algo no local storage
    if (localStorage.getItem ("itensLista")) {
      const arrayConvertido = JSON.parse(localStorage.getItem ("itensLista"))
      this.arrayDeItens = arrayConvertido
      console.log(this.arrayDeItens)
    }
    // atualiza array usar JSON.parse
  }
  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE DOMContentLoaded -------------
  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE Click no botão adicionar -----
  // método para montar a lista fazendo o loop entre os dados do array
  montaLista() {
    // loop com os dados do array e atualiza html
    let lista = ''
    this.arrayDeItens.forEach(item => {
      lista += `
      <li> 
      <span>${item}</span> 
      <button class="deletar">deletar</button>
      </li>
      `
      this.listaDeCompras.innerHTML = lista
    })
  }
  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE Click no botão adicionar -----
  // metodo para adicionar itens no arrayDeItens e no local storage
  adicionaItem(item) {
    // adiciona no array e no local storage usar JSON.stringify
    this.arrayDeItens.push(item)
    const arrayJSON = JSON.stringify(this.arrayDeItens)
    localStorage.setItem("itensLista", arrayJSON)
  }
  // ------ EXECUTA ESSA FUNÇÃO AO DISPARAR O EVENTO DE Click no botão deletar em cada item da lista -----
  // método para deletar UM item da lista
  deletarItemDaLista(event) {
    this.listaDeCompras.addEventListener ("click", () => {
      const itemDeletado = event.target.previousSibling.previousSibling
      console.log(itemDeletado);
      
      if (event.target.classList.contains("deletar")) {
        if (confirm("Tem certeza?")) {
          event.target.parentElement.remove() 

          this.arrayDeItens.forEach((item, index) => {
            if (itemDeletado.innerText === item) {
              this.arrayDeItens.splice(index,1)
            }
          })
          const arrayJSON = JSON.stringify(this.arrayDeItens)
          localStorage.setItem("itensLista", arrayJSON)
        }
      }
    })
  }
       
  /// método para deletar TODOS os itens da lista
  deletarLista() {
    // limpar o html e o local storage
    this.listaDeCompras.remove()
    this.arrayDeItens = [] 
    localStorage.clear()
  }
}
