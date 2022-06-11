function verificaPalidromo(palavra){
    if(!palavra) return

    return palavra.split("").reverse().join("") === palavra
}

console.log(verificaPalidromo("fsad"))