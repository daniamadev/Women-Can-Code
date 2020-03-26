class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
    acelerar() {
        return "acelerou";
    }
    freiar() {
        return "freiou";
    }
}
const carrinho = new Carro("Audi", "A3", "branco");
console.log(carrinho.acelerar());
console.log(carrinho.freiar());

/*class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }
    latir() {
        return "auau";
    }
}
const bolinha = new Cachorro ("bolinha");
console.log(bolinha.latir());*/