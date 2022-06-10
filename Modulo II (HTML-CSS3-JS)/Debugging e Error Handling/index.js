function validaArr(arr, tamanho){
    try {
        if(!arr && !tamanho) throw new ReferenceError("Parametros nao enviados")

        if(typeof(arr) !== 'object') throw new TypeError("Necessário enviar um object")

        if(typeof(tamanho) !== 'number') throw new TypeError("Tamanho precisa ser numérico")

        if(arr.length !== tamanho) throw new RangeError("Array possui tamanho diferente do indicado")

        return arr
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log('Reference Error')
            console.log(e.stack)
        }

        if(e instanceof TypeError){
            console.log('Type Error')
            console.log(e.stack)
        }

        if(e instanceof RangeError){
            console.log('Range error')
            console.log(e.stack)
        }
    }
}

console.log(validaArr([1, 2, 3, 4], 4))