let numero = parseFloat(prompt("Digite um número:"))

if (numero > 0) {
    document.getElementById('demo').innerText = "Positivo"
} else
    if (numero < 0) {
        document.getElementById('demo').innerText = "Negativo"
    } else {
        document.getElementById('demo').innerText = "Zero"
    }