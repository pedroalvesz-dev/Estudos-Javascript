//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let resultadoDaGameplay = somarVitoriasDeRanqueadas(9, 8);
console.log(resultadoDaGameplay);

function somarVitoriasDeRanqueadas(vitorias, derrotas) {
  let somarVitoriasDeRanqueadas = vitorias - derrotas;
  let eloDoJogador;

  if (vitorias < 10) eloDoJogador = "Ferro";
  else if (vitorias >= 11 && vitorias < 20) eloDoJogador = "Bronze";
  else if (vitorias >= 21 && vitorias < 50) eloDoJogador = "Prata";

  return `O jogador de alto nivel esta com um saldo ${somarVitoriasDeRanqueadas} de vitorias e esta no elo ${eloDoJogador}`;
}
