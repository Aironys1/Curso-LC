console.clear()
const input = require('readline-sync')

let nota;
let soma = 0;



for (let i = 1; i<=3; i++){
    nota = Number(input.question(`Digite sua nota ${i} do aluno: `))
    soma = soma + nota / 3
}
console.log(`A média do aluno: ${soma}.`, soma)



if (soma <= 4 ) {
    console.log("Reprovado", soma.toFixed(1))
}else if (soma >4 && soma <7) {
    console.log("Recuperação", soma.toFixed(1))
}else if (soma >=7 && soma <= 10) {
    console.log("Aprovado", soma.toFixed(1))
} else {
    console.log("Erro nota superior há 10 ", soma.toFixed(1))
}

