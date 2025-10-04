let horaInicio = parseInt(prompt("Digite o horário de início da partida (sem os minutos):"))
let horaFim = parseInt(prompt("Digite o horário do fim da partida (sem os minutos):"))
let tempoDuracao = 0

if (horaInicio < horaFim) {
    tempoDuracao = horaFim - horaInicio
    document.getElementById('demo').innerText = "Início: " + horaInicio + "h \n Fim: " + horaFim + "h \n A partida durou: " + tempoDuracao + "h."
} else {
    tempoDuracao = (horaFim - horaInicio) + 24
    document.getElementById('demo').innerText = "Início: " + horaInicio + "h \n Fim: " + horaFim + "h \n A partida durou: " + tempoDuracao + "h."
}