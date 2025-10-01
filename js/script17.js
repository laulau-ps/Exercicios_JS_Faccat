let anoAtual = parseInt(prompt("Digite o ano atual:"))
let anoNasc = parseInt(prompt("Digite o ano em que você nasceu:"))

let idade = anoAtual - anoNasc

if (idade >=16) {
    alert("Poderá votar!")
} else
    alert("Não poderá votar!")
