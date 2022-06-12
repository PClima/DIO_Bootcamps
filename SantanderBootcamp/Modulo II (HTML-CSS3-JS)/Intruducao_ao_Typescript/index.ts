// Funções

// function soma(a: number, b: number){
//     return a + b
// }

// console.log(soma(1, 2))

// //Types e Interfaces
// //Interfaces normalmente sao utilizadas para criar regras para dados e types para umaa variavel que pode ser de varios tipos interface

// interface IAnimal{
//     nome: string
//     tipo: 'terrestre' | 'aquático',
//     executarRugido(som: string): void
// }

// interface IFelinos extends IAnimal{
//     raca: string
//     tipoFelino: 'Gato' | 'Tigre' | 'Leao'
// }

// const animal: IAnimal = {
//     nome: 'Cachorro',
//     tipo: "terrestre",
//     executarRugido: (som) => {`${som}`}
// }

// const felino: IFelinos = {
//     nome: 'bartolomeu',
//     raca: 'vira-lata',
//     tipo: "terrestre",
//     tipoFelino: "Gato",
//     executarRugido: (som) => {`${som}`}
// }

// type IDomestico = IFelinos //| IOutroAnimal



//Lidando com DOM
// const input = document.getElementById('id') as HTMLInputElement

// input.addEventListener('input', (event)=>{
//     const i = event.currentTarget as HTMLInputElement
//     console.log(i.value)
// })


//Generic Types
// function adicionaApendiceALista<T>(array: any[], valor: T) {
//     return array.map(() => valor)
// }

// adicionaApendiceALista([1, 2, 3], 2)
// adicionaApendiceALista(['1','2', '3'], '2')



//Condicionais com parametros
// interface IUsuario{
//     id: string
//     email: string
// }

// interface IAdmin extends IUsuario{
//     cargo: 'gerente' | 'coordenador' | 'supervisor'
// }

// function redirecione(usuario: IUsuario | IAdmin){
//     if('cargo' in usuario){
//         //redirecione para a area de Admin
//     }

//     //Redireciona para a area de usuario
// }

// //Utilizando ? para indicar dado opicional
// interface IUsuario{
//     id: string
//     email: string
//     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
// }

// function redirecione(usuario: IUsuario ){
//     if(usuario.cargo){
//         //redirecionar(usuario.cargo)
//     }

//     //redirecionar para a area do usuario
// }

//Criando variaveis readonly e private
// interface Cachorro{
//     readonly nome: string
//     readonly idade: number
//     parqueFavorito?: string
// }

// class meuCachorro implements Cachorro{
//     readonly idade
//     nome

//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const cao = new meuCachorro('Zurich', 1)
// cao.idade = 8

// console.log(cao)


//Bibliotecas externas
