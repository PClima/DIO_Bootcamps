function getAdmins(map){
    
    let admins = []
    
    for([key, value] of map){
        if(value == 'Admin'){
            admins.push(key)
        }
    }

    return admins
}

const usuarios = new Map()

usuarios.set('Pedro', 'Admin')
usuarios.set('Pri', 'Admin')
usuarios.set('Gabirel', 'User')

console.log(getAdmins(usuarios))