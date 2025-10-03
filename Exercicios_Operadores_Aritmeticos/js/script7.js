//recebe os dados necessários
let eleitores = parseInt(prompt("Digite o total de eleitores:"))
let votosBrancos = parseInt(prompt("Digite o total de votos brancos:"))
let votosNulos = parseInt(prompt("Digite o total de votos nulos:"))
let votosValidos = parseInt(prompt("Digite o total de votos válidos:"))

// calcula as porcentagens
let porcentagemVotosBrancos = votosBrancos / eleitores * 100
let porcentagemVotosNulos = votosNulos / eleitores * 100
let porcentagemVotosValidos = votosValidos / eleitores * 100

//exibe os resultados
alert("Os votos brancos representaram " + porcentagemVotosBrancos + "% do total")
alert("Os votos nulos representaram " + porcentagemVotosNulos + "% do total")
alert("Os votos válidos representaram " + porcentagemVotosValidos + "% do total")

