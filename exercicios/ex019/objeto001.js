let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log('Engordar')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)