let ladoA = parseFloat(prompt("Informe o tamanho do 1º lado:"))
let ladoB = parseFloat(prompt("Informe o tamanho do 2º lado:"))
let ladoC = parseFloat(prompt("Informe o tamanho do 3º lado:"))

if (ladoA + ladoB > ladoC) {
    if (ladoB + ladoC > ladoA) {
        if (ladoC + ladoA > ladoB) {
            document.getElementById('demo').innerText = "Os valores formam um triângulo."
        } else {
            document.getElementById('demo').innerText = "Os valores NÃO formam um triângulo."
        }
    } else {
        document.getElementById('demo').innerText = "Os valores NÃO formam um triângulo."
    }
} else {
    document.getElementById('demo').innerText = "Os valores NÃO formam um triângulo."

}