let idadeHomem1 = parseInt(prompt("Digite a idade do 1º homem:"))
let idadeHomem2 = parseInt(prompt("Digite a idade do 2º homem:"))

let idadeMulher1 = parseInt(prompt("Digite a idade da 1ª mulher:"))
let idadeMulher2 = parseInt(prompt("Digite a idade da 2ª mulher:"))

let homemMaisVelho = 0
let homemMaisNovo = 0
let mulherMaisNova = 0
let mulherMaisVelha = 0

let soma = 0
let produto = 0

if (idadeHomem1 > idadeHomem2) {
    homemMaisVelho = idadeHomem1
    homemMaisNovo = idadeHomem2
} else {
    homemMaisNovo = idadeHomem1
    homemMaisVelho = idadeHomem2
}
if (idadeMulher1 > idadeMulher2) {
    mulherMaisNova = idadeMulher2
    mulherMaisVelha = idadeMulher1
} else {
    mulherMaisNova = idadeMulher1
    mulherMaisVelha = idadeMulher2
}

soma = homemMaisVelho + mulherMaisNova
produto = homemMaisNovo * mulherMaisVelha

document.getElementById('demo').innerText = "Idade do homem mais velho: " + homemMaisVelho + " + Idade da mulher mais nova: " + mulherMaisNova + " = " + soma + "\n Idade do homem mais novo: " + homemMaisNovo + " * Idade da mulher mais velha: " + mulherMaisVelha + " = " + produto