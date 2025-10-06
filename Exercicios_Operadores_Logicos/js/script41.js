let nota1 = parseFloat(prompt("Digite a 1ª nota:"))
let nota2 = parseFloat(prompt("Digite a 2ª nota:"))
let nota3 = parseFloat(prompt("Digite a 3ª nota:"))
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"))

let mediaFinal = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7

if (mediaFinal >= 9.0) {
    document.getElementById('demo').innerText = "Média final: " + mediaFinal + ". Conceito:A "
} else
    if (mediaFinal >= 7.5 && mediaFinal < 9.0) {
        document.getElementById('demo').innerText = "Média final: " + mediaFinal + ". Conceito: B"
    } else
        if (mediaFinal >= 6.0 && mediaFinal < 7.5) {
            document.getElementById('demo').innerText = "Média final: " + mediaFinal + ". Conceito: C"
        } else {
            document.getElementById('demo').innerText = "Média final: " + mediaFinal + ". Conceito: D"
        }