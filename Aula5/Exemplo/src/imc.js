function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais
}

// Função para cálculo da taxa de metabolismo basal da pessoa

function calcularTMB(sexo, idade, peso, altura){
    let TMB; // Variável para armazenar o cálculo da Taxa de Metabolismo Basal

    if(sexo === 'homem'){
        TMB = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    }
    else if (sexo === 'mulher'){
        TMB = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    }

    return (TMB);
}

// Função para calculo das calorias exigidas pelo metabolismo da pessoa com base no nivel de atividade fisica

function calcularCaloriasTotais(TMB, nivelAtividade){
    
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

    return(caloriasTotais);

}

module.exports = { calcularIMC, calcularTMB, calcularCaloriasTotais }; // Exporta a função calcularIMC
