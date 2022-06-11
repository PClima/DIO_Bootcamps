const arr = [1, 2, 3, 4, 5]
const args = {
    multiplicador: 2
}


const multiplicado = arr.map((n)=> n*2)

//Com This
const multiplicadoThis = arr.map(function (n){ return n*this.multiplicador}, args)

console.log(multiplicado +"\n"+ multiplicadoThis)