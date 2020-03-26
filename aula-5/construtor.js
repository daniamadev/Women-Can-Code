//isso é uma função construtora
function Pessoa(nome, idade) {
    this.nomeOutrVariavel = nome;
    this.idadeOutraVariavel = idade;
    console.log(this);
}

const pessoa1 = new Pessoa("Maria", 28);
const pessoa2 = new Pessoa("Daniela", 29);

