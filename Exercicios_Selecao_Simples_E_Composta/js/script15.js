let qtdeMacas = parseInt(prompt("Digite a quantidade de maçãs compradas:"))

// declara a variavel do valor, antes dos cálculos
let valorTotal

//realiza o cálculo de acordo com o if ou else
if (qtdeMacas >= 12) {
    //variavel já declarada anteriormente recebe o cálculo
    valorTotal = qtdeMacas * 1.00

}else {
    valorTotal = qtdeMacas * 1.30
}

//exibe o total, a depender de qual cálculo foi realizado
alert("O total da sua compra foi: R$" + valorTotal.toFixed(2))

