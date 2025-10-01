//recebe e armazena todos os dados necessários
let carrosVendidos = parseInt(prompt("Digite a quantidade de carros vendidos:"))
let comissaoPorCarro = parseInt(prompt("Digite a comissão fixa por carro vendido:"))
let valorVendas = parseFloat(prompt("Digite o valor total de suas vendas:"))
let salarioFixo = parseFloat(prompt("Digite o valor de seu salário fixo:"))

// calcula as comissões e soma ao salário fixo
let comissaoFinalCarros = carrosVendidos * comissaoPorCarro
let comissaoFinalVendas = valorVendas * (5/100)
let salarioFinal = salarioFixo + comissaoFinalCarros + comissaoFinalVendas

//exibe
alert("Seu salário final é: R$"+salarioFinal)

