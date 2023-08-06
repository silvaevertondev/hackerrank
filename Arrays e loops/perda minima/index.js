const precos = [10, 5, 20, 7, 18]

function solucao(precos) {
    // seu codigo aqui
    //varrer todas as possibilidades de compra e venda
    //ver para cada um, se é prejuizo
    //se for, anotar valor

    //depois, ver qual foi o menor prejuizo
    let menorPrejuizo = 999999999999;
    for(let i = 0; i < precos.length; i++){
        for(let j = i + 1; j < precos.length; j++){
            const compra = precos[i]
            const venda = precos[j]
            const prejuizo = compra - venda

            if(prejuizo > 0){
                if(prejuizo < menorPrejuizo){
                    menorPrejuizo = prejuizo;
                }
            }
        }
    }
    console.log(menorPrejuizo)
  }

  solucao(precos)
  