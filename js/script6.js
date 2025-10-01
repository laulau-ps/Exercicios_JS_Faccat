let anos = parseInt(prompt("Digite seus anos de vida:"))
let meses = parseInt(prompt("Digite quantos meses se passaram desde o mês do seu aniversário:"))
let dias = parseInt(prompt("Digite quantos dias se passaram desde seu último mesversário:"))

//converte anos em dias, meses em dias, e calcula 
let idadeDias = (anos * 365) + (meses * 30) + dias
alert("Sua idade total em dias é: "+idadeDias)