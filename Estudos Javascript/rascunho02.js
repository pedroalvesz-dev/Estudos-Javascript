class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  mensegemDeAtaque() {
    let ataque = "";
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if ((this.tipo = "ninja")) {
      ataque = "shuriken";
    }
    console.log(
      `o heroi com o nome de ${this.nome} de idade ${this.idade} anos do tipo ${this.tipo} usou o ataque de ${ataque}`,
    );
  }
}

let meuHeroi01 = new Heroi("pikachu", 30, "mago");
meuHeroi01.mensegemDeAtaque();
