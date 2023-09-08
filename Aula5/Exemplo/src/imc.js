function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

// Função para cálculo da quantidade de calorias exigida pelo metabolismo da pessoa

function calcularCalorias(sexo, idade, peso, altura, nivelAtividade, objetivo){
    let TMB; // Variável para armazenar o cálculo da Taxa de Metabolismo Basal

    if(sexo === 'homem'){
        TMB = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    }
    else if (sexo === 'mulher'){
        TMB = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    }

    let fatorAtividade; // Variável que converte o nivel de atividade para o coeficiente que irá alterar o TMB;

    switch (nivelAtividade) {
        case "sedentario":
            fatorAtividade = 1.2;
            break;
        case "leve":
            fatorAtividade = 1.375;
            break;
        case "moderado":
            fatorAtividade = 1.55;
            break;
        case "ativo":
            fatorAtividade = 1.725;
            break;
        case "muitoAtivo":
            fatorAtividade = 1.9;
            break;
    }

    const caloriasTotais = TMB * fatorAtividade;

    let metaCalorica; // Variável que armazena a meta de calorias, para caso a pessoa queira ganhar ou perder peso

    if (objetivo === "perderPeso") {
        metaCalorica = caloriasTotais - 500; // Reduzir 500 calorias para perder peso
    }
    else if (objetivo === "ganharPeso") {
        metaCalorica = caloriasTotais + 500; // Aumentar 500 calorias para ganhar peso
    }
    else {
        metaCalorica = caloriasTotais; // Manter o peso
    }

    return {
        caloriasTotais: caloriasTotais.toFixed(2),
        metaCalorica: metaCalorica.toFixed(2)
    };
}

module.exports = { calcularIMC, calcularCalorias }; // Exporta a função calcularIMC
