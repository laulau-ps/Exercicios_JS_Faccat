let time1 = prompt("Digite o nome do time 1:")
let golsTime1 = parseInt(prompt("Digite a quantidade de gols que " + time1 + " fez:"))
let time2 = prompt("Digite o nome do time 2:")
let golsTime2 = parseInt(prompt("Digite a quantidade de gols que " + time2 + " fez:"))

if (golsTime1 > golsTime2) {
    document.getElementById('demo').innerText = "Time vencedor: " + time1
} else if (golsTime2 > golsTime1){
    document.getElementById('demo').innerText = "Time vencedor: " + time2
} else {
    document.getElementById('demo').innerText = "EMPATE"
}