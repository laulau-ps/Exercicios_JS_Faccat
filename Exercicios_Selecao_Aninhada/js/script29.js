let numero1 = parseInt(prompt("Digite o primeiro valor:"))
let numero2 = parseInt(prompt("Digite o segundo valor:"))
let numero3 = parseInt(prompt("Digite o terceiro valor:"))
let soma = 0

// 1 e 2
if (numero1 > numero2 && numero2 > numero3) {
    soma = numero1 + numero2
} else
    //1 e 3
    if (numero1 > numero2 && numero3 > numero2) {
        soma = numero1 + numero3
    } //2 e 3
    else {
        soma = numero3 + numero2
    }

document.getElementById('demo').innerText = soma