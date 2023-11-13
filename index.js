
// Modifique os parâmetros para calcular o rank e level
let rank = rankCalculator(45,1)

// Calcula balanço de vitórias e define 
function rankCalculator(wins = 1, losses = 1) { 

    // Define variáveis para o cálculo
    let balance = wins - losses
    let level = "foo"

    // Usa balanço de vitórias para definir o level
    if (balance <= 10) {level = "Ferro"}
    else if (balance >= 11 && balance <= 20) {level = "Bronze"}
    else if (balance >= 21 && balance <= 50) {level = "Prata"}
    else if (balance >= 51 && balance <= 80) {level = "Ouro"}
    else if (balance >= 81 && balance <= 90) {level = "Diamante"}
    else if (balance >= 91 && balance <= 100) {level = "Lendário"}
    else if (balance >= 101) {level = "Imortal"}

    // Retorna um vetor com dois valroes
    return [balance, level]
}

// Mensagem usando Interpolação de Strings referenciando valores do vetor 'rank'
console.log(`O Herói tem de saldo de ${rank[0]} está no nível de ${rank[1]}`)