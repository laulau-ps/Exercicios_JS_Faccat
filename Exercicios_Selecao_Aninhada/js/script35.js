let tipoCombustivel = prompt("Informe o tipo de combustível vendido: A - Alcool | G - Gasolina")
let litrosVendidos = parseInt(prompt("Digite quantos litros foram vendidos?"))
let precoFinal = 0

if (tipoCombustivel == "A" || tipoCombustivel == "a" && litrosVendidos <= 20) {
    precoFinal = litrosVendidos * (1 - 3 / 100) * 2.90
} else
    if (tipoCombustivel == "A" || tipoCombustivel == "a" && litrosVendidos > 20) {
        precoFinal = litrosVendidos * (1 - 5 / 100) * 2.90
    } else
        if (tipoCombustivel == "G" || tipoCombustivel == "g" && litrosVendidos <= 20) {
            precoFinal = litrosVendidos * (1 - 4 / 100) * 3.30
        } else {
            precoFinal = litrosVendidos * (1 - 6 / 100) * 3.30
        }

document.getElementById('demo').innerText = "Valor a ser pago: R$" + precoFinal.toFixed(2)