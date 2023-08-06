

function solucao(sequencia) {
	//seu codigo aqui
    //varrer a sequencia
    //se for > soma 1 ao índice
    //se for < subtrai 1 do indice
    //se indice > 6, indice = 0
    //se indice  for menor que 0, indice = 6

    let indice = 0;
    for(let item of sequencia){
        if(item === '>'){
            indice++
        } else { // <
            indice --
        }

        if(indice < 0){
            indice = 6;
        } else if(indice > 6){
            indice = 0;
        }
    }
    console.log(indice)

}
solucao(">><")