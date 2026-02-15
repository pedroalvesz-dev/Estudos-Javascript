class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  mensagemDeAtaque() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }
    console.log(
      `o heroi de nome ${this.nome} com idade de ${this.idade} anos e usou ataque do tipo ${this.tipo} e usou ataque do tipo ${ataque}`,
    );
  }
}
let meuHeroi = new heroi("greninja", 20, "ninja");
meuHeroi.mensagemDeAtaque();
