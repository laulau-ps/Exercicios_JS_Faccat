let qtdeAtual = parseInt(prompt("Digite a quantidade atual do produto em estoque"))
let qtdeMax = parseInt(prompt("Digite a quantidade máxima permitida:"))
let qtdeMin = parseInt(prompt("Digite a quantidade mínima exigida:"))

let qtdeMedia = (qtdeMax + qtdeMin) / 2

if (qtdeAtual >= qtdeMedia) {
    document.getElementById('demo').innerText = "Quantidade média: " + qtdeMedia + "\n Quantidade atual:" + qtdeAtual + "\n Não efetuar compra."
} else {
    document.getElementById('demo').innerText = "Quantidade média: " + qtdeMedia + "\n Quantidade atual:" + qtdeAtual + "\n Efetuar compra."
}