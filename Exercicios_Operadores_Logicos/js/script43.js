let ladoA = parseFloat(prompt("Digite o valor do primeiro lado:"))
let ladoB = parseFloat(prompt("Digite o valor do segundo lado:"))
let ladoC = parseFloat(prompt("Digite o valor do terceiro lado:"))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA == ladoB && ladoB == ladoC) {
        document.getElementById('demo').innerText = "Triângulo Equilátero"
    } else
        if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
            document.getElementById('demo').innerText = "Triângulo Isóceles"
        } else {
            document.getElementById('demo').innerText = "Triângulo Escaleno"
        }
} else {
    document.getElementById('demo').innerText = "Não é possível formar um triângulo"
}