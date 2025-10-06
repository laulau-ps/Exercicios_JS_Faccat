let nomeProduto = prompt("Digite o nome do produto")
let qtde = parseInt(prompt("Digite a quantidade adquirida:"))
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"))
let total = qtde * precoUnitario

let percentualDesconto = 0
let totalComDesconto = 0

if (qtde <= 5) {
    percentualDesconto = 2 / 100
} else if (qtde > 5 && qtde <= 10) {
    percentualDesconto = 3 / 100
} else {
    percentualDesconto = 5 / 100
}

totalComDesconto = total * (1 - percentualDesconto)

document.getElementById('demo').innerText = "Total: " + total + "\n Desconto: " + (percentualDesconto * 100) + "% \n Total a pagar: R$" + totalComDesconto