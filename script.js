function classificarIMCs() {
    var terminou = false
    var totalPessoas = 0
    var somaIMCs = 0
    var maiorIMC = 0

    while (terminou == false) {
        totalPessoas++
        var peso = parseFloat(prompt("Digite o seu peso"))
        var altura = parseFloat(prompt("Digite a sua altura"))
        var imc = peso / altura**2
        somaIMCs += imc

        if (imc < 18.5) {
            alert("Abaixo do peso normal")
        } else if (imc >= 18.5 && imc < 24.9) {
            alert("Peso normal")
        } else if (imc >= 25.0 && imc < 29.9) {
            alert("Excesso de peso")
        } else if (imc >= 30.0 && imc < 34.9) {
            alert("Obesidade classe I")
        } else if (imc >= 35.0 && imc < 39.9) {
            alert("Obesidade classe II")
        } else {
            alert("Obesidade classe III")
        }

        if (imc > maiorIMC) {
            maiorIMC = imc
        }

        var desejaTerminar = prompt("Deseja terminar? (S)im ou (N)ão")
        
        if (desejaTerminar == 'S' || desejaTerminar == 's') {
            terminou = true
            var media = somaIMCs / totalPessoas
            maiorIMC = maiorIMC.toFixed(2)
            media = media.toFixed(2)
            alert(`Programa Finalizado
            Quantidade de usuários avaliados: ${totalPessoas}
            Maior IMC Calculado: ${maiorIMC}
            Média dos IMC(s): ${media}
            `)
        }
    }
}
