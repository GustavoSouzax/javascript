let amigo = {
    nome: 'Fulano',
    peso: 79,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}
//amigo.engordar(6)
console.log(`Nome ${amigo.nome} peso ${amigo.peso}`)
console.log(typeof amigo.engordar)
