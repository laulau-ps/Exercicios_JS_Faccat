let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))

if (valor1 > valor2) {
    document.getElementById('demo').innerText = "Primeiro valor é o maior."
} else if (valor2 > valor1) {
    document.getElementById('demo').innerText = "Segundo valor é o maior"
} else {
    document.getElementById('demo').innerText = "Os valores informados são iguais"
}