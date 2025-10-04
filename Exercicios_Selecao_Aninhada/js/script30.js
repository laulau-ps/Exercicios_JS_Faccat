let numero1 = parseInt(prompt("Digite o primeiro valor:"))
let numero2 = parseInt(prompt("Digite o segundo valor:"))
let numero3 = parseInt(prompt("Digite o terceiro valor:"))

// 1, 2, 3
if (numero1 < numero2 && numero2 < numero3) {
    document.getElementById('demo').innerText = numero1 + ", " + numero2 + ", " + numero3
} else
    //2, 1, 3
    if (numero2 < numero1 && numero1 < numero3) {
        document.getElementById('demo').innerText = numero2 + ", " + numero1 + ", " + numero3
    } else
        //3, 2, 1
        if (numero3 < numero2 && numero2 < numero1) {
            document.getElementById('demo').innerText = numero3 + ", " + numero2 + ", " + numero1
        } else
            //1, 3, 2
            if (numero1 < numero3 && numero3 < numero2) {
                document.getElementById('demo').innerText = numero1 + ", " + numero3 + ", " + numero2
            } else
                //2, 3, 1
                if (numero2 < numero3 && numero3 < numero1) {
                    document.getElementById('demo').innerText = numero2 + ", " + numero3 + ", " + numero1
                }
                //3, 1, 2
                else {
                    document.getElementById('demo').innerText = numero3 + ", " + numero1 + ", " + numero2
                }
