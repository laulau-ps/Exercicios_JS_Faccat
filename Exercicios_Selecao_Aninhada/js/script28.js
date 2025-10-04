let numero1 = parseInt(prompt("Digite o primeiro valor:"))
let numero2 = parseInt(prompt("Digite o segundo valor:"))
let numero3 = parseInt(prompt("Digite o terceiro valor:"))

if (numero1 > numero2 && numero1 > numero3) {
    document.getElementById('demo').innerText = numero1
} else if (numero2 > numero1 && numero2 > numero3) {
    document.getElementById('demo').innerText = numero2
} else {
    document.getElementById('demo').innerText = numero3
}