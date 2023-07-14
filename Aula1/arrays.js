let array = ['Aironys', '32', '05/12', 'Web Developer', '3500', '1200']

console.log(array)


// Acessando pelos índices
console.log("Funcionário:",array[0])
console.log("Cargo:", array[3])


console.clear()


// Pecorrendo os arrays com o FOR modelo tradicional

for (let i = 0; i<array.length; i++){
    console.log(array[i])
}


console.clear()
// Agora vamos usar o for of, essa forma pegamos os elementos dos arrays

for (let elemento of array) {
    console.log(elemento)
}

console.clear()
// Agora vamos usar o for in, essa forma pegamos pelos os índices do arrays

for (let indice in array) {
    console.log( indice, array[indice]) // pegando o indice e os valores do indice


}

