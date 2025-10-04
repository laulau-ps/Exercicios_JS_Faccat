let salarioFixo = parseFloat(prompt("Digite seu salário fixo:"))
let valorVendas = parseFloat(prompt("Digite o valor de suas vendas:"))

let comissao = 0
let salarioComComissao = 0

if (valorVendas <= 1500) {
    comissao = valorVendas * (3 / 100)
    salarioComComissao = salarioFixo + comissao
} else {
    let comissaoExtra = (valorVendas - 1500) * (5 / 100)
    comissao = 1500 * (3 / 100)
    salarioComComissao = salarioFixo + comissao + comissaoExtra
}

document.getElementById('demo').innerText = "Seu salário total é: R$" + salarioComComissao