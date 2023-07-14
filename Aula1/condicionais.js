const idade = 32

if (idade >= 18) {
    console.log("Você é maior de idade com", idade + ' Anos')
} else {
    console.log("Você é menor de idade com", idade + ' Anos')
}

// Sistema de notas

let nota1 = 7.5
let nota2 = 6.1
let nota3 = 10

let media = (nota1 + nota2 + nota3) / 3

if (media >= 7 && media <= 10) {
    console.log("Aprovado", media.toFixed(2))
} else if (media > 4 && media <7) {
    console.log("Recuperação", media.toFixed(2))
} else if (media <=4){
    console.log("Reprovado", media.toFixed(2))
} else {
    console.log("Nota inválida")
}
