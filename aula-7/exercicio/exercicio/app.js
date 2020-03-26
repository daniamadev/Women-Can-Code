const lista = document.querySelector("#tecnologias");
const botao = document.querySelector("#limpar");

lista.addEventListener("click", (event) => {  
    event.target.classList.add("clicado");
    console.log(event.target);
    
});

lista.addEventListener("dblclick", (event) => {
    if(event.target.classList.contains("clicado")) {
        lista.classList.remove("clicado");
    }
});

botao.addEventListener("click", () => {
    lista.remove();
});

