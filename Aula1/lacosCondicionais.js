const input = require ('readline-sync')

const  numero_sorteado = 10

let numero = Number( input.question(" Escolha um numero?  ")) 

console.log(numero, typeof numero)

while (numero !== numero_sorteado) {
    console.log('Voce errou o numero, tente novamente...')
    numero = Number( input.question(" Escolha outro numero?  ")) 
} 

console.log('Parabéns, voce acertou!!!', 'Numero sorteado é:', numero_sorteado)

