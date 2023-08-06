const precos = [100, 500, 100, 200, 50];

function solucao(precos) {
  //1. ver se tem promoção
  //2. se não tiver promoção
  //    2.1 soma tudo - varrer o array somando o item atual ao total
  //3. se tiver promoção
  //    3.1 somar tudo
  //    3.2 identificar o item mais barato
  //    3.3 totalAPagar = soma - desconto

  //4. encontrando o menor valor
  //    4.1 percorrer o array
  //    4.2 verificar se o item atual é menor que o menor de todos ate agora
  //    4.3 se for, substitui
  //    4.4 se não for, segue em frente

  let soma = 0;
  for (let valor of precos) {
    soma += valor;
  }

  if (precos.length >= 5) {
    //tem promoção
    let menor = precos[0];
    for (let valorAtual of precos) {
      // se o item atual for menor que o menor até agora
      if (valorAtual < menor) {
        // o item atual é o novo menor
        menor = valorAtual;
      }
    }
    console.log(soma - menor);
  } else {
    //não tem promoção
    console.log(soma);
  }
}

solucao(precos);
