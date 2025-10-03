//soma porcentagem dos acréscimos 
let percentualAcrescimoTotal = 73/100

let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"))

//calcula o valor final somando o valor das porcentagens sobre o custo + custo
let valorFinalConsumidor = (percentualAcrescimoTotal * custoFabrica)  + custoFabrica

alert("O custo final ao consumidor é de R$"+valorFinalConsumidor.toFixed(2))

