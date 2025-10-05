let codUsuario = parseInt(prompt("Informe seu código de usuário"))
let senha = 0

if (codUsuario != 1234) {
    alert("Usuário inválido, reinicie para tentar novamente.")
} else {
    senha = parseInt(prompt("Digite sua senha:"))
    if (senha != 9999) {
        alert("Senha incorreta! Reinicie para tentar novamente.")
    }
    else {
        alert("Acesso permitido.")
        document.getElementById('demo').innerText = "Olá usuário"
    }
}