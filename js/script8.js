let salarioAtual = parseFloat(prompt("Digite seu salário atual:"))
let reajuste = parseFloat(prompt("Digite o percentual de reajuste:"))

//calcula a taxa e já acrescenta o reajuste no salário
let salarioAtualizado = (1 + reajuste / 100) * salarioAtual

//.toFixed() = limita as casas decimais exibidas 
alert("Seu salário atualizado é: R$"+salarioAtualizado.toFixed(2))