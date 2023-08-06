
let letra = "b"
let palavras = ["acerola", "abacaxi", "banana", "blueberry"]

function solucao(letra, palavras) {
	//seu codigo aqui
    let errou = 0
    for(let item of palavras){
        if(item[0] != letra){
            errou++
        }
    }
    console.log(errou)
}

solucao(letra, palavras)