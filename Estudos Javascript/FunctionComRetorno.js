// Declarando a função e armazenando o retorno em uma variável
let resultado = multiplicacao(8, 8);
console.log(`O resultado foi de ${resultado}`);
function multiplicacao(numbA, numbB) {
  let multiplicacao = numbA * numbB;
  return multiplicacao;
}

// Chamando a função diretamente dentro do console.log
console.log("o resultado da divisao foi de " + divisao(885, 77));
function divisao(numA, numB) {
  let divisao = numA / numB;
  return divisao;
}

// Chamando a função diretamente dentro do console.log
console.log("o resultado da divisao foi de " + subtracao(10, 7));
function subtracao(numA, numB) {
  return numA - numB;
}

// Retornando o quarto nome de uma pessoa com split através do parametro
let output = QuartoNome("Jose-Carlos-Gomes-Oliveira", "-");
console.log(output);
function QuartoNome(name, split) {
  let QuartoNome = name.split(split)[3];
  return QuartoNome;
}
