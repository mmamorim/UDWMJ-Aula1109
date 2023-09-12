

//let nome = prompt("Qual seu nome?")
//let nota1 = parseInt(prompt("Digite nota 1"))
//let nota2 = parseInt(prompt("Digite nota 2"))
//let media = (nota1 + nota2) / 2
//console.log("Seu nome é " + nome)
//console.log(`Suas notas são ${nota1} e ${nota2}`)
//console.log(`Sua média é ${media}`)

let elemNome = document.getElementById("nome")
let elemNota1 = document.getElementById("nota1")
let elemNota2 = document.getElementById("nota2")
let elemRes = document.getElementById("res")
let elemBotao = document.getElementById("botao")

elemBotao.onclick = fazAlgo

function fazAlgo() {
    let nota1 = parseInt(elemNota1.value)
    let nota2 = parseInt(elemNota2.value)
    let media = (nota1 + nota2) / 2
    elemRes.innerText = media
}

