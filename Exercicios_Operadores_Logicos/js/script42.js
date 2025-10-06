let codigo = parseInt(prompt("Digite o código do empregado:"))
let anoNasc = parseInt(prompt("Digite o ano de seu nascimento:"))
let tempoDeTrabalho = parseInt(prompt("Digite o em que ingressou na empresa:"))

let idade = 2025 - anoNasc
let anosTrabalhados = 2025 - tempoDeTrabalho

if (idade >= 65) {
    document.getElementById('demo').innerText = idade + " anos. \n" + anosTrabalhados + " anos trabalhados. \n Requerer aposentadoria."
} else
    if (anosTrabalhados >= 30) {
        document.getElementById('demo').innerText = idade + " anos. \n" + anosTrabalhados + " anos trabalhados. \n Requerer aposentadoria."
    } else
        if (idade >= 60 && anosTrabalhados >= 25) {
            document.getElementById('demo').innerText = idade + " anos. \n" + anosTrabalhados + " anos trabalhados. \n Requerer aposentadoria."
        } else {
            document.getElementById('demo').innerText = idade + " anos. \n" + anosTrabalhados + " anos trabalhados. \n Não requerer aposentadoria."
        }