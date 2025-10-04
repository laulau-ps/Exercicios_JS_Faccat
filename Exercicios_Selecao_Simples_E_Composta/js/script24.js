let numeroConta = parseInt(prompt("Digite o número da sua conta:"))
let saldo = parseFloat(prompt("Informe seu saldo:"))
let debito = parseFloat(prompt("Informe seus débitos (saídas):"))
let credito = parseFloat(prompt("Informe seus créditos (entradas):"))

let saldoAtual = saldo - debito + credito

if (saldoAtual < 0) {
    document.getElementById('demo').innerText = "Seu saldo atual é de R$" + saldoAtual + "\n Saldo negativo"
} else {
    document.getElementById('demo').innerText = "Seu saldo atual é de R$" + saldoAtual + "\n Saldo positivo"
}
