class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  selecionartipo() {
    let tipo = ["guerreiro", "mago", "monge", "ninja"];
    if (tipo.includes(novopes)) {
      if (novopes == "guerreiro") {
        poder = "espada";
      } else if (novopes == "mago") {
        poder = "magia";
      } else if (novopes == "monge") {
        poder = "artes maciais";
      } else if (novopes == "ninja") {
        poder = "shuriken";
      } else {
        console.log("Selecione um tipo listado");
      }
    }
    return poder;
  }
}
let poder;
let novopes = "ninja";
let novo = new heroi("jefson", 15, novopes);
novo.selecionartipo();
console.log(`o ${novopes} atacou usando ${poder}`);
