const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somado = arr.reduce(function(prev, current){
    return prev + current
})

console.log(somado)


//Ex 2
function calculaSaldo(precos, saldo){
    return precos.reduce(function(prev, current){
        return prev - current
    }, saldo)
}

const precos = [10, 20, 10, 20, 10, 20, 10]

console.log(calculaSaldo(precos, 200))