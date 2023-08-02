

function solucao(stringCorrompida) {
  // seu codigo aqui
  //1. olhar cada um dos caracteres
  //2. ver se pode o caractere em questão
  //3. se for permitido, escrevo
  //4. se não for permitido, ignoro e olho o próximo
  //5. quando acabarem os caracteres, é só exibir o que eu escrevi

  let dadoPurificado = "";
  for (let caractere of stringCorrompida) {
    if (
      caractere === "!" ||
      caractere === "@" ||
      caractere === "$" ||
      caractere === "%" ||
      caractere === "&" ||
      caractere === "*" ||
      caractere === "(" ||
      caractere === ")" ||
      caractere === "."
    ) {
      //ignorar
    } else {
      dadoPurificado = dadoPurificado + caractere;
    }
  }
  console.log(dadoPurificado);
}

solucao("Felis) silvestris *catus&")
