let kgMaca = parseFloat(prompt("Digite quantos kg de maçã foram comprados:"))
let kgMorango = parseFloat(prompt("Digite quantos kg de morango foram comprados:"))

let total = 0

if (kgMaca <= 5) {
    total = kgMaca * 1.80
} else {
    total = kgMaca * 1.50
}
if (kgMorango <= 5) {
    total = total + kgMorango * 2.50
} else {
    total = total + kgMorango * 2.20
}
if (total > 25 || (kgMaca + kgMorango) > 8) {
    total = total * (1 - 10 / 100)
}

document.getElementById('demo').innerText = "Total de kg de maçã comprados: " + kgMaca + "kg | Total de kg de morangos comprados: " + kgMorango + "kg \n Valor final a ser pago: R$" + total