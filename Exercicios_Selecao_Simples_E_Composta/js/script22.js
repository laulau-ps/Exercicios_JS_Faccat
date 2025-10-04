let nome = prompt("Digite seu nome:")
let altura = parseFloat(prompt("Digite sua altura:"))
let sexo = prompt("Digite seu sexo (F/M):")
let pesoIdeal = 0

if (sexo == "M" || sexo == "m"){
    pesoIdeal = (72.7 * altura) - 58
} else {
    pesoIdeal = (62.1 * altura) - 44.7
}

document.getElementById('demo').innerText = "Seu peso ideal é: "+pesoIdeal.toFixed(2)