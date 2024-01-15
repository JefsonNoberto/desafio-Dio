let heroi = "jefson";
let xp = 1000;
const mensagem = `O Herói de nome ${nome} está no nível de ${nivel}`;
let nivel;
if (xp <= 1000) {
  nivel = ferro;
} else if (xp >= 1001 || xp <= 2000) {
  nivel = Bronze;
}
console.log(mensagem);
