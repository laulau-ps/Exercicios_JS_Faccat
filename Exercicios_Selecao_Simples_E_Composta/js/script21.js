//entrada:
let horasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas no mês:"))
let salarioHora = parseFloat(prompt("Digite seu salário por hora: R$"))
let salarioMensal = 0

//calculo sem hora extra
if (horasTrabalhadas <= 160) {
    salarioMensal = horasTrabalhadas * salarioHora
} 

//calculo com acréscimo da hora extra
else {
    let horasExtras = horasTrabalhadas - 160
    salarioMensal = (1 + 50 / 100) * horasExtras * salarioHora + (salarioHora * 160)
}

//saída:
document.getElementById('demo').innerText = "Seu salário esse mês é de: R$" + salarioMensal